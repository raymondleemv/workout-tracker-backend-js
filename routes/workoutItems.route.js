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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database = __importStar(require("../database/workoutItem.database"));
const WorkoutItem_model_1 = require("../models/WorkoutItem.model");
const router = express_1.default.Router();
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workoutItem = new WorkoutItem_model_1.WorkoutItem({
        weight: req.body.weight,
        reps: req.body.reps,
        workout: req.body.workout,
        exercise: req.body.exerciseID,
    });
    try {
        yield database.addWorkoutItem(workoutItem);
    }
    catch (e) {
        res.status(400).send(e);
    }
    res.send('add workoutItem successful');
}));
router.post('/getWorkoutItemsByWorkoutId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workoutItems = yield database.getWorkoutItemsByWorkoutId(req.body._id);
        res.send(workoutItems);
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
router.post('/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workoutItem = new WorkoutItem_model_1.WorkoutItem({
        _id: req.body._id,
        weight: req.body.weight,
        reps: req.body.reps,
        workout: req.body.workout,
        exercise: req.body.exerciseID,
    });
    try {
        yield database.editWorkoutItem(workoutItem);
    }
    catch (e) {
        res.status(400).send(e);
    }
    res.send('edit workoutItem successful');
}));
router.post('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database.deleteWorkoutItem(req.body);
    }
    catch (e) {
        res.status(400).send(e);
    }
    res.send('delete workoutItem successful');
}));
exports.default = router;
