var slide = document.getElementById('slide-container');




gerarNumeros = (qtdPost) => {
    numeros = []
    for (let i = 0; i < qtdPost; i++) {
        const n = this.gerarNumerosNaoContidos(numeros)
        numeros.push(n)
    } 
    return numeros
}

gerarNumerosNaoContidos = (nums) => {
    const novo = parseInt(Math.random() * urlPost.length - 1) + 1;
    return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
}

exibirPosts = () => {
    var posts = gerarNumeros(3);

    for (post in posts) {
        document.write(
            `<div id="slidePost" class="slider" data-url="background-image: url(${capaSlide[posts[post]]});">
                <div class="bg-pelicula"></div>
                <div class="playSlide"></div>
                <p>${titlePost[posts[post]]}</p>
                <a href="${urlPost[posts[post]]}"></a>
            </div>`
        )
    }
}
exibirPosts();
