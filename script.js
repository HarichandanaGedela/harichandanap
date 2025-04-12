// Define an array of quotes
const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Not everything that is faced can be changed, but nothing can be changed until it is faced. – James Baldwin",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "You love flowers even when it isn't spring .May you learn to love yourself the same way."
];

//  Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

//DOM manipulation to display the quote
const quoteText = document.getElementById('quote');
const generateButton = document.getElementById('generate-quote');

generateButton.addEventListener('click', () => {
    quoteText.textContent = getRandomQuote();
});
