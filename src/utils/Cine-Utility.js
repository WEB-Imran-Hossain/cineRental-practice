function getImgUrl(name){
    return new URL(`../assets/images/movie-covers/${name}`, import.meta.url).href
}

export {getImgUrl}