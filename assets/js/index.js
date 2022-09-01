const init = () => {
  const inputForm = document.getElementById('search')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('property');

    fetch(`http://localhost:3000/House/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const house = document.getElementById('properties');
      house.innerHTML = `${data.title} ${data.content} Ksh ${data.price}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

