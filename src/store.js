import { reactive } from "vue";

const store = reactive( {
    movie: "",
    movieList: [],
    serieList: [],
});

export {store}