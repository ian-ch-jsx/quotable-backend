const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const profile = await ProfileService.create(req.body.name);
    res.send(profile);
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
