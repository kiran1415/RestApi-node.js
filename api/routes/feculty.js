const express=require('express');
const router =express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is feculty get request'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is fecualty post request'
    })
})

module.exports=router;