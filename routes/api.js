const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        console.log("GET all dbWorkout" + dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("dbWorkout create" + dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    //research put as a mix of req.params and push command
});

router.get("/api/workouts/stats", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log("GET stats dbWorkout", +dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.delete("/api/workouts/:id", ({body}, res) => {
    //check back on activities
});

module.exports = router