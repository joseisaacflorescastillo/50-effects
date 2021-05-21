const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=5c30b74b9a425a40658fb770be5fdc87&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/movie/550?api_key=5c30b74b9a425a40658fb770be5fdc87&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(res)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.nodeValue

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})