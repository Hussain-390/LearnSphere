const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
  },
  title: String,
  content: String,
  order: Number,
  readTime: Number, 
  isFree: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);