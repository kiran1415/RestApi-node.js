const express=require('express');
const router =express.Router();
const mongoose = require("mongoose");
const multer = require('multer');



const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null ,file.originalname)
    }
})
const upload_dest=multer({storage:storage})
  
  const student = require("../models/students_schema");


router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is student get request'
    })
})

router.post('/',upload_dest.single('profileImage'),(req,res,next)=>{
    const Student = new student({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        profileImage: req.file.path 
      });
      Student
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Created entry successfully",
            createdStudent: {
                fisrtname: result.firstname,
                lastname: result.lastname,
                phone:result.phone,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: "http://localhost:9000/student/" + result._id
                }
            }
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    });

module.exports=router;