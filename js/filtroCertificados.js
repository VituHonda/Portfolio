var campoFiltro = document.querySelector("#inputCertificados");

campoFiltro.addEventListener('input', function () {

    var certificados = document.querySelectorAll('#cert');

    if (this.value.length > 0) {

        for (i = 0; i < certificados.length; i++) {

            var cert = certificados[i];
            var nome = cert.textContent;

            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                cert.classList.add("invisivel__cert")
            } else {
                cert.classList.remove("invisivel__cert")
            };

        }

    } else {
        for (i = 0; i < certificados.length; i++) {
            var cert = certificados[i];
            cert.classList.remove("invisivel__cert")
        }
    }

});

