$(document).ready(function() {
    const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/${2022}-${04}-${10}/hardcover-fiction.json';
    const API_KEY = 'vA7bYgdwlROu4PIAsnF1JPmxt1KzY5Zt';
    const url = `${BASE_URL}?api-key=${API_KEY}`;
    fetch(url)
    .then(response => {
        let res = response.json(); 
        return res;
    })
    .then(responseJSON => {
        console.log(responseJSON.results.books);
        let responseTest = responseJSON.results.books;
        responseTest.reverse().forEach(element => {
            $('#books-container').after(
                `<div style="display:block;margin:30px;padding:20px">`+
                `<div><img src="${element.book_image}" alt="img-text" style="width:100px"></img></div>`+
                `<div>${element.title}</div>`+
                `<div>${element.publisher}</div>`+
                `</div>`);
        });
    })
    .catch(error => {
        console.log(error);
    });
});