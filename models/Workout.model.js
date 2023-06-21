"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true,
    },
    workout_items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'WorkoutItem' }],
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'Workouts' });
const Workout = (0, mongoose_1.model)('Workout', workoutSchema);
exports.Workout = Workout;
