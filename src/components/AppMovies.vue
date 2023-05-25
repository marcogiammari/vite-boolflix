<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: 'AppMovies',
    props: {
        movie: Object
    },
    data() {
        return {
        }
    },
    methods: {
        getFlag(lang) {
            if (lang == 'en') {
                return 'fi fi-gb'
            }
            return 'fi fi-' + lang
        },
        getImgPath(path) {
            let fullPath = "https://image.tmdb.org/t/p/w342/" + path;
            return fullPath
        },
        changeInStars(vote) {
            const stars = Math.ceil(vote / 2);
            return stars
        }
    }
}
</script>


<template>
    <div
        class="card flex flex-col justify-start gap-4 overflow-auto text-white bg-slate-900 rounded-xl border border-red-900 min-w-[200px] max-h-[300px] p-4">
        <div class="h-1/3">
            <img v-show="movie.backdrop_path != null" class="rounded" :src="getImgPath(movie.backdrop_path)"
                :alt="movie.title">
            <p v-show="movie.backdrop_path == null"
                class="bg-white text-red-600 h-full flex justify-center items-center font-bold text-xl">
                N/A</p>
        </div>
        <div>
            <p>Titolo: {{ movie.title }}</p>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Lingua: <span :class="getFlag(movie.original_language)"></span></p>
            <p v-if="movie.vote_average > 0">
                Voto:
                <span v-for="star in changeInStars(movie.vote_average)"><i
                        class="fa-solid fa-star text-yellow-400"></i></span>
                <span v-for="star in 5 - changeInStars(movie.vote_average)"><i
                        class="fa-regular fa-star text-yellow-400"></i></span>
            </p>
            <p v-else>Voto : n/a</p>

        </div>
    </div>
</template>