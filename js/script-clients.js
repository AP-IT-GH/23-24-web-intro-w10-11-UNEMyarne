// array met merken van koffiebonen
const brands = ["Illy", "Gran Maestro Italiano", "Segafredo", "Lavazza", "Starbucks", "Fairtrade Original"];

// Functie om een willekeurig item uit de array te selecteren
function random_item(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

fetch('https://randomuser.me/api/?results=6')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(function (data) {
        let users = data.results;
        let html = '<div class="user-list">';
        users.forEach(function (user) {
            let favoriteBrand = random_item(brands); // Willekeurig koffiebonenmerk selecteren
            html += `
            <div class="col">
    <div class="card">
        <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">
        <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
            <p class="card-text"><strong>Land:</strong> ${user.location.country}</p>
            <p class="card-text"><strong>Favoriete merk van koffiebonen:</strong> ${favoriteBrand}</p>
            <p class="card-text"><strong>E-mail:</strong> ${user.email}</p>
        </div>
    </div>
</div>
            `;
        });
        html += '</div>';
        document.getElementById("users").innerHTML = html;
    })
    .catch(function (error) {
        console.error("Error with message: " + error)
    });
