const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter an exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the name of the excercise."
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the excercise."
        },
    }]
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;