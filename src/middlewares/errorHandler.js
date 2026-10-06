"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error("Global Error Handler:", err);
    res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
}
//# sourceMappingURL=errorHandler.js.map