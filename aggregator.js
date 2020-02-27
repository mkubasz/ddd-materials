class PackageDelivery extends AggregatorRoot {
    constructor(
        packageValidator, 
        deliveryValidator
    );

    asssignPackegeToDelivery(package, delivery) {
        if (
            // PackageCheck table
            packageValidator.checked(package.id) && 
            // DeliveryStatus table
            deliveryValidator.open(delivery.id) &&
            // DeliveryAuthorization and rules
            deliveryValidator.allowAddNewPackage(delivery.id)
        ) {
                super.commit(
                    new AssignedPackageToDelivery(
                        new Uuid(), 
                        package.id, 
                        delivery.id
                    )
                );
                return;
        }
        super.commit(
            new DisallowedAssignePackage(
                new Uuid(), 
                package.id
            )
        );
    }
}