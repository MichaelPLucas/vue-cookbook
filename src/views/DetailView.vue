<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="row">
          <h2>{{recipe.title}}</h2>
        </div>
        <div class="row">
          <h5>{{recipe.description}}</h5>
        </div>
      </div>
      <div class="col text-end">
        <img :src="recipe.image" height="200px" width="200px">
      </div>
    </div>
    <div class="row">
      <ul>
        <li v-for="tag in recipe.tags"
              :key="tag"
              class="badge bg-primary"
              style="margin-right:10px">
          <h6>{{tag}}</h6>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="row">
          <h4>Ingredients</h4>
        </div>
        <div class="row">
          <ul>
            <li v-for="ingredient in recipe.ingredients"
                :key="ingredient"
                class="list-group-item">
              {{ingredient}}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <h4>Steps</h4>
        </div>
        <div class="row">
          <ul>
            <li v-for="step in recipe.steps"
                :key="step"
                class="list-group-item">
              {{step}}
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DetailView',
  computed: {
    recipe: function() {
      console.log(this.getRecipeById(this.$route.params.id));
      return this.getRecipeById(this.$route.params.id);
    },
    ...mapGetters(['getRecipeById'])
  }
}
</script>