function manipulateDom() {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        quote.style.borderColor = 'blue';
        quote.style.backgroundColor = 'lightblue';
        quote.style.fontStyle = 'italic';
    })
};

export { manipulateDom };


// A következőképpen kell működnie a függvénynek:
// - Megkeres az oldalon minden quote osztályhoz tartozó elemet, és három stílust állít be rájuk JavaScript segítségével: 
//   - a körvonaluk legyen kék, 
//   - a hátterük világoskék 
//   - és az általuk használt betűtípus dőlt.
