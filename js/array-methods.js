

async function readFile(pathFile) {
    const data = await fetch(pathFile)
    const json = await data.json();
    
    console.log("READING", json)
    return json
}

// readFile("../data/movies.json")
//    .then( data  => console.log(data)  )
//    .catch( err => console.error(err))


// foreach

async function exampleForEach() {
    const movies = await readFile("../data/movies.json");

    movies.forEach(
        movie => {
            console.log(`${movie.titulo} (${movie.genero} - ${movie.anio})`)
        }
    )

}

exampleForEach()

// slice

async function exampleSlice() {
    const movies = await readFile("../data/movies.json");
    const someMovies = movies.slice(3, 7)

    console.log(someMovies)
}

exampleSlice()

// join

const example = [ "Manzana", "Banana", "Uvas", "Peras" ]
const string = example.join(" + ")
console.log(string)

// findIndex

async function exampleFindIndex() {
    const movies = await readFile("../data/movies.json");

    const index = movies.findIndex( movie => movie.anio < 2000 )

    console.log(index) // -1 si no encuentra nada

}

exampleFindIndex()

// sort

async function exampleSort() {
    const movies = await readFile("../data/movies.json");

    movies.sort( (movieA, movieB) => movieB.anio - movieA.anio ) // Decreciente
    // movies.sort( (movieA, movieB) => movieA.anio - movieB.anio ) // Creciente

    console.log(movies)

}

exampleSort()

// find

async function exampleFind() {
    const movies = await readFile("../data/movies.json");
    const movie = movies.find( movie => movie.id === 6)

    console.log(movie)
}

exampleFind()

// filter

async function exampleFilter() {
    const movies = await readFile("../data/movies.json");
    const filtredMovies = movies.filter( movie => movie.genero.toLowerCase() === "drama") // DRAMA

    console.log(filtredMovies)
}

exampleFilter()

// map

async function exampleMap() { // Tranforma el array segun lo que retorna el callback
    const movies = await readFile("../data/movies.json");

    const moviesMaped = movies.map( movie => ({ // return
        id: movie.id,
        title: movie.titulo
    }))
    // const moviesMaped = movies.map( movie => movie.titulo )

    console.log(moviesMaped)
}

exampleMap()

// reduce

async function exampleReduce() { // Ejemplo calcular un promedio
    const movies = await readFile("../data/movies.json");
    const sumCalif = movies.reduce( 
        (acc, movie) => acc + movie.calificacionIMDB
    , 0)
    const prom = sumCalif / movies.length
    console.log(prom)
}

exampleReduce()


// movies.filter().sort().reduce() esto es posible sismpre que el metodo retorne un array