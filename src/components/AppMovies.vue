<script>
export default {
    name: 'AppMovies',
    props: {
        movie: Object
    },
    data() {
        return {
        }
    }
}
</script>


<template>
    <div class="card text-white bg-slate-900 p-3 w-1/5">
        <p>{{ movie.title }}</p>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>