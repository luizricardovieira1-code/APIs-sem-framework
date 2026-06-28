fetch('https://jsonplaceholder.typicode.com/posts')
    .then(batata => batata.json())
    .then(title => {

        for (let i = 0; i < 5; i++){
            console.log(`title: ${title[i].title}`)
        }
    });

    