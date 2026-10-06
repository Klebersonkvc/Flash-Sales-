"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CheckoutController_1 = require("../controllers/CheckoutController");
const ExportController_1 = require("../controllers/ExportController");
const metricsMiddleware_1 = require("../middlewares/metricsMiddleware");
const router = (0, express_1.Router)();
exports.router = router;
const checkoutController = new CheckoutController_1.CheckoutController();
const exportController = new ExportController_1.ExportController();
router.post("/checkout", (req, res, next) => checkoutController.handle(req, res).catch(next));
router.post("/tickets/export", (req, res, next) => exportController.handle(req, res).catch(next));
router.get("/metrics", metricsMiddleware_1.metricsController);
//# sourceMappingURL=index.js.map