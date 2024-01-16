//c22c7820

const getMovie = async (title) => {
    const fetchData = await fetch(`http://www.omdbapi.com/?apikey=c22c7820&t=${title}`)
    const resp = await fetchData.json()

    console.log(resp)
}

getMovie("Batman")

const searchMovie = async (title, type, year, page = 1) => {
    
    if (title) {
        const searchedData = await fetch(`http://www.omdbapi.com/?apikey=c22c7820&s=${title}${ type ? `&type=${type}` : ""}${year ? `&y=${year}` : ""}&page=${page}`)
        const resp = await searchedData.json()

        console.log(resp)
    } else {
        console.warn("Debes enviar un titulo como parametro")
    }
}

searchMovie("Harry", "", "2001", 2 )

// http://www.omdbapi.com/?apikey=c22c7820&s=${title}&type=&y=&page=