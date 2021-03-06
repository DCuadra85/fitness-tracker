const router = require("express").Router();
const Workout = require("../models/workout");

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
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true })
        .then(dbWorkout => {
            console.log("item update");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

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

router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(10)
        .then(dbWorkout => {
            console.log("GET stats dbWorkout", + dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/workouts/:id", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(dbWorkout => {
            console.log("item delete");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router