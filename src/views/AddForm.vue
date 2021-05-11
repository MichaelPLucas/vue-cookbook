<template>
  <form>
    <div class="mb-3">
      <label for="titleInput" class="form-label">
        <h5>Title</h5>
      </label>
      <input id="titleInput" type="text" class="form-control" v-model="title" required>
    </div>
    <div class="mb-3">
      <label for="descInput" class="form-label">
        <h5>Description</h5>
      </label>
      <input id="descInput" type="text" class="form-control" v-model="description">
    </div>
    <div class="mb-3">
      <label for="imageInput" class="form-label">
        <h5>Image</h5>
      </label>
      <input id="imageInput" type="text" class="form-control" v-model="image">
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <h5>Ingredients</h5>
        </div>
        <div class="col text-end">
          <button class="btn" v-on:click="addNewIngredient">+</button>
        </div>
      </div>
      <div class="row">
        <ul>
          <li v-for="(ingredient, index) in Object.keys(ingredients)"
              :key="index"
              class="list-group-item">
            <div class="mb-3">
              <div class="row">
                <label for={{ingredient}} class="col-11 form-label">{{'Ingredient ' + String(index + 1)}}</label>
                <button class="btn col-1" v-on:click="removeIngredient(ingredient)">X</button>
              </div>
              <input id={{ingredient}} type="text" class="form-control" v-model=ingredients[ingredient] required>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <h5>Steps</h5>
        </div>
        <div class="col text-end">
          <button class="btn" v-on:click="addNewStep">+</button>
        </div>
      </div>
      <div class="row">
        <ul>
          <li v-for="(step, index) in Object.keys(steps)"
              :key="index"
              class="list-group-item">
            <div class="mb-3">
              <div class="row">
                <label for={{step}} class="col-11 form-label">{{'Step ' + String(index + 1)}}</label>
                <button class="btn col-1" v-on:click="removeStep(step)">X</button>
              </div>
              <input id={{step}} type="text" class="form-control" v-model=steps[step] required>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <h5>Tags</h5>
        </div>
        <div class="col text-end">
          <button class="btn" v-on:click="addNewTag">+</button>
        </div>
      </div>
      <div class="row">
        <ul>
          <li v-for="tag in Object.keys(tags)"
              :key="tag"
              class="list-group-item">
            <div class="row mb-3">
              <input id={{tag}} type="text" class="col-11" v-model=tags[tag] required>
              <button class="btn col-1" v-on:click="removeTag(tag)">X</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn btn-dark" type="submit" v-on:click="createRecipe">Add Recipe</button>
  </form>
</template>

<script>
import Vue from 'vue';
import store from '@/store';
import { ADD_RECIPE } from '@/store/mutation.types';
import router from '@/router';

let ingredientCount = 1;
let stepCount = 1;
let tagCount = 0;

export default {
  name: 'AddForm',
  data: function() {
    return {
      ingredients: { 'ingredient0': '' },
      steps: { 'step0': '' },
      tags: {}
    };
  },
  methods: {
    addNewIngredient: function(event) {
      event.preventDefault();
      Vue.set(this.ingredients, 'ingredient' + ingredientCount++, '');
    },
    addNewStep: function(event) {
      event.preventDefault();
      Vue.set(this.steps, 'step' + stepCount++, '');
    },
    addNewTag: function(event) {
      event.preventDefault();
      Vue.set(this.tags, 'tag' + tagCount++, '');
    },
    removeIngredient: function(ingredient, event) {
      if (event) event.preventDefault();
      Vue.delete(this.ingredients, ingredient);
    },
    removeStep: function(step, event) {
      if (event) event.preventDefault();
      Vue.delete(this.steps, step);
    },
    removeTag: function(tag, event) {
      if (event) event.preventDefault();
      Vue.delete(this.tags, tag);
    },
    createRecipe: function(event) {
      if (Object.keys(this.ingredients) == 0 ||
          Object.keys(this.steps) == 0)
        alert('Recipes must have a non-zero number of ingredients and steps.');

      store.commit(ADD_RECIPE, {
        title: this.title,
        description: this.description,
        image: this.image,
        ingredients: Object.values(this.ingredients),
        steps: Object.values(this.steps),
        tags: Object.values(this.tags)
      });

      router.push({ name: 'home' });
    }
  }
}
</script>
