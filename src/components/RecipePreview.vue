<template>
  <router-link :to="{ name: 'detail-view', params: { id: recipe.id } }">
    <li class="card">
      <img class="card-img-left" :src="recipe.image">
      <div class="card-body">
        <h5 class="card-title">{{recipe.title}}</h5>
        <div class="card-text">{{recipe.description}}</div>
      </div>
    </li>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecipePreview',
  computed: {
    ...mapGetters(['recipe'])
  }
};
</script>
