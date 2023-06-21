"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    exercises: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Exercise' }],
    workouts: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Workout' }],
}, { collection: 'users' });
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
