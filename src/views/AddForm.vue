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
          <li v-for="ingredient in Object.keys(ingredients)"
              :key="ingredient"
              class="list-group-item">
            <div class="mb-3">
              <label for={{ingredient}} class="form-label">{{'Ingredient ' + String(parseInt(ingredient.slice(-1)) + 1)}}</label>
              <input id={{ingredient}} type="text" class="form-control" v-model=ingredients[ingredient] :required="ingredient == 'ingredient0'">
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
          <li v-for="step in Object.keys(steps)"
              :key="step"
              class="list-group-item">
            <div class="mb-3">
              <label for={{step}} class="form-label">{{'Step ' + String(parseInt(step.slice(-1)) + 1)}}</label>
              <input id={{step}} type="text" class="form-control" v-model=steps[step] :required="step == 'step0'">
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
            <div class="mb-3">
              <input id={{tag}} type="text" class="form-control" v-model=tags[tag]>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn btn-primary" type="submit" v-on:click="createRecipe">Add Recipe</button>
  </form>
</template>

<script>
import Vue from 'vue';
import store from '@/store';
import { ADD_RECIPE } from '@/store/mutation.types';
import router from '@/router';

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
      Vue.set(this.ingredients, 'ingredient' + Object.keys(this.ingredients).length, '');
    },
    addNewStep: function(event) {
      event.preventDefault();
      Vue.set(this.steps, 'step' + Object.keys(this.steps).length, '');
    },
    addNewTag: function(event) {
      event.preventDefault();
      Vue.set(this.tags, 'tag' + Object.keys(this.tags).length, '');
    },
    createRecipe: function(event) {
      store.commit(ADD_RECIPE, {
        title: this.title,
        description: this.description,
        image: this.image,
        ingredients: this.ingredients,
        steps: this.steps,
        tags: this.tags
      });
      router.push({ name: 'home' });
    }
  }
}
</script>
