// AXIOS

const axiosInstance = axios.create({
    baseURL: "http://www.omdbapi.com/"
})

axiosInstance.interceptors.request.use(
    config => {
        console.log(config)
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    resp => {
        console.log(`Soy una request que devolvió un status: ${resp.status}`)
        return resp;
    },
    error => {
        console.log(`Soy una request que devolvió un status: ${error.response.status}`)
        return Promise.reject(error)
    }
)

const getMovieAxios = async (title) => {
    const resp = await axiosInstance.get(`?apikey=c22c7820&t=${title}`)

    console.log(resp)
}

getMovieAxios("La casa de papel")

const searchMovieAxios = async (title, type, year, page = 1) => {
    if (title) {
        const url = `?apikey=c22c7820&s=${title}${ 
            type ? 
                `&type=${type}` 
            : 
                ""
        }${
            year ? 
                `&y=${year}` 
            : 
                ""
        }&page=${page}`
        const searchedResp = await axiosInstance.get(url)

        console.log(searchedResp.data)
    } else {
        console.warn("Debes enviar un titulo como parametro")
    }
}

searchMovieAxios("La casa", "", "2019", 2)

const login = async (user, pass) => {
    // /api/backoffice/user/login
    const loginBody = {
        userName: user,
        password: pass
    }
    const loginResp = await axiosInstance.post("http://localhost:3001/api/backoffice/user/login", loginBody);

    console.log(loginResp)
}

login("ClubSeed", "Elo123")