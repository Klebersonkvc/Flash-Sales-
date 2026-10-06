"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const errorHandler_1 = require("./middlewares/errorHandler");
const metricsMiddleware_1 = require("./middlewares/metricsMiddleware");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(metricsMiddleware_1.requestMetrics); // Middlewares de métricas globais
app.use(routes_1.router);
app.use(errorHandler_1.errorHandler); // Tratamento global de erros deve vir no final
//# sourceMappingURL=app.js.map