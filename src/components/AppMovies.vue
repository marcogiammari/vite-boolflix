<script>
import axios from "axios";
import { store } from "../data/store";
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
            services,
            store,
            cast: []
        }
    },
    methods: {
        getFlag(lang) {
            return 'fi fi-' + this.flags[lang]
        },
    },

}
</script>


<template>
    <div class="card flex flex-col justify-start gap-4 text-white bg-slate-900 min-w-[300px] rounded relative">
        <div class="h-full">
            <img class="rounded h-full" :src="this.services.getImgPath(movie.poster_path)" :alt="movie.title">
        </div>
        <div class="card-info flex-col justify-start gap-1 absolute hidden rounded w-full h-full p-5">
            <span>Titolo: <p>{{ movie.title }}</p> </span>
            <span v-show="movie.title != movie.original_title">Titolo originale: <p>{{ movie.original_title }}</p></span>
            <span class="flex items-center gap-2">Lingua originale: <p :class="getFlag(movie.original_language)"></p></span>
            <span>Cast:
                <div>
                    <span v-if="movie.credits.cast.length > 0" class="me-1" v-for="actor in movie.credits.cast.slice(0, 5)">
                        {{ actor.name }}
                    </span>
                    <span v-else>n/a</span>
                </div>
            </span>
            <span>Genere:
                <div class="flex flex-wrap">
                    <span v-if="movie.genres.length > 0" class="me-1" v-for="genre in movie.genres">
                        {{ genre.name }}
                    </span>
                    <span v-else>n/a</span>
                </div>
            </span>
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