import { Schema, model } from 'mongoose';

const recipeSchema = new Schema(
  {
    recipeText: {
      type: String,
      required: 'Please add your favourite recipe here!',
      minlength: 1,
      maxlength: 5000
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Recipe = model('Recipebook', recipeSchema);

export default Recipe;