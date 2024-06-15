"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const libroRoute_1 = __importDefault(require("./routes/libroRoute"));
const app = (0, express_1.default)();
// Middleware para analizar JSON en las solicitudes POST y PUT
app.use(express_1.default.json());
// Rutas
app.use('/api/v1/libros', libroRoute_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map