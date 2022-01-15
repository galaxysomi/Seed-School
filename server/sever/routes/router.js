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
router.post('/parent/login', login.loginParent)
router.post('/teacher/login', login.loginTeacher)
router.post('/admin/login', login.loginAdmin)


//ManagerTeacher
router.post('/admin/teacher',check.checkAdmin, teacher.add);
router.get('/admin/teacher',check.checkAdmin, teacher.find);
router.put('/admin/teacher/:id',check.checkAdmin, teacher.update);
router.delete('/admin/teacher/:id',check.checkAdmin, teacher.delete);


//Activity
router.post('/admin/activities',check.checkAdmin, activity.create);
router.get('/admin/activities',check.checkAdmin, activity.find);
router.put('/admin/activities/:id',check.checkAdmin, activity.update);
router.delete('/admin/activities/:id',check.checkAdmin, activity.delete);

//FoodMenu7
router.post('/admin/foodmenu', foodmenu.create);
router.get('/admin/foodmenu', foodmenu.find);
router.put('/admin/foodmenu/:id', foodmenu.update);
router.delete('/admin/foodmenu/:id', foodmenu.delete);


module.exports = router;

