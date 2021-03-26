(function() {
    function displaySearchResults(results, store) {
      var searchResults = document.getElementById('searchArea');
  
      if (results.length) { // Are there any results?
        var appendString = '';
  
        for (var i = 0; i < results.length; i++) {  // Iterate over the results
          var item = store[results[i].ref];
          appendString += `<div title="${item.title}" id="post" class="post">
                                <a id="linkPost" href="${item.url}"></a>
                                <div class="img-categoria" style="background-image: url('${item.image}');">
                                    <div class="bg-pelicula"></div>
                                    <div class="button-assistir">assistir</div>
                                </div><!--img-categoria-->
                                <p>${item.title}</p>
                            </div><!--Post-->`
        }
  
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = `
        <div class="search-erro">
          <p>Ops!! Filme não encontrado.</p>
          <p>Não encontrou seu filme favorito? Peça <a target="_blank" href="https://www.instagram.com/shotflixtv/">aqui</a></p>
        </div>
        `;
      }
    }
  
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQueryVariable('s');
  
    if (searchTerm) {
      document.getElementById('buscar').setAttribute("value", searchTerm);
  
      // Initalize lunr with the fields it will be searching on. I've given title
      // a boost of 10 to indicate matches on this field are more important.
      var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('image');
      });
  
      for (var key in window.store) { // Add the data to lunr
        idx.add({
          'id': key,
          'title': window.store[key].title,
          'image': window.store[key].image,
        });
  
        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
      }
    }
  })();