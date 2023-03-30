const button = document.querySelectorAll("[data-control]")
var projectPosition = 0

button.forEach(element => {
    element.addEventListener('click', (e) => {
        changeProject(e.target.dataset.control)
    })
})

function changeProject(operacao) {

    var discart = document.querySelector(".project__container")

    if (operacao == "-") {
        if (projectPosition == 0) {
            discart.remove()
            projectPosition = projectsList.length - 1
            createProject(projectPosition)
        } else {
            discart.remove()
            projectPosition--
            createProject(projectPosition)
        }
    } else {
        if (projectPosition == projectsList.length-1) {
            discart.remove()
            projectPosition = 0
            createProject(projectPosition)
        } else {
            discart.remove()
            projectPosition++
            createProject(projectPosition)
        }
    }
}