"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutItem = void 0;
const mongoose_1 = require("mongoose");
const workoutItemSchema = new mongoose_1.Schema({
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    workout: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Workout',
    },
    exercise: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Exercise',
    },
}, { collection: 'WorkoutItems' });
const WorkoutItem = (0, mongoose_1.model)('WorkoutItem', workoutItemSchema);
exports.WorkoutItem = WorkoutItem;
