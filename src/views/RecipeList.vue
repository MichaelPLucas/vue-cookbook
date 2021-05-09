<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>
          My Recipes
        </h2>
      </div>
      <div class="col text-end">
        <router-link :to="{ name: 'add-form' }">
          <h2>
            +
          </h2>
        </router-link>
      </div>
    </div>
    <ul>
      <RecipePreview v-for="recipe in getAllRecipes"
                     :recipe="recipe"
                     :key="recipe.id" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecipePreview from '../components/RecipePreview';

export default {
  name: 'RecipeList',
  components: {
    RecipePreview
  },
  computed: {
    ...mapGetters(['getAllRecipes'])
  }
}
</script>
