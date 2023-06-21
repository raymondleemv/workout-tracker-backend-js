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
const config_database_1 = __importDefault(require("../../database/config.database"));
const database = __importStar(require("../../database/exercise.database"));
const Exercise_model_1 = require("../../models/Exercise.model");
(0, config_database_1.default)();
describe('database - addExercise', () => {
    let toBeDeletedExerciseID;
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield database.deleteExercise(toBeDeletedExerciseID);
    }));
    it('Test to pass - should add an exercise to the database', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            name: 'testing',
            exercise_type: 'testing',
        });
        const document = yield database.addExercise(exercise);
        const response = yield Exercise_model_1.Exercise.exists({ _id: document._id });
        expect(response).not.toBe(null);
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if name is not provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            exercise_type: 'testing',
        });
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if exercise type is not provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            name: 'testing',
        });
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if name and exercise type are not provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({});
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            name: {},
            exercise_type: 'testing',
        });
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            name: null,
            exercise_type: 'testing',
        });
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
    it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', () => __awaiter(void 0, void 0, void 0, function* () {
        const exercise = new Exercise_model_1.Exercise({
            name: undefined,
            exercise_type: 'testing',
        });
        yield expectAsync(database.addExercise(exercise)).toBeRejected();
        toBeDeletedExerciseID = exercise._id;
    }));
});
