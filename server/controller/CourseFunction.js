const CourseModel = require('../models/CourseModel');


const coursesGet = async (req, res) => {
    res.send("This is just for fun");

}

const coursesPost = async (req, res) => {
    const { videoUrls, coursesPdfs, name, roadmapUrl, TopicLists, Describtion } = req.body;


    const courseItems = new CourseModel({
        videoUrls,
        coursesPdfs,
        name,
        roadmapUrl,
        TopicLists,
        Describtion

    })

    const courseData = await courseItems.save();

    if (courseData) {
        res.status(200).json({ message: "data save successfully" })
    }
    else {
        res.status(402).json({ error: " data does not save." })
    }
}


module.exports = { coursesGet, coursesPost };

