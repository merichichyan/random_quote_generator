url = 'https://quoteslate.vercel.app/api/quotes/random'

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedTag = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value)

        selectedTag.length > 0 ? localStorage.setItem('tags', JSON.stringify(selectedTag)) : localStorage.removeItem('tags')
    })
})



function clickAllBtn() {
    let tags = [];
    const allChaked = Array.from(checkboxes).every(checkbox => checkbox.checked)
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChaked
        if (checkbox.checked) {
            tags.push(checkbox.value)
        }
    })
    allChaked ? localStorage.removeItem('tags') : localStorage.setItem('tags', JSON.stringify(tags))
}




async function getQuote(categories) {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const category = categories[randomIndex];

    try {
        console.log(`${url}?tags=${encodeURIComponent(category)}`);

        const response = await fetch(`${url}?tags=${encodeURIComponent(category)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return data
    } catch {
        alert('Error')
        return null
    }
}


function clickGenerateBtn() {
    const categories = JSON.parse(localStorage.getItem('tags'))
    !categories ? alert('Select a category') : 
    getQuote(categories).then(quote => {        
        if (quote) {
            document.querySelector(".quote_card").textContent = quote.quote
        }
    });
}

