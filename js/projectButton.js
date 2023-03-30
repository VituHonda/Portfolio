const button = document.querySelectorAll("[data-control]")
var posicao = 0

button.forEach(element => {
    element.addEventListener('click', (e) => {
        changeProject(e.target.dataset.control)
    })
})

function changeProject(operacao) {

    var discart = document.querySelector(".project__container")

    if (operacao == "-") {

        if (posicao == 0) {
            discart.remove()
            posicao = projectsList.length - 1
            createProject(posicao)
        } else {
            discart.remove()
            posicao--
            createProject(posicao)
        }
    } else {
        if (posicao == projectsList.length-1) {
            discart.remove()
            posicao = 0
            createProject(posicao)
        } else {
            discart.remove()
            posicao++
            createProject(posicao)
        }
    }
}