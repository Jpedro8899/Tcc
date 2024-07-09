var map = L.map('map').setView([-27.0580,-49.5210], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*L.marker([-27.0448, -49.4961]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();*/
    
    function toggleMenu() {
        var nav = document.getElementById('nav.menu-lateral');
        var content = document.getElementById('content');
        nav.classList.toggle('open');
        nav.classList.toggle('blurred');
    }