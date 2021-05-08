<template>
  <div>
    <h2>
      My Recipes
    </h2>
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
