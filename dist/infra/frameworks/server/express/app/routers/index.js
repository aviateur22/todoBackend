"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const routerTest_1 = __importDefault(require("./api/routerTest"));
const router = express_1.default.Router();
// Home backend Todos
router.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome on the todo list project'
    });
});
// Api Todo
router.use('/api/v1', api_1.default);
// Router Test unitaire
router.use(routerTest_1.default);
exports.default = router;
