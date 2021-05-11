<template>
  <div id="app">
    <Header></Header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
  background: #999;
}

.container {
  background: #FFF;
  height: 100%;
  padding-top: 20px;
}
</style>
