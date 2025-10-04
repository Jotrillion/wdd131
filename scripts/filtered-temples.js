const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const now = new Date();
currentyear.innerHTML = ` <span class="highlight">${now.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: <span class="light">${document.lastModified}</span>`;
const menuButton = document.getElementById('menu');
const navBar = document.querySelector('.nav-bar');
const heading = document.querySelector('.heading');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navBar.classList.toggle('show');
    heading.classList.toggle('hide');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        Year: 2002,
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        Year: 1887,
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        Year: 2011,
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        Year: 2019,
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington.",
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
        templeName: "Mexico City ",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    {
        templeName: "Kinshasa ",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        Year: 2016,
        area: 12000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    {
        templeName: "Cape Town ",
        location: "Cape Town, South Africa",
        dedicated: "2025, October, 25",
        Year: 2025,
        area: 9500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-64609-main.jpg"
    },
    {
        templeName: "Brigham City ",
        location: "Utah, United States",
        dedicated: "2010, July, 31",
        Year: 2010,
        area: 36000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
    },
    {
        templeName: "Cape Town ",
        location: "Cape Town, South Africa",
        dedicated: "2025, October, 25",
        Year: 2025,
        area: 9500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-64609-main.jpg"
    },
    {
        templeName: "Brigham City ",
        location: "Utah, United States",
        dedicated: "2010, July, 31",
        Year: 2010,
        area: 36000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
    }
    // Add more temple objects here...
];
createtemplecard(temples);
const old = document.querySelector("#old");
old.addEventListener('click', () => {
    createtemplecard(temples.filter(temple => temple.Year < 1900))
})
const home = document.querySelector("#home");
home.addEventListener('click',() => {
    createtemplecard(temples.filter(temple => temple))
})
const newt = document.querySelector("#new");
newt.addEventListener('click', () => {
    createtemplecard(temples.filter(temple => temple.Year > 2000))
})
const small = document.querySelector("#small");
small.addEventListener('click', () => {
    createtemplecard(temples.filter(temple => temple.area < 10000 ))
})
const large = document.querySelector("#large"); 
large.addEventListener('click', () => {
    createtemplecard(temples.filter(temple => temple.area > 90000))
})
function createtemplecard(temples) {
    document.querySelector('.image-gallery').innerHTML = "";
    temples.forEach((temple) => {
        let card = document.createElement('section');
        card.classList.add('temple-card');
        card.innerHTML = `
            <h3 class="temple-name">${temple.templeName}</h3>
            <img class="temple-image" src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy" width="400" height="250"/>
            <p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
            <p class="temple-dedicated"><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p class="temple-area"><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        document.querySelector('.image-gallery').appendChild(card);
    })


        

        
    
}
