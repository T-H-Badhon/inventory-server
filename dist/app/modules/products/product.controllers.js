"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const response_1 = __importDefault(require("../../utilities/response"));
const product_services_1 = require("./product.services");
const addProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.productServices.addProduct(req.body);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: '',
        data: result,
    });
}));
const getAllProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.productServices.getAllProduct();
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: '',
        data: result,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.productServices.updateProduct(req.params.id, req.body);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: '',
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.productServices.deleteProduct(req.params.id);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: '',
        data: result,
    });
}));
exports.productControllers = {
    addProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
};
