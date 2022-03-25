const theQuotes = [
    { 
        quote: 'Java is to JavaScript, <br> like Boter is to Boterham',
        from: 'M Auerbach, &copy; 2021'
    },
    { 
        quote: 'In the midst of chaos, there is also opportunity',
        from: '― Sun Tzu, The Art of War'
    },
    { 
        quote: 'Appear weak when you are strong, and strong when you are weak.',
        from: '― Sun Tzu, The Art of War'
    },
    { 
        quote: 'If life gives you lemons, <br> make lemonade',
        from: 'Dunno - sometime...'
    },
];

const quoteEl = document.querySelector('.quote');
const fromEl = document.querySelector('.copyright');
const reloadEl = document.querySelector('.reload');

function showQuote() {
    const getQuoteNo = Math.floor(Math.random() * theQuotes.length);
    const useQuote = theQuotes[getQuoteNo];
    quoteEl.innerHTML = useQuote.quote;
    fromEl.innerHTML = useQuote.from;
}

reloadEl.addEventListener('click', showQuote);

showQuote();