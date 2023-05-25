<script>
import AppMovies from './AppMovies.vue';
import { store } from '../data/store'

export default {
    name: 'AppMain',
    components: {
        AppMovies
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main class="py-10 flex justify-center">
        <div class="container flex flex-wrap gap-5 border border-red-600 min-h-[300px] my-10">
            <AppMovies :movie="movie" v-for="movie in store.moviesFound" />
        </div>
    </main>
</template>