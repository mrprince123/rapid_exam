// These are the course things

const { default: mongoose } = require("mongoose");

// video url - array
// pdf url  - array
// name 
// roadmap url
// description 
// Topics Lisy  - array
// id and timestamp

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    videoUrls: [
        {
            videoUrl: {
                type: String,
                required: true
            }
        }
    ],
    coursePdfs:[
        {
            coursePdf:{
                type: String,
                required: true,
            }
        }
    ],
    name:{
        type: String,
        required: true
     },
    roadmapUrl: {
        type: String,
        requiired: true
    },
    TopicLists:[
        {
            TopicList:{
                type: String,
                required:true
        
            }
        }
    ],
    Describtion:{
        type: String,
        requiired: true
    }
},{timestamps: true});

const CourseModel = new mongoose.model("CourseModel",courseSchema);
module.exports = CourseModel;