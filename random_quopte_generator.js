 url = 'https://quoteslate.vercel.app/api/quotes/random'

  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change' ,()=>{
            const selectedTag = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value)

        selectedTag.length>0 ? localStorage.setItem('tags', JSON.stringify(selectedTag)) :localStorage.removeItem('tags') 
           })
    })







    
