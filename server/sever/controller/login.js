const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

//Load User
const Teacher = require ('../../models/Teacher');
const Parent =  require ('../../models/Parent');
const Admin = require ('../../models/admin');

exports.loginTeacher = (req, res) => {
    const {username, password} = req.body;
    Teacher.findOne({
        username: username
    }).then ((user) => {
        if (!user){
            return res.json({success: false, message: 'Tài khoản hoặc mật khẩu sai'})
        }
        //Match password
        bcrypt.compare(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if (isMatch){
                var token = jwt.sign({
                    _id : user._id
                },'longphu')
               res.json({
                   success:true,
                   token,
                   message:'Đăng nhập thành công'
               })
            }else{
                res.json({
                    success:false, message: 'Tài khoản hoặc mật khẩu sai'
                })
            }
        })
    })

}

exports.loginParent = (req, res, next) => {
    const {username, password} = req.body;
    Parent.findOne({
        username: username
    }).then ((user) => {
        if (!user){
            return res.json({success: false, message: 'Tài khoản hoặc mật khẩu sai'})
        }
        //Match password
        bcrypt.compare(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if (isMatch){
                var token = jwt.sign({
                    _id : user._id
                },'longphu')
               res.json({
                   success:true,
                   token,
                   message:'Đăng nhập thành công'
               })
            }else{
                res.json({
                    success:false, message: 'Tài khoản hoặc mật khẩu sai'
                })
            }
        })
    })

}

exports.loginAdmin = (req, res) => {
    const {username, password} = req.body;
    Admin.findOne({
        username: username
    }).then ((user) => {
        if (!user){
            return res.json({success: false, message: 'Tài khoản hoặc mật khẩu sai'})
        }
        //Match password
        bcrypt.compare(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if (isMatch){
                var token = jwt.sign({
                    _id : user._id
                },'longphu')
               res.json({
                   success:true,
                   token,
                   message:'Đăng nhập thành công'
               })
            }else{
                res.json({
                    success:false, message: 'Tài khoản hoặc mật khẩu sai'
                })
            }
        })
    })

}

