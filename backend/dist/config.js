"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const config = () => {
    const nodeEnv = process.env.NODE_ENV;
    let mongoURL = process.env.MONGO_URL;
    if (nodeEnv === 'test') {
        mongoURL = process.env.MONGO_URL_TEST;
    }
    return {
        mongoURL,
        nodeEnv
    };
};
exports.default = config();
//# sourceMappingURL=config.js.map