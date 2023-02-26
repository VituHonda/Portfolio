var habilidades = document.querySelectorAll(".habilidade__name")

function python() {

    var pythonicon = document.querySelector("#pythonicon");
    var pythontxt = document.querySelector("#pythontxt");

    pythonicon.addEventListener("mouseover", function (event) {

        pythontxt.classList.remove("invisivel");

    });

    pythonicon.addEventListener("mouseout", function (event) {

        pythontxt.classList.add("invisivel");
        pythontxt.classList.add("fade__down");

        setTimeout(function () {

            pythontxt.classList.remove("fade__down");

        }, 500);


    });

};

python();

function java() {

    var javaicon = document.querySelector("#javaicon");
    var javatxt = document.querySelector("#javatxt");

    javaicon.addEventListener("mouseover", function (event) {

        javatxt.classList.remove("invisivel");

    });

    javaicon.addEventListener("mouseout", function (event) {

        javatxt.classList.add("invisivel");
        javatxt.classList.add("fade__down");

        setTimeout(function () {

            javatxt.classList.remove("fade__down");

        }, 500);

    });

};

java();

function html() {

    var htmlicon = document.querySelector("#htmlicon");
    var htmltxt = document.querySelector("#htmltxt");

    htmlicon.addEventListener("mouseover", function (event) {

        htmltxt.classList.remove("invisivel");

    });

    htmlicon.addEventListener("mouseout", function (event) {

        htmltxt.classList.add("invisivel");
        htmltxt.classList.add("fade__down");

        setTimeout(function () {

            htmltxt.classList.remove("fade__down");

        }, 500);

    });

};

html();

function css() {

    var cssicon = document.querySelector("#cssicon");
    var csstxt = document.querySelector("#csstxt");

    cssicon.addEventListener("mouseover", function (event) {

        csstxt.classList.remove("invisivel");

    });

    cssicon.addEventListener("mouseout", function (event) {

        csstxt.classList.add("invisivel");
        csstxt.classList.add("fade__down");

        setTimeout(function () {

            csstxt.classList.remove("fade__down");

        }, 500);

    });

};

css();

function js() {

    var jsicon = document.querySelector("#jsicon");
    var jstxt = document.querySelector("#jstxt");

    jsicon.addEventListener("mouseover", function (event) {

        jstxt.classList.remove("invisivel");

    });

    jsicon.addEventListener("mouseout", function (event) {

        jstxt.classList.add("invisivel");
        jstxt.classList.add("fade__down");

        setTimeout(function () {

            jstxt.classList.remove("fade__down");

        }, 500);

    });

};

js();

function go() {

    var goicon = document.querySelector("#goicon");
    var gotxt = document.querySelector("#gotxt");

    goicon.addEventListener("mouseover", function (event) {

        gotxt.classList.remove("invisivel");

    });

    goicon.addEventListener("mouseout", function (event) {

        gotxt.classList.add("invisivel");
        gotxt.classList.add("fade__down");

        setTimeout(function () {

            gotxt.classList.remove("fade__down");

        }, 500);

    });

};

go();