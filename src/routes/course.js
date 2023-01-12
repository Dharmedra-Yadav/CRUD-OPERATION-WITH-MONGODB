const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const Course = require("../models/course");
// Get All the Courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
    res.send();
  } catch (error) {
    res.json(error);
  }
});

// Get Single Courses
router.get("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const c = await Course.findById(courseId);
    res.json(c);
  } catch (error) {
    res.json(error);
  }
});
// Create Courses
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    res.json(error);
  }
});

// Delete Courses
router.delete("/:courseId", async (req, res) => {
  try {
    await Course.remove({ _id: req.params.courseId });
    res.status(200).json({ Message: "Delete Successfully" });
  } catch (error) {
    res.json(error);
  }
});
// Update Courses
router.put("/courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const updateCouses = await Course.updateOne(
      {
        _id: courseId,
      },
      req.body
    );
    req.json(updateCouses);
  } catch (error) {
    req.json(error);
  }
});

module.exports = router;
