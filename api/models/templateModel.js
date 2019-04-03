const mongoose = require('mongoose');

const { Schema } = mongoose;


const TemplateSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name',
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Template', TemplateSchema);
