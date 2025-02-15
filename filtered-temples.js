const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2015, August, 7",
        area: "11,500 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"     },

    {
        name: "Manti",
        location: "Manti, Utah",
        dedicated: "1893",
        area: "747 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55303-thumb.jpg" 
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015",
        area: "96,630 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-53786-thumb.jpg"
    },
       
    {
        name: "Accra Ghana",
        location: "Accra, Grand Accra, Ghana",
        dedicated: "January 11, 2004",
        area: "76,450 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-15503-thumb.jpg"
    },
       

    {
     name: "Phoenix Arizona Temple", 
     location: "Phoenix, Arizona", 
     dedicated: "2014-12-13", 
     area: 120000, 
     image: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
       
    },

    {

name: "Seattle Washington Temple", 
location: "Seattle, Washington", 
dedicated: "1980-11-24", 
area: 90000, 
image: "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-14204-thumb.jpg"



    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020",
        area: "68,000 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26502-thumb.jpg"
    },
    

    {

    name: "New York Temple",
     location: "New York, New York", 
     dedicated: "2004-12-15", 
     area: 150000, 
     image: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg" },
      


    {
        name: "London Englang Temple",
        location: "London England",
        dedicated: "7 September 1958",
        area: "86,000 sq ft",
        image:"https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-55898.jpg"

    },
    


    {

    name: "Los Angeles Temple",
    location: "Los Angeles, California", 
    dedicated: "2000-04-13",
    area: 191000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg" },


    {
        name: "Rio De Janeiro Temple",
        location: "Rio de Janeiro ,Brazil",
        dedicated: "April 6, 2013",
        area: "68,000 sq ft",
        image:"https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167.jpg"

    },


    {
        name: "Paris France Temple",
        location: "Paris,France",
        dedicated: "May 21, 2017",
        area: "9000 sq ft",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-55206-thumb.jpg"
    },
   
];

const templeContainer = document.getElementById("temple-container");

temples.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
    templeCard.innerHTML = `
        <img src="${temple.image}" alt="${temple.name}">
        <h2>${temple.name}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area}</p>
    `;
    templeContainer.appendChild(templeCard);
});

// Footer content
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("last-modified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;