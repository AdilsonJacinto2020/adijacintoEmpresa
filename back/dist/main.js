"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dns_1 = __importDefault(require("dns"));
dns_1.default.setDefaultResultOrder('ipv4first');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const allowedOrigins = [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:5173',
        'http://localhost:3000',
    ].map((o) => o.replace(/\/$/, ''));
    app.enableCors({
        origin: allowedOrigins,
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map