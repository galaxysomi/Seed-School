const jwt =  require("jsonwebtoken")
const express = require("express")

//Load User
const Teacher = require('../../models/Teacher')
const Parent = require('../../models/Parent')
const Admin = require('../../models/admin')


exports.verifyToken = (req, res, next) => {
	try {
        const authHeader = req.header('Authorization')
	    const token = authHeader && authHeader.split(' ')[1]
		const decoded = jwt.verify(token,'longphu')
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}


exports.checkTeacher =async (req, res,next ) => {
    try{
        const authHeader = req.header('Authorization')
	    const token = authHeader && authHeader.split(' ')[1]
        const idUser = jwt.verify(token,'longphu')
        await Teacher.findOne({
            _id: idUser
        })
        .then(user => {
            if(user){
                next()
            }else{
                res.json({success: false, message: 'Bạn không đủ quyền'})
            }
        })
    }catch(err){
        res.json({success: false, message: 'Lỗi server'})
    }
}


exports.checkAdmin =  (req, res, next) => {
    try{
        const authHeader = req.header('Authorization')
	    const token = authHeader && authHeader.split(' ')[1]
        const idUser = jwt.verify(token,'longphu')
        Admin.findOne({
            _id: idUser
        })
        .then(user => {
            if(user){
                next()
            }else{
                res.json({success: false, message: 'Bạn không đủ quyền'})
            }
        })
    }catch(err){
        res.json({success: false, message: 'Lỗi server'})
    }
}

exports.checkParent = async (req, res, next) => {
    try{
        const authHeader = req.header('Authorization')
	    const token = authHeader && authHeader.split(' ')[1]
        const idUser = jwt.verify(token,'longphu')
        await Parent.findOne({
            _id: idUser
        })
        .then(user => {
            if(user){
                next()
            }else{
                res.json({success: false, message: 'Bạn không đủ quyền'})
            }
        })
    }catch(err){
        res.json({success: false, message: 'Lỗi server'})
    }
}
