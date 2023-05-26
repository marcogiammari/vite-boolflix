<script>
import { services } from "../data/services";
import { flags } from "../data/flags";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: 'AppMovies',
    props: {
        movie: Object
    },
    data() {
        return {
            flags,
            services
        }
    },
    methods: {
        getFlag(lang) {
            return 'fi fi-' + this.flags[lang]
        },
    }
}
</script>


<template>
    <div
        class="card flex flex-col justify-start gap-4 text-white bg-slate-900 rounded min-w-[200px] relative overflow-y-visible">
        <div class="h-full">
            <img class="rounded h-full" :src="this.services.getImgPath(movie.poster_path)" :alt="movie.title">
        </div>
        <div class="card-info flex flex-col gap-2 absolute hidden rounded w-full h-full pt-10 px-5">
            <span>Titolo: <p>{{ movie.title }}</p> </span>
            <span>Titolo originale: <p>{{ movie.original_title }}</p></span>
            <span class="flex items-center gap-2">Lingua originale: <p :class="getFlag(movie.original_language)"></p></span>
            <p v-if="movie.vote_average > 0">
                Voto:
                <span v-for="star in this.services.changeInStars(movie.vote_average)"><i
                        class="fa-solid fa-star text-yellow-400"></i></span>
                <span v-for="star in (5 - this.services.changeInStars(movie.vote_average))"><i
                        class="fa-regular fa-star text-yellow-400"></i></span>
            </p>
            <p v-else>Voto : n/a</p>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>