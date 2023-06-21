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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureLoggedIn = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = require("../models/User.model");
const router = express_1.default.Router();
passport_1.default.use(new passport_local_1.Strategy({ usernameField: 'email' }, function verify(username, password, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('local strategy');
            const user = yield User_model_1.User.findOne({ email: username });
            if (!user) {
                return cb(null, false, { message: 'No user with that email' });
            }
            const authenticated = yield bcrypt_1.default.compare(password, user.password);
            if (authenticated) {
                return cb(null, user);
            }
            else {
                return cb(null, false, { message: 'Incorrect Passowrd' });
            }
        }
        catch (e) {
            return cb(e);
        }
    });
}));
passport_1.default.serializeUser(function (user, cb) {
    cb(null, { id: user._id, email: user.email });
});
passport_1.default.deserializeUser(function (user, cb) {
    return cb(null, user);
});
router.post('/login', passport_1.default.authenticate('local', {
    successReturnToOrRedirect: '/api/auth/login-success',
    failureRedirect: '/api/auth/login-failed',
    failureMessage: true,
}));
router.get('/login-success', (req, res) => {
    res.send('login successful');
});
router.get('/login-failed', (req, res) => {
    res.status(400).send('login failed');
});
router.get('/logout', function (req, res) {
    req.logout(function (err) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.send('You have successfully logged out.');
    });
});
router.post('/signup', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        try {
            yield User_model_1.User.create({
                email: req.body.email,
                password: hashedPassword,
            });
        }
        catch (e) {
            return res.status(400).send(`Error: ${e}`);
        }
        return res.send('User created successfully');
    });
});
let ensureLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(400).send('Not Authorized. Please log in first.');
        return;
    }
    next();
};
exports.ensureLoggedIn = ensureLoggedIn;
router.get('/status', ensureLoggedIn, (req, res) => {
    res.send('Authorized');
});
exports.default = router;
