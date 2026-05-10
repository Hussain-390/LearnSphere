const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  completedLessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  quizScores: [
    {
      sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
      },
      score: Number,
      passed: Boolean,
    },
  ],
  overallPercent: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Progress', progressSchema);