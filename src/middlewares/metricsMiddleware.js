"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMetrics = requestMetrics;
exports.metricsController = metricsController;
const prom_client_1 = __importDefault(require("prom-client"));
// Coleta as métricas padrão do Node.js (CPU, GC, Memória)
const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
collectDefaultMetrics();
// Cria um histograma para medir duração e contagem de requisições HTTP
const httpRequestDurationMicroseconds = new prom_client_1.default.Histogram({
    name: "http_request_duration_ms",
    help: "Duration of HTTP requests in ms",
    labelNames: ["method", "route", "status_code"],
    buckets: [10, 50, 100, 300, 500, 1000, 2000, 5000],
});
function requestMetrics(req, res, next) {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        httpRequestDurationMicroseconds
            .labels(req.method, req.route ? req.route.path : req.path, res.statusCode.toString())
            .observe(duration);
    });
    next();
}
async function metricsController(req, res) {
    res.set("Content-Type", prom_client_1.default.register.contentType);
    const metrics = await prom_client_1.default.register.metrics();
    res.end(metrics);
}
//# sourceMappingURL=metricsMiddleware.js.map