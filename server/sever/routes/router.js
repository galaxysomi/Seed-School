const express = require('express');
const router = express.Router();
const path = require('path');
//Load User model 
const Teacher = require('../../models/Teacher');

const check = require('../config/auth')
const teacher = require('../controller/admin/managerTeacher')
const login = require('../controller/login')
const activity = require('../controller/admin/activity')
const foodmenu = require('../controller/admin/foodMenu')


//login
router.post('/api/parent/login',check.checkLogin, login.loginParent)
router.post('/api/teacher/login',check.checkLogin,  login.loginTeacher)
router.post('/api/admin/login',check.checkLogin,  login.loginAdmin)


//ManagerTeacher
router.post('/api/admin/teacher',check.checkAdmin, teacher.add);
router.get('/api/admin/teacher',check.checkAdmin, teacher.find);
router.put('/api/admin/teacher/:id',check.checkAdmin, teacher.update);
router.delete('/api/admin/teacher/:id',check.checkAdmin, teacher.delete);


//Activity
router.post('/api/admin/activities',check.checkAdmin, activity.create);
router.get('/api/admin/activities',check.checkAdmin, activity.find);
router.put('/api/admin/activities/:id',check.checkAdmin, activity.update);
router.delete('/api/admin/activities/:id',check.checkAdmin, activity.delete);

//FoodMenu7
router.post('/api/admin/foodmenu', foodmenu.create);
router.get('/api/admin/foodmenu', foodmenu.find);
router.put('/api/admin/foodmenu/:id', foodmenu.update);
router.delete('/admin/foodmenu/:id', foodmenu.delete);


module.exports = router;

