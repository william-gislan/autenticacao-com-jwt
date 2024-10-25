const express = require('express');
const authMiddleware = require('../middleware/auth-midlleware');

const protectedRouter = express.Router();

protectedRouter.get('/protected/dashboard', authMiddleware, (req, res) => {
  const username = req.authenticateUser.username;
  res.json({message: `Voce esta na area protegida ${username}`})
})

module.exports = protectedRouter;