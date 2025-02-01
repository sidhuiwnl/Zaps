"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use(express_1.default.json());
app.use("/api/v1/user", userRoutes_1.default);
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
