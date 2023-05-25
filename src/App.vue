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
      axios.get(this.store.searchMoviesAPI + query)
        .then(r => {
          console.log(r);
          this.store.moviesFound = r.data.results;
          console.log(this.store.moviesFound);
        })
    }
  }

}
</script>

<template>
  <button class="text-white" @click="findData">PROVA</button>
  <AppHeader @getData="getData" />
  <AppMain />
</template>

<style scoped></style>
