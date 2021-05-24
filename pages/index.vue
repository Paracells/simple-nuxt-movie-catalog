<template>
  <div class="container">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-4" v-for="movie in movies" :key="movie.id">
        <movie-list-component :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(['movies']),
  },
  created() {
    console.log(this.movies)
  }
};
</script>

<style scoped>
</style>
