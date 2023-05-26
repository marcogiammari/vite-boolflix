<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './data/store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getData(query) {
      axios.get(this.store.searchMoviesAPI + query).then(r => {
        this.store.moviesFound = r.data.results.filter(e => e.poster_path !== null);
      });
      axios.get(this.store.searchSeriesAPI + query).then(r => {
        this.store.seriesFound = r.data.results.filter(e => e.poster_path !== null);
      })
    }
  },
  mounted() {
    axios.get(this.store.urlAPI + "movie/popular" + this.store.keyAPI + "&language=it_IT").then(r => {
      this.store.moviesFound = r.data.results.filter(e => e.poster_path !== null);
    })
    axios.get(this.store.urlAPI + "tv/popular" + this.store.keyAPI + "&language=it_IT").then(r => {
      this.store.seriesFound = r.data.results.filter(e => e.poster_path !== null);
    })
  }

}
</script>

<template>
  <AppHeader @getData="getData" />
  <AppMain />
</template>

<style scoped></style>
