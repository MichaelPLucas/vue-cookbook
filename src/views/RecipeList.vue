<template>
  <div>
    <h2>
      My Recipes
    </h2>
    <ul>
      <RecipePreview v-for="recipe in recipes"
                     :recipe="recipe"
                     :key="recipe.id" />
    </ul>
  </div>
</template>

<script>
import RecipePreview from '../components/RecipePreview';

export default {
  name: 'RecipeList',
  components: {
    RecipePreview
  },
  props: {

  }
}
</script>
