<template>
  <form>
    <div class="mb-3">
      <label for="titleInput" class="form-label">
        <h5>Title</h5>
      </label>
      <input id="titleInput" type="text" class="form-control" v-model="title">
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
        <ul class="list-group">
          <li v-for="ingredient in Object.keys(ingredients)"
              :key="ingredient"
              class="list-group-item">
            <div class="mb-3">
              <label for={{ingredient}} class="form-label">{{'Ingredient ' + String(parseInt(ingredient.slice(-1)) + 1)}}</label>
              <input id={{ingredient}} type="text" class="form-control" v-model=ingredients[ingredient.slice(-1)]>
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
        <ul id="stepList">
          <li v-for="step in Object.keys(steps)"
              :key="step"
              class="list-group-item">
            <div class="mb-3">
              <label for={{step}} class="form-label">{{'Step ' + String(parseInt(step.slice(-1)) + 1)}}</label>
              <input id={{step}} type="text" class="form-control" v-model=steps[step.slice(-1)]>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'AddForm',
  data: function() {
    return {
      ingredients: {},
      steps: {}
    };
  },
  methods: {
    addNewIngredient: function() {
      Vue.set(this.ingredients, 'ingredient' + Object.keys(this.ingredients).length, '');
    },
    addNewStep: function() {
      Vue.set(this.steps, 'step' + Object.keys(this.steps).length, '');
    }
  }
}
</script>
