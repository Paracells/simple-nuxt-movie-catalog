<template>
  <div class="card">
    <nuxt-link
      class="card-image is-centered"
      :to="'/movie/' + movie.id"
    >
      <figure class="image is-3by5">
        <img
          class="posterImage"
          :src="$config.imgUrl + movie.poster_path"
          :alt="movie.original_title"
        />
      </figure>
    </nuxt-link>
    <div class="card-content has-background-black-ter has-text-primary-light">
      <div class="content">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieComponent",
  props: ['movie']
};
</script>

<style lang="scss" scoped>
</style>
