const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
  },
  questions: [
    {
      question: String,
      options: [String],
      correctIndex: Number,
    },
  ],
  passMark: {
    type: Number,
    default: 70,
  },
});

module.exports = mongoose.model('Quiz', quizSchema);