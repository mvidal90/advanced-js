//c22c7820

const getMovie = async (title) => {
    // document.getElementById("loading").style.display="block"
    const fetchData = await fetch(`http://www.omdbapi.com/?apikey=c22c7820&t=${title}`)
    const resp = await fetchData.json()

    // document.getElementById("loading").style.display="none"

    console.log(resp)
}

getMovie("Batman")

const searchMovie = async (title, type, year, page = 1) => {
    if (title) {
        const url = `http://www.omdbapi.com/?apikey=c22c7820&s=${title}${ 
            type ? 
                `&type=${type}` 
            : 
                ""
        }${
            year ? 
                `&y=${year}` 
            : 
                ""
        }&page=${page}`;
        const searchedData = await fetch(url)
        const resp = await searchedData.json()

        console.log(resp)
        return resp
    } else {
        // console.warn("Debes enviar un titulo como parametro")
        throw new Error("Debes enviar un titulo como parametro")
    }
}

searchMovie("Harry", "", "2001", 2 )

// http://www.omdbapi.com/?apikey=c22c7820&s=${title}&type=&y=&page=

// Ejemplo servicio POST

const login = async (user, pass) => {
    // /api/backoffice/user/login
    const loginBody = {
        userName: user,
        password: pass
    }
    const loginData = await fetch("http://localhost:3001/api/backoffice/user/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginBody)
    });
    const resp = await loginData.json();

    console.log(resp)
}

// login("ClubSeed", "Elmo123")