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
    "./img/certificates/Certificado Python OO avançado - ALURA.png",
    "./img/certificates/Certificado ALURA SASS.png",
    "./img/certificates/Certificado ALURA Tailwind.png",
    "./img/certificates/Certificado ALURA JS DOM.png",
    "./img/certificates/AWSCustosServicos.png",
    "./img/certificates/ThreadsJava.png",
    "./img/certificates/GitGithub.png",
    "./img/certificates/JavaCollections.png",
    "./img/certificates/JavaExceptions.png",
    "./img/certificates/ReactFullStack.png",
    "./img/certificates/AprendendoRuby.png",
    "./img/certificates/Threads1Java.png",
    "./img/certificates/Threads2Java.png"

];

var certificatePosition = document.querySelectorAll("#cert");

var lista = document.querySelector("#lista-certificados");

var image = document.querySelector("#certificado-img");

achaPosicao(certificatePosition);

function achaPosicao() {

    for (i = 0; i < certificatePosition.length; i++) {

        certificatePosition[i].index = i;

        certificatePosition[i].addEventListener('click', function (e) {

            for(j=0; j<certificatePosition.length;j++){
                certificatePosition[j].classList.remove('cert__selecionado')
            }

            var index = this.index

            image.src = imgcertificados[index]

            e.target.classList.add('cert__selecionado')

        });
    };
};