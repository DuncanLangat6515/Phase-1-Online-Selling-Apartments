const init = () => {
  const inputForm = document.getElementById('search')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('property');
    fetch(`http://localhost:3000/${input.value}`)
      .then(response => response.json())

      .then(data => housesInCity(data))

    function housesInCity(houses) {
      for (let i = 0; i < houses.length; i++) {
        let div = document.getElementById('properties')
        let h4 = document.createElement('h4')
        h4.innerHTML = ` ${houses[i].name} ${houses[i].details} Ksh ${houses[i].price}`
        div.appendChild(h4)
     

      }
    }
  })
}


document.addEventListener('DOMContentLoaded', init);

//