let btn = document.getElementById('btn');
let apiURL = "https://api.quotable.io/random"
let quote = document.getElementById("quote")
let author = document.getElementById('author')


async function getquote() {
    try {
        btn.innerHTML = "Updating"
        btn.disabled = true;
        quote.innerHTML = "Working on it..."
        const response = await fetch(apiURL)
        const data = await response.json()
        const quoteContent = data.content
        const quoteAuthor = data.author
        quote.innerHTML = quoteContent
        author.innerHTML = `~${quoteAuthor}`
        btn.innerHTML = "Get a Quote"
        btn.disabled = false
    } catch (error) {
        console.log(error);
        quote.innerHTML = "An error occured, please try again"
        author.innerHTML = "An error occured, please try again"
        btn.innerHTML = "Get a Quote"
        btn.disabled = false
    }
}
getquote();

btn.addEventListener('click', getquote)