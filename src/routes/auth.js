const express = require('express');
const jwcControllers = require('../controllers/JwcControllers');

const authRouter = express.Router();


authRouter.post('/register', jwcControllers.register);

authRouter.post('/login', jwcControllers.login);

module.exports = authRouter;