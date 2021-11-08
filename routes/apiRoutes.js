const router = require("express").Router();
const Workout = require("../models/workout.js");

//make new workout 
router.post("/api/workouts", (req, res) => {
  Transaction.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get all previous workouts

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: '$exercises.duration' } }
    }
  ])

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//Get all previous workouts based on stats
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: '$exercises.duration' } }
    }
  ])

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




module.exports = router;