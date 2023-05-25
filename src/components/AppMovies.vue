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
        }
    }
}
</script>


<template>
    <div
        class="card flex flex-col justify-around text-white bg-slate-900 rounded-xl border border-red-900 min-w-[200px] p-3 w-1/5">
        <p>Titolo: {{ movie.title }}</p>
        <p>Titolo originale: {{ movie.original_title }}</p>
        <p>Lingua: <span :class="getFlag(movie.original_language)"></span></p>
        <p>Voto: {{ movie.vote_average == '0' ? 'n/a' : movie.vote_average }}</p>
    </div>
</template>