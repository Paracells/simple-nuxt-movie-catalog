import movie from "~/layouts/movie";

export const state = () => ({
  movies: [],
  movie: ''
})

export const getters = {
  getById: (state) => (id) => {
    return state.movies.find(movie => movie.id === +id)
  }
}
export const mutations = {
  setData(state, payload) {
    state.movies = payload;
  },

}
export const actions = {
  async nuxtServerInit({commit}) {
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

    commit("setData", data.results);

    console.log(this.movies);
  }
}

