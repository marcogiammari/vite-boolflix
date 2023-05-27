<script>
import AppMovies from './AppMovies.vue';
import AppSeries from './AppSeries.vue';
import { store } from '../data/store'

export default {
    name: 'AppMain',
    components: {
        AppMovies,
        AppSeries
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="py-10 px-10 flex flex-col items-center">
            <div v-show="this.store.moviesFound.length" class="flex flex-col max-w-[90%] gap-5">
                <h2 class="text-red-400 text-2xl mt-4 self-start">
                    Movies
                </h2>
                <div class=" flex flex-nowrap gap-4 pb-5 overflow-x-auto h-[20rem]">
                    <AppMovies :movie="movie, i" v-for="movie, i in store.movies" />
                </div>
                <h2 class="text-red-400 text-2xl mt-4 self-start">
                    Series
                </h2>
                <div class=" flex flex-nowrap gap-4 pb-5 overflow-x-auto h-[20rem]">
                    <AppSeries :serie="serie" v-for="serie in store.series" />
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
h2 {
    font-family: Arial, Helvetica, sans-serif;
}
</style>