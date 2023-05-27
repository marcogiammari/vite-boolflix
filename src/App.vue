<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './data/store';
import axios from 'axios';
import { services } from './data/services';

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
    getData(query) {
      this.store.movies = [];

      // prima chiamata API -> ricerca film
      axios.get(this.store.searchMoviesAPI + query)

        .then(r => {
          this.store.moviesFound = r.data.results.filter(e => e.poster_path !== null);
          for (let i = 0; i < this.store.moviesFound.length; i++) {
            const movieFound = this.store.moviesFound[i];

            // seconda chiamata API -> richiama i credits di ogni film trovato
            axios.get(this.store.urlAPI + 'movie/' + movieFound.id + this.store.keyAPI + '&append_to_response=credits').then(r => {
              this.store.movies.push(r.data);
            }).catch(error => console.error('Failed request: ', error))
          }
        });

      // prima chiamata API -> ricerca serie tv
      axios.get(this.store.searchSeriesAPI + query)

        .then(r => {
          this.store.seriesFound = r.data.results.filter(e => e.poster_path !== null);
          console.log(this.store.seriesFound);
          for (let i = 0; i < this.store.seriesFound.length; i++) {
            const serieFound = this.store.seriesFound[i];

            // seconda chiamata API -> richiama i credits di ogni serie tv trovata
            axios.get(this.store.urlAPI + 'tv/' + serieFound.id + this.store.keyAPI + '&append_to_response=credits').then(r => {
              this.store.series.push(r.data);
            }).catch(error => console.error('Failed request: ', error))
          }
        })
    },
  },

  mounted() {

    // al mounted partono due chiamate analoghe a quelle in getData() -> DA RIFATTORIZZARE: fai prendere a getData l'argomento url

    axios.get(this.store.urlAPI + "movie/popular" + this.store.keyAPI + "&language=it_IT")

      .then(r => {
        this.store.moviesFound = r.data.results.filter(e => e.poster_path !== null);
        for (let i = 0; i < this.store.moviesFound.length; i++) {
          const movieFound = this.store.moviesFound[i];
          axios.get(this.store.urlAPI + 'movie/' + movieFound.id + this.store.keyAPI + '&append_to_response=credits').then(r => {
            this.store.movies.push(r.data);
          }).catch(error => console.error('Failed request: ', error))
        }
      })

    axios.get(this.store.urlAPI + "tv/popular" + this.store.keyAPI + "&language=it_IT")

      .then(r => {
        this.store.seriesFound = r.data.results.filter(e => e.poster_path !== null);
        for (let i = 0; i < this.store.seriesFound.length; i++) {
          const serieFound = this.store.seriesFound[i];
          axios.get(this.store.urlAPI + 'tv/' + serieFound.id + this.store.keyAPI + '&append_to_response=credits').then(r => {
            this.store.series.push(r.data);
          }).catch(error => console.error('Failed request: ', error))
        }
      })
  }

}
</script>

<template>
  <AppHeader @getData="getData" />
  <AppMain />
</template>

