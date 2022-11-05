"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv/config");
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const songs_1 = __importDefault(require("./routes/songs"));
const session_1 = require("./middlewares/session");
const error_handler_1 = __importDefault(require("./middlewares/error-handler"));
const artists_1 = __importDefault(require("./routes/artists"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: "../.env" });
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const PORT = process.env.PORT || 4444;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(session_1.corsConfig));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(error_handler_1.default);
// initialize routes
app.get("/", (req, res, next) => res.json("welcome to the api"));
app.use("/api/auth", authRouter_1.default);
app.use("/api/artists", artists_1.default);
app.use("/api/songs", songs_1.default);
httpServer.listen(PORT);
