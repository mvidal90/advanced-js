
// const xhr = new XMLHttpRequest;
// console.log(xhr.readyState) // 0

// xhr.open("GET", "../data/movies.json");
// console.log(xhr.readyState) // 1

// xhr.addEventListener("readystatechange", () => {
//     console.log("EL valor de readystate es: " + xhr.readyState)
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.response))
//     }
// })

// xhr.send()

// console.log(xhr)

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest;
    xhr.open("GET", "../templates/more-info.html");

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            const mainElement = document.querySelector("main");
            const div = document.createElement("div")
            div.innerHTML = xhr.response
            mainElement.appendChild(div)
        }
    })
    
    xhr.send()
})

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
//   .catch(err => console.log(err))
//   .finally(() => setLoading(false))