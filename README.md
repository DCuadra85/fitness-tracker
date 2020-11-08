# Fitness Tracker

This program is a general workout tracker that records the activity you have done each day. This is complete with graph comparisons to show the consistency or lack thereof of your workout regimen. The program will take in the values and names you enter and the graphs reflect the information added.

* Use of MongoDB
* Use of JavaScript.
* Use of Node.Js.
* Use of CSS
* Use of HTML.

## Installation

If you are going to run this locally on your system, and not on Heroku, you will first need to make sure you have Node.JS installed within your Visual Studio Code application. The next step would be to right click the Develop folder and select "Open in Integrated Terminal". When your terminal opens, type the command "npm install". Once the dependencies have installed, type the command "node app.js" to start the program.

## Usage

This page's function was created through Express, with JavaScript and Node.js. Go to [Heroku](https://quiet-caverns-98815.herokuapp.com/) and the program will automatically start. This will load the Fitnes Tracker home page. Click the "Get Started" button to begin using the note taker. Click Continue Workout or New Workout to being entering values. You will need to select an exercise type and then enter the relevant details in order to begin tracking the information. When this is complete, click on the Dashboard at the top left of the screen to view the charts of your activities.

<img src="./fitnesstracker.gif">


## Code

Key Part of Model to Pass Through Values:
```
{
    toJSON: {
      virtuals: true
    }
  })

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total+exercise.duration
    }, 0)
})
```

Example of Functional Parts of Routes:
```
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
```


## Credits

* https://github.com/coding-boot-camp/
* https://stackoverflow.com/questions/
* https://guides.github.com/features/mastering-markdown/
* https://docs.mongodb.com/manual/tutorial/query-documents/


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MongoDB](https://www.mongodb.com/)

## Deployed Link

* https://quiet-caverns-98815.herokuapp.com/

## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)

## Contributor
* **Ryan Nemec**

## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.