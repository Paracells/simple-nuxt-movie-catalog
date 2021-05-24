<template>
  <div class="container">
    <div class="tile is-ancestor ">
      <div class="tile is-vertical is-5">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">{{ movie.original_title }}</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">Release date: <span>{{ movie.release_date }}</span></p>
            </article>
          </div>

        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Overview</p>
            <p class="subtitle">{{ movie.overview }}</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Poster</p>
            <figure class="image is-9by16">
              <img
                class="posterImage"
                :src="$config.imgUrl + movie.poster_path"
                :alt="movie.original_title"
              />
            </figure>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import movie from "~/layouts/movie";
import {mapGetters} from 'vuex'

export default {
  name: "TheMovie",
  layout: 'movie',
  computed: {
    movie() {
      console.log(this.$store.getters.getById(this.$route.params.id))
      return this.$store.getters.getById(this.$route.params.id)
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  border-radius: 22px;
  background: #2c3347;
}
</style>;
