fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
        // O .map() passa por cada 'post' e extrai apenas o 'post.title'
        let apenasTitulos = posts.map(post => post.title);
        
        console.log(apenasTitulos); // Um vetor só com os textos dos títulos!
    });