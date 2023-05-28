<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './data/store';
import { services } from './data/services';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
      services
    }
  },
  methods: {
    getMovies(query, ...url) {
      this.store.movies = [];

      // prima chiamata API -> ricerca film
      axios.get(url + query)

        .then(r => {
          this.store.moviesFound = r.data.results.filter(e => e.poster_path !== null);
          for (let i = 0; i < this.store.moviesFound.length; i++) {
            const movieFound = this.store.moviesFound[i];

            // seconda chiamata API -> richiama i credits di ogni film trovato
            axios.get(this.services.componeString(this.store.urlAPI + 'movie/' + movieFound.id + this.store.keyAPI + this.store.itLang + '&append_to_response=credits')).then(r => {
              this.store.movies.push(r.data);
            }).catch(error => console.error('Failed request: ', error))
          }
        });
    },
    getSeries(query, ...url) {
      this.store.series = []
      // prima chiamata API -> ricerca serie tv
      axios.get(url + query)

        .then(r => {
          this.store.seriesFound = r.data.results.filter(e => e.poster_path !== null);
          for (let i = 0; i < this.store.seriesFound.length; i++) {
            const serieFound = this.store.seriesFound[i];

            // seconda chiamata API -> richiama i credits di ogni serie tv trovata
            axios.get(this.services.componeString(this.store.urlAPI + 'tv/' + serieFound.id + this.store.keyAPI + this.store.itLang + '&append_to_response=credits')).then(r => {
              this.store.series.push(r.data);
            }).catch(error => console.error('Failed request: ', error))
          }
        })
    }
  },

  mounted() {

    // al mounted partono due chiamate che ritornano i film e le serie tv più popolari 

    this.getMovies(this.services.componeString('', this.store.urlAPI + "movie/popular" + this.store.keyAPI + "&language=it_IT"))
    this.getSeries(this.services.componeString('', this.store.urlAPI + "tv/popular" + this.store.keyAPI + "&language=it_IT"))
  }

}
</script>

<template>
  <AppHeader @getMovies="getMovies" @getSeries="getSeries" />
  <AppMain />
</template>

