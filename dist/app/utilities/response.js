"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: data.success,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data,
    });
};
exports.default = response;
