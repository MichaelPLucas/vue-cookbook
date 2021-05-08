import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  EDIT_RECIPE_ADD_TAG,
  EDIT_RECIPE_REMOVE_TAG
} from './mutation.types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: [{
    id: uuidv4(),
    title: 'Test',
    description: 'This is a test recipe',
    image: '',
    ingredients: [],
    steps: [],
    tags: []
  }],
  getters: {
    getAllRecipes: state => {
      return state;
    },
    getRecipeById: state => id => {
      return state.find(x => x.id == id);
    }
  },
  mutations: {
    [ADD_RECIPE] (state, recipe) {
      recipe.id = uuidv4();
      state.push(recipe);
    },
    [DELETE_RECIPE] (state, id) {
      state.filter(x => x.id != id);
    },
    [EDIT_RECIPE] (state, recipe) {
      let index = state.findIndex(x => x.id == recipe.id);
      if (index != -1)
        state.splice(index, 1, recipe)
    },
    [EDIT_RECIPE_ADD_TAG] (state, id, tag) {
      let index = state.findIndex(x => x.id == id);
      state[index].tags.push(tag);
    },
    [EDIT_RECIPE_REMOVE_TAG] (state, id, tag) {
      let index = state.findIndex(x => x.id == id);
      state[index].tags = state[index].tags.filter(x => x != tag);
    }
  }
});