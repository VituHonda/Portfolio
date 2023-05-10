const projectsList = [

    // PORTFOLIO
    {
        title: 'Portfolio',
        imgPath: "./img/Projects/Portfolio.png",
        link: "https://vituhonda.github.io/Portfolio/",
        icons: ["html", "css", "js", "bs"]
    },

    // JOGO 21
    {
        title: 'Jogo 21',
        imgPath: "./img/Projects/Jogo21.png",
        link: "https://github.com/VituHonda/Jogo21",
        icons: ["java"]
    },

    // JOGO MEMORIA
    {
        title: 'Jogo memória',
        imgPath: "./img/Projects/JogoMemoria.png",
        link: "https://memoria-chi.vercel.app",
        icons: ["html", "css", "js"]
    },
    
]

const iconsList = {
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  
}

createProject(0)

function createProject(posicao) {

    const container = document.querySelector("[data-project]")

    const projectContainer = document.createElement("div")
    projectContainer.classList.add("project__container")

    const link = document.createElement("a")
    link.href = projectsList[posicao].link
    const projectImage = document.createElement("img")
    projectImage.src = projectsList[posicao].imgPath
    projectImage.classList.add("project__img")

    const title = document.createElement("h1")
    title.textContent = projectsList[posicao].title
    title.classList.add("project__title")

    const icons = document.createElement("div")

    projectsList[posicao].icons.forEach(element => {
        const name = element
        element = document.createElement("img")
        element.src = (iconsList[name])
        element.classList.add("project__icon")
        icons.appendChild(element)
    });

    // append order
    link.appendChild(projectImage)

    projectContainer.appendChild(link)
    projectContainer.appendChild(title)
    projectContainer.appendChild(icons)

    container.appendChild(projectContainer)

}

// COUNTER
const total = document.querySelector("#total")
total.textContent = projectsList.length

const now = document.querySelector("#now")
now.textContent = 1

function updateCounter(posicao) {

    now.textContent = posicao+1

}
