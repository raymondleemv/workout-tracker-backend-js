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
exports.deleteWorkoutItem = exports.editWorkoutItem = exports.getWorkoutItemsByWorkoutId = exports.addWorkoutItem = void 0;
// import mongoose from 'mongoose';
// import { Workout } from '../models/Workout.model';
const WorkoutItem_model_1 = require("../models/WorkoutItem.model");
function addWorkoutItem(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const workoutItem = yield WorkoutItem_model_1.WorkoutItem.create(data);
        // const workout = await Workout.findOne({ _id: data.workout });
        // workout?.workout_items.push(data._id);
        // await workout?.save();
        // console.log(workout);
        return workoutItem;
    });
}
exports.addWorkoutItem = addWorkoutItem;
function getWorkoutItemsByWorkoutId(workoutID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield WorkoutItem_model_1.WorkoutItem.find({ workout: workoutID })
            .populate('exercise')
            .exec();
    });
}
exports.getWorkoutItemsByWorkoutId = getWorkoutItemsByWorkoutId;
function editWorkoutItem(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(data);
        const workoutItem = yield WorkoutItem_model_1.WorkoutItem.findOneAndUpdate({ _id: data._id }, data);
        console.log(workoutItem);
    });
}
exports.editWorkoutItem = editWorkoutItem;
function deleteWorkoutItem(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const workoutItem = yield WorkoutItem_model_1.WorkoutItem.deleteOne({ _id: data._id });
        // const workout = await Workout.findOne({ _id: data.workout });
        // const removeIndex = workout?.workout_items.indexOf(
        // 	new mongoose.Types.ObjectId(data.workout)
        // );
        // console.log(removeIndex);
        // console.log(workout?.workout_items);
        // workout?.workout_items.splice(removeIndex!, 1);
        // console.log(workout?.workout_items);
        // await workout?.save();
        // console.log(workout);
        return workoutItem;
    });
}
exports.deleteWorkoutItem = deleteWorkoutItem;
