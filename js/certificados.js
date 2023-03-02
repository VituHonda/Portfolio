var imgcertificados = [
    "./img/certificates/BIG_DATA_ANALYTICS-FIAP.png",
    "./img/certificates/Certificado ALURA HTML CSS P1.png",
    "./img/certificates/Certificado ALURA HTML5 e CSS3 P2.png",
    "./img/certificates/Certificado ALURA HTML5 CSS3 P3.png",
    "./img/certificates/Certificado Praticando HTML5 CSS3 ALURA.png",
    "./img/certificates/Certificado Intro JS - ALURA.png",
    "./img/certificates/Certificado Golang.png",
    "./img/certificates/Certificado Cloud Fundamentals - FIAP.png",
    "./img/certificates/CertificadoAlgoritmo.png",
    "./img/certificates/CertificadoBlockChain.png",
    "./img/certificates/Certificado Python OO - ALURA.png",
    "./img/certificates/Certificado Python OO avançado - ALURA.png"
];

var posicao = document.querySelectorAll("#cert");

var lista = document.querySelector("#lista-certificados");

var image = document.querySelector("#certificado-img");

achaPosicao(posicao);

function achaPosicao() {

    for (i = 0; i < posicao.length; i++) {

        posicao[i].index = i;

        posicao[i].addEventListener('click', function (e) {

            for(j=0; j<posicao.length;j++){
                posicao[j].classList.remove('cert__selecionado')
            }

            var index = this.index

            image.src = imgcertificados[index]

            e.target.classList.add('cert__selecionado')

        });
    };
};