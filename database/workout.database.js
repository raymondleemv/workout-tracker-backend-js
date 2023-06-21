"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWorkout = exports.editWorkout = exports.getWorkoutsByUserId = exports.addWorkout = void 0;
const Workout_model_1 = require("../models/Workout.model");
function addWorkout(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Workout_model_1.Workout.create(data);
    });
}
exports.addWorkout = addWorkout;
function getWorkoutsByUserId(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Workout_model_1.Workout.find({ user: userID });
    });
}
exports.getWorkoutsByUserId = getWorkoutsByUserId;
function editWorkout(workout) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(workout);
        const doc = yield Workout_model_1.Workout.findOneAndUpdate({ _id: workout._id }, workout);
        console.log(doc);
    });
}
exports.editWorkout = editWorkout;
function deleteWorkout(workoutID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Workout_model_1.Workout.deleteOne({ _id: workoutID });
    });
}
exports.deleteWorkout = deleteWorkout;
