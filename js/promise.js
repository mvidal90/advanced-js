
const getContent = (value) => new Promise(
    ( resolve, reject ) => {
        setTimeout(() =>{
            if (value) {
                resolve("Estamos probando como funciona resolve " + value)
            } else {
                reject("Estamos probando como funciona reject" + value)
            }
        }, 3000)
    }
)

getContent("")
    // .then( data => data + 1 , err => console.log(err + "err"))
    .then( data => data + 1)
    .then( sync => sync + 2)
    .then( sync2 => console.log(sync2))
    .catch( err => console.log(err))

const readMovies = (data) => new Promise(
    async (vaTodoBien, fueTodoMal) => {
        try {
            const {title, type, year, page} = data;
            const resp = await searchMovie(title, type, year, page)
            vaTodoBien(resp)
        } catch (error) {
            fueTodoMal(error)
        }
    }
)

readMovies({
    title: "harry",
    year: "2001"
})
    .then(data => data.Search)
    // .then( search => {
    //     throw new Error("Es un error en el then")
    // })
    .then( search => console.log(search))
    .catch(err => console.warn(err))