"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutController = void 0;
const CheckoutService_1 = require("../services/CheckoutService");
class CheckoutController {
    checkoutService = new CheckoutService_1.CheckoutService();
    async handle(req, res) {
        const { eventId, userId, quantity } = req.body;
        if (!eventId || !userId || !quantity) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        try {
            const order = await this.checkoutService.processCheckout(eventId, userId, quantity);
            return res.status(201).json({ message: "Checkout successful", order });
        }
        catch (error) {
            if (error.message === "Tickets sold out or insufficient quantity") {
                return res.status(409).json({ error: error.message });
            }
            throw error;
        }
    }
}
exports.CheckoutController = CheckoutController;
//# sourceMappingURL=CheckoutController.js.map