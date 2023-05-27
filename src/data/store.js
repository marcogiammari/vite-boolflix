import {reactive} from "vue";

export const store = reactive({
    urlAPI: "https://api.themoviedb.org/3/",
    keyAPI: "?api_key=5ff07ceaf0425d1d16dee47eb09db5f8",
    queryAPI: "&query=",
    searchMoviesAPI: "https://api.themoviedb.org/3/search/movie?api_key=5ff07ceaf0425d1d16dee47eb09db5f8&language=it_IT&query=",
    searchSeriesAPI: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=",
    moviesFound: [],
    seriesFound: [],
    movies: [],
    series: []
})
