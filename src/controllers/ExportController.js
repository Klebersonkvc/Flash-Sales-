"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportController = void 0;
const ExportService_1 = require("../services/ExportService");
class ExportController {
    exportService = new ExportService_1.ExportService();
    async handle(req, res) {
        const recordsCount = req.body.records || 500000; // Ajustável para não travar de imediato se não quiser
        // Isso vai bloquear o event loop (intencional conforme requisito)
        const reportData = await this.exportService.generateMassiveReport(recordsCount);
        return res.status(200).json({
            message: "Export completed",
            sizeInBytes: Buffer.byteLength(reportData, "utf8")
        });
    }
}
exports.ExportController = ExportController;
//# sourceMappingURL=ExportController.js.map