<script>
import { services } from "../data/services";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: 'AppSeries',
    props: {
        serie: Object
    },
    data() {
        return {
            services
        }
    }
}
</script>


<template>
    <div
        class="card flex flex-col justify-start gap-4 text-white bg-slate-900 rounded min-w-[300px] relative overflow-y-auto">
        <div class="h-full">
            <img v-show="serie.poster_path != null" class="rounded h-full"
                :src="this.services.getImgPath(serie.poster_path)" :alt="serie.name">
        </div>
        <div class="card-info flex-col justify-start gap-1 absolute hidden rounded w-full h-full p-5">
            <span>Titolo: <p>{{ serie.name }}</p> </span>
            <span v-show="serie.name != serie.original_name">Titolo originale: <p>{{ serie.original_name }}</p></span>
            <span class="flex gap-2">Lingua originale:
                <img class="w-6" :src="'https://unpkg.com/language-icons/icons/' + serie.original_language + '.svg'" alt="">
            </span>
            <span>Cast:
                <div>
                    <span v-if="serie.credits.cast.length > 0" class="me-1" v-for="actor in serie.credits.cast.slice(0, 5)">
                        {{ actor.name }}
                    </span>
                    <span v-else>n/a</span>
                </div>
            </span>
            <span>Genere:
                <div class="flex flex-wrap">
                    <span v-if="serie.genres.length > 0" class="me-1" v-for="genre in serie.genres">
                        {{ genre.name }}
                    </span>
                    <span v-else>n/a</span>
                </div>
            </span>
            <p v-if="serie.vote_average > 0">
                Voto:
                <span v-for="star in this.services.changeInStars(serie.vote_average)"><i
                        class="fa-solid fa-star text-yellow-400"></i></span>
                <span v-for="star in (5 - this.services.changeInStars(serie.vote_average))"><i
                        class="fa-regular fa-star text-yellow-400"></i></span>
            </p>
            <p v-else>Voto: n/a</p>
        </div>

    </div>
</template>