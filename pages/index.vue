<template>
  <div class="container">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-4" v-for="movie in movies" :key="movie.id">
        <movie-component :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    movies: [],
  }),

  async fetch() {
    console.log(
      this.$config.baseUrl +
      "/movie/now_playing?api_key=" +
      process.env.MOVIEDB_API_KEY
    );
    const {data} = await this.$axios.get(
      this.$config.baseUrl +
      "/movie/now_playing?api_key=" +
      process.env.MOVIEDB_API_KEY
    );
    this.movies = data.results;
    console.log(this.movies);
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
