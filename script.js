
    function sim() {
        alert("você agora é a minha mon chou")

    }

    function desvia(t) {
        var btn = t;
        btn.style.position = 'absolute'
        btn.style.top = geraPosicao(0, 90);
        btn.style.right = geraPosicao(0, 90);
        console.log("ih não pode negar")
    }


    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }

