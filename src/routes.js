"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateProductController_1 = require("./controllers/CreateProductController");
const router = (0, express_1.Router)();
exports.router = router;
const createProduct = new CreateProductController_1.CreateProductController();
router.post("/product", createProduct.handle);
