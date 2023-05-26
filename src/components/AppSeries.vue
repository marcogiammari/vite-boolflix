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
            let fullPath = "https://image.tmdb.org/t/p/w500/" + path;
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
    <div class="card flex flex-col justify-start gap-4 text-white bg-slate-900 rounded min-w-[200px] relative">
        <div class="h-full">
            <img v-show="serie.poster_path != null" class="rounded h-full" :src="getImgPath(serie.poster_path)"
                :alt="serie.name">
            <!-- <p v-show="serie.poster_path == null"
                            class="bg-slate-900 text-red-600 h-full flex justify-center items-center font-bold text-xl">
                            N/A</p> -->
        </div>
        <div class="card-info flex flex-col gap-2 absolute hidden rounded w-full h-full pt-10 px-5">
            <span>Titolo: <p>{{ serie.name }}</p> </span>
            <span>Titolo originale: <p>{{ serie.original_name }}</p></span>
            <span class="flex gap-2">Lingua originale: <img class="w-6"
                    :src="'https://unpkg.com/language-icons/icons/' + serie.original_language + '.svg'" alt=""></span>
            <p v-if="serie.vote_average > 0">
                Voto:
                <span v-for="star in changeInStars(serie.vote_average)"><i
                        class="fa-solid fa-star text-yellow-400"></i></span>
                <span v-for="star in (5 - changeInStars(serie.vote_average))"><i
                        class="fa-regular fa-star text-yellow-400"></i></span>
            </p>
            <p v-else>Voto : n/a</p>
        </div>

    </div>
</template>