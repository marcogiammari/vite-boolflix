<script>
import { store } from '../data/store';
export default {
  name: 'AppHeader',
  data() {
    return {
      movieGenre: "",
      seriesGenre: "",
      query: "",
      store,
      filter: false,
    }
  }
}
</script>

<template>
  <header class="bg-gradient-to-b from-cyan-950 to-slate-900">
    <nav class="p-5 mx-5 flex flex-col md:flex-row justify-between align-middle gap-3">
      <h1 class="text-red-500 font-bold text-4xl">BOOLFLIX</h1>
      <div class="flex align-middle gap-3">
        <button @click="filter = !filter" class="text-red-400 p-3 font-bold rounded border">Filtra per genere</button>
        <div class="flex flex-col gap-1" v-show="filter">
          <select v-model="movieGenre" name="" id="">
            <option disabled value="">
              Filtra i film per genere
            </option>
            <option v-for="mGenre in this.store.movieGenres" :value="mGenre">
              {{ mGenre.name }}
            </option>
          </select>
          <select v-model="seriesGenre" name="" id="">
            <option disabled value="">
              Filtra le serie TV per genere
            </option>
            <option v-for="sGenre in this.store.seriesGenres" :value="sGenre">
              {{ sGenre.name }}
            </option>
          </select>
        </div>
        <input class="p-2" type="text" v-model="query"
          @keyup.enter="$emit('getMovies', this.movieGenre, this.query, this.store.searchMoviesAPI), $emit('getSeries', this.seriesGenre, this.query, this.store.searchSeriesAPI)">
        <button
          @click="$emit('getMovies', this.movieGenre, this.query, this.store.searchMoviesAPI), $emit('getSeries', this.seriesGenre, this.query, this.store.searchSeriesAPI)"
          class="text-red-400 p-3 font-bold rounded border">Search
        </button>
      </div>
    </nav>
  </header>
</template>

