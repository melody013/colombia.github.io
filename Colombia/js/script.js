const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/medellin.jfif')";
    title.innerText = 'Medellin';
    textCard.innerText = 'Es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la "Ciudad de la eterna primavera" por su clima templado y alberga la famosa Feria de las Flores anual. ';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/cafe.jfif')";
    title.innerText = 'Café Bar Universal';
    textCard.innerText = 'Es un restaurante, ubicado en Bogotá, que transporta a un lugar tranquilo y muy acogedor, para disfrutar de una oferta gastronómica diferente. Andrius Didziulis, el chef encargado de enamorar a todos los comensales, lo seducirá con platos frescos que muestran la diversidad de los sabores colombianos, en especial los del Pacífico, pues se utilizan únicamente ingredientes de la región y el menú varía según los alimentos de temporada.'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/bogota.jfif')";
    title.innerText = 'Bogota';
    textCard.innerText = 'Es la extensa capital en altura de Colombia. La Candelaria, su centro con adoquines, cuenta con sitios coloniales como el Teatro Colón neoclásico y la Iglesia de San Francisco del siglo XVII. También alberga museos populares, incluido el Museo Botero, que exhibe arte de Fernando Botero, y el Museo del Oro, con piezas de oro precolombinas.';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/cartagena.jfif')";
    title.innerText = 'Cartagena';

    textCard.innerText = 'Es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral';
})



const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});


linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})