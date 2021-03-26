openLink = (element, elementLink) => {
    for (let i = 0; i < element.length; i++){
        element[i].addEventListener('click', () => {
            elementLink[i].click()
        })
    }
}

converter = (minutos) => {
    var horas = Math.floor(minutos / 60);
    var min = minutos % 60;
    var textoHoras = (`00${horas}`).slice(-2);
    var textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras }h ${textoMinutos}m`;
}

function aceitarTermos() {
    let termos = document.getElementById('aceitarCookies');
    termos.style.display = 'none';
    localStorage.setItem('termosDeUso', 'aceito');
    
}

/** verificar termos de uso */

window.onload = function() {
    if (localStorage.getItem('termosDeUso') != 'aceito') {
        var termos = document.getElementById('aceitarCookies')
        termos.style.display = 'flex';
    }
}

/**FIM */