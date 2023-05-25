<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: 'AppSeries',
    props: {
        serie: Object
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
            if (vote == 0) {
                return 'n/a'
            }
            return Math.ceil(vote / 2)
        }
    }
}
</script>


<template>
    <div
        class="card flex flex-col justify-start gap-4 overflow-auto text-white bg-slate-900 rounded-xl border border-red-900 min-w-[200px] max-h-[300px] p-4">
        <div class="h-1/3">
            <img v-show="serie.backdrop_path != null" :src="getImgPath(serie.backdrop_path)" :alt="serie.name">
            <p v-show="serie.backdrop_path == null"
                class="bg-white text-red-600 h-full flex justify-center items-center font-bold text-xl">
                N/A</p>
        </div>
        <div>
            <p>Titolo: {{ serie.name }}</p>
            <p>Titolo originale: {{ serie.original_name }}</p>
            <p>Lingua: <span :class="getFlag(serie.original_language)"></span></p>
            <p>Voto: <span v-for="star in changeInStars(serie.vote_average)"><i
                        class="fa-solid fa-star text-yellow-400"></i></span></p>
        </div>

    </div>
</template>