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
exports.deleteUser = exports.editUser = exports.getUserByUserId = exports.addUser = void 0;
const User_model_1 = require("../models/User.model");
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.User.create(data);
    });
}
exports.addUser = addUser;
function getUserByUserId(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.User.find({ user: userID });
    });
}
exports.getUserByUserId = getUserByUserId;
function editUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.User.findOneAndUpdate({ _id: user._id }, user);
    });
}
exports.editUser = editUser;
function deleteUser(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.User.deleteOne({ _id: userID });
    });
}
exports.deleteUser = deleteUser;
