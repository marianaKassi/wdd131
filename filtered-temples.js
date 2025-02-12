function createCard(location, details, imageUrl) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = location;
    img.loading = 'lazy';
    img.onclick = () => showInfo(location, details);

    const title = document.createElement('h2');
    title.textContent = location;

    const info = document.createElement('p');
    info.textContent = details;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(info);

    return card;
}

function showInfo(location, details) {
    alert(`Information about ${location}:\n${details}`);
}

const gallery = document.querySelector('.gallery');
const places = [
    { location: 'Aba, Nigeria', details: 'Dedicated: 2015, August, 7\nSize: 11,500 sq ft', imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg' },
    { location: 'Manti, Utah', details: 'Dedicated: 1877\nSize: 748 sq ft', imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55313.jpg' },
    { location: 'Payson, Utah', details: 'Dedicated: 2015\nSize: 96,630 sq ft', imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-55109.jpg' },
    { location: 'Yigo, Guam', details: 'Dedicated: 2019\nSize: 68,000 sq ft', imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26505-thumb.jpg' },
    {  location:'Mexico City Mexico',details: 'Dedicated: 1983, December 8\nSize: 116642 sq ft' , imageUrl:  'https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-20741-thumb.jpg' },

    { location: 'Washington D.C Maryland, United States' ,details: 'Dedicated: 1974, November, 19\nSize: 156558 sq ft', imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-56743-thumb.jpg' },

    { location: 'Lima, Perú',details:'Dedicated: 1986, January, 10\nSize: 9600 sq ft' ,imageUrl:'https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-36798-thumb.jpg' },
];

places.forEach(place => {
    const card = createCard(place.location, place.details, place.imageUrl);
    gallery.appendChild(card);




    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:'https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg'
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55313.jpg'
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          'https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-55109.jpg'
        },
          {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
      ];


});