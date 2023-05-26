export const services = {
    getImgPath(path) {
    let fullPath = "https://image.tmdb.org/t/p/w500/" + path;
    return fullPath
    },
    changeInStars(vote) {
        const stars = Math.ceil(vote / 2);
        return stars
    }
}