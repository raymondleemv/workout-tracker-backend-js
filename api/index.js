"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_database_1 = __importDefault(require("../database/config.database"));
const exercises_route_1 = __importDefault(require("../routes/exercises.route"));
const users_route_1 = __importDefault(require("../routes/users.route"));
const workouts_route_1 = __importDefault(require("../routes/workouts.route"));
const workoutItems_route_1 = __importDefault(require("../routes/workoutItems.route"));
const passport_1 = __importDefault(require("passport"));
const auth_route_1 = __importStar(require("../routes/auth.route"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
(0, config_database_1.default)();
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGODB_URI,
    }),
}));
app.use(passport_1.default.authenticate('session'));
app.use('/api/auth', auth_route_1.default);
app.use(auth_route_1.ensureLoggedIn);
app.use('/api/exercises', exercises_route_1.default);
app.use('/api/users', users_route_1.default);
app.use('/api/workouts', workouts_route_1.default);
app.use('/api/workout-items', workoutItems_route_1.default);
app.listen(3002, () => {
    console.log('app listenting on port 3002.');
});
