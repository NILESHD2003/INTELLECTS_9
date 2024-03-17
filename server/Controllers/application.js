const  mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Application = require('../Model/Application');
require('dotenv').config

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

exports.submitApplication = async (req, res) => {
    try{
        const {fname, lname, email, phone, address, coverPage, } = req.body;
        const {resume } = req.file.resume

        if(!fname|| !lname|| !email || !phone|| !address|| !resume){
            return res.status(400).json({
                success: false,
                message: 'Missing fields'
            })
        }

        const uploadedResume = await cloudinary.uploader.upload(resume);

        const data = await Application.create({
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            address: address,
            resume: uploadedResume.secure_url,
            coverPage: coverPage,
        })

        return res.status(200).json({
            success: true,
            message: 'Applicaation Submitted Successfully',
            data: data
        })

    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: e.message
        })
    }
}

exports.getApplicationByID = async(req, res) => {
    try{
        const { id } = req.body;
        const data = await JobPosts.findById(id);

        if(!data){
            return res.status(404).json({
                success: false,
                message: 'Requested Data not available'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'JOB ID fetched successfully',
            data: data
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Issue',
            error: e.message
        })
    }
}

exports.deleteApplication = async (req, res) => {
    try{
        const {applicationID} = req.body;
        if(!applicationID){
            return res.status(400).json({
                success: false,
                message: 'Incomplete Data',
            })
        }
        const data = await Application.findByIdAndDelete(applicationID)
        return res.status(200).json({
            success: true,
            message: 'Job Application Deleted',
            data: data
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Something went Wrong',
            error: e.message
        })
    }
}