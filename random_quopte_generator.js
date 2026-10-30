 url = 'https://quoteslate.vercel.app/api/quotes/random'

  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change' ,()=>{
            const selectedTag = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value)

        selectedTag.length>0 ? localStorage.setItem('tags', JSON.stringify(selectedTag)) :localStorage.removeItem('tags') 
           })
    })



    function clickAllBtn(){
        let tags = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]')
        const allChaked = Array.from(checkboxes).every(checkbox => checkbox.checked)
        checkboxes.forEach(checkbox => {
            checkbox.checked= !allChaked
            if(checkbox.checked){
                tags.push(checkbox.value)
            }
        })
        allChaked ? localStorage.removeItem('tags') : localStorage.setItem('tags', JSON.stringify(tags))
    }


    
  
   
