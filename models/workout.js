const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  exercises: [
    {

      name: {
        type: String,
        trim: true,
        required: "The Name of the Exercise is required."
      },

      type: {
        type: Number,
        trim: true,
        required: "The type of Exercise is required."
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      duration: {
        type: Number,
        required: "The Duration of the Exercise is required."
      },

      distance: {
        type: Number
      }


    }],

  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;