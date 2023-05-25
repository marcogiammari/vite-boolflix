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
            <div v-show="this.store.moviesFound.length" class="flex flex-col max-w-[90%] gap-2">
                <h2 class="text-red-600 font-bold text-2xl mt-4 self-start">{{ this.store.moviesFound.length }} MOVIES FOUND
                </h2>
                <div class=" flex flex-nowrap gap-4 pb-5 overflow-auto min-h-[300px]">
                    <AppMovies :movie="movie" v-for="movie in store.moviesFound" />
                </div>
                <h2 class="text-red-600 font-bold text-2xl mt-4 self-start">{{
                    this.store.seriesFound.length }} SERIES FOUND
                </h2>
                <div class=" flex flex-nowrap gap-4 pb-5 overflow-auto min-h-[300px]">
                    <AppSeries :serie="serie" v-for="serie in store.seriesFound" />
                </div>
            </div>
        </div>
    </main>
</template>