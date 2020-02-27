class CommandBus {
    constructor(registerHandlers)
    publish(command) {
        registerHandlers.find(
            (key, value) => key === command.name
        ).vaue.handle(command);
    }
}

class ProductCommandHander extends CommandHandler {
    constructor(unitofwork);

    handle(command) {
        _handleAssigneProductToDelivery(command);
    }
    _handleAssigneProductToDelivery(command) {
        const product = this.unitofwork
            .ProductsRepository
            .find(command.productId);
        const delivery = this.unitofwork
            .DeliveriesRepository
            .find(command.deliveryId);
        const productDelivery = new ProductDelivery(
            new PackageValidator(),
            new DeliveryValidator()
        );
        productDelivery.assigneProductDelivery(product, delivery);
    }
}