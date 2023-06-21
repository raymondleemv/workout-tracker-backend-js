"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
const mongoose_1 = require("mongoose");
const exerciseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    exercise_type: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'exercises', strict: 'throw' });
const Exercise = (0, mongoose_1.model)('Exercise', exerciseSchema);
exports.Exercise = Exercise;
