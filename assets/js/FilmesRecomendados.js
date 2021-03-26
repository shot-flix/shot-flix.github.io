gerarNumeros = (qtdPost) => {
    numeros = []
    for (let i = 0; i < qtdPost; i++) {
        const n = this.gerarNumerosNaoContidos(numeros)
        numeros.push(n)
    }
    return numeros
}

gerarNumerosNaoContidos = (nums) => {
    const novo = parseInt(Math.random() * urlPost.length - 1) + 1
    return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
}

exibirPosts = (qtdePost, modo) => {
    var posts = gerarNumeros(qtdePost);

    if (modo == 'tags') {

        for (post in posts) {
            document.write(
                `<div title="${titlePost[posts[post]]}" id="post" class="post">
                    <a id="linkPost" href="${urlPost[posts[post]]}"></a>
                    <div class="img-categoria">
                        <div id="categorias-area" class="categorias-area">
                            ${gerarTags()}
                        </div><!--categoria-area-->
                        <div class="button-assistir">assistir</div>
                        <img class="img-poster" data-Src="${imagePost[posts[post]]}" data-Alt="${titlePost[posts[post]]}"></img>
                    </div><!--img-categoria-->
                    <p>${titlePost[posts[post]]}</p>
                </div><!--Post-->`
            )
    
            function gerarTags() {
                var categorias = categoriasPost[posts[post]];
                if (categorias.indexOf(',') != -1) {
                    var ts = categorias.split(',');
                    return (`
                        <div class="categoria">${ts[0]}</div>
                        <div class="categoria">${ts[1]}</div>
                    `)
                } else {
                    return `
                        <div class="categoria">${categoriasPost[posts[post]]}</div>
                    `
                }
            }
        }

    } else if (modo == 'noTags') {
        for (post in posts) {
            document.write(
                `<div title="${titlePost[posts[post]]}" id="post" class="post">
                    <a id="linkPost" href="${urlPost[posts[post]]}"></a>
                    <div class="img-categoria">
                        <div class="bg-pelicula"></div>
                        <div class="button-assistir">assistir</div>
                        <img style="border: 0; outline: none;" class="img-poster" data-Src="${imagePost[posts[post]]}" data-Alt="${titlePost[posts[post]]}"></img>
                    </div><!--img-categoria-->
                    <p>${titlePost[posts[post]]}</p>
                </div><!--Post-->`
            )
        }
    }
}

