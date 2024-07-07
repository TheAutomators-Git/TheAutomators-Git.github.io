// let hero = document.getElementById("construction-section")
// let data = [
//     {
//         url:"https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=",
//         title:"Automation",
//         description:"Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum "
//     },
//     {
//         url:"https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title:"Networking",
//         description:"Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum"
//     },
//     {
//         url:"https://www.shutterstock.com/image-vector/education-science-concept-banner-chemistry-600nw-772020961.jpg",
//         title:"Research",
//         description:"Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum"
//     }
// ]
// let htmlContent = '<div class="Hero">';
// data.forEach(item => {
//     htmlContent += `
//         <div class="box-container">
//             <h1>${item.title}</h1>
//             <div class="box">
//                 <img src=${item.url}  width= "350px" height= "270px" />
//                 <p>${item.description}</p>
//             </div>    
//         </div>
//     `;
// });
// htmlContent += '</div>';

// hero.innerHTML = htmlContent;
document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.image-and-text-about img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('rotate-on-screen');
            } else {
                image.classList.remove('rotate-on-screen');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(image);
});
const carousel = document.querySelector('.carousel');
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const itemsPerSlide = 3; // Number of items per slide
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index >= currentIndex && index < currentIndex + itemsPerSlide) {
                item.classList.add('active');
            }
        });
        const translateX = -currentIndex * (100 / itemsPerSlide);
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - itemsPerSlide : carouselItems.length - itemsPerSlide;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < carouselItems.length - itemsPerSlide) ? currentIndex + itemsPerSlide : 0;
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});
let team = [
    {
        name: "Muhammad Talal Majeed",
        
        image: "Talal.png",
    },
    {
        name: "Bilal Rana",
        role: "CTO",
        image: "Bilal.jpg",
    },
    {
        name: "Mujtaba",
        role: "COO",
        image: "Mujtaba.jpg",
    },
    {
        name: "Ayyan",
        role: "CFO",
        image: "Ayyan.jpg",
    },
    
]
let cData = '';
for (let i = 0; i < team.length; i++) {
    cData += `<div class="carousel-item">
                  <div><img src="${team[i].image}" alt="${team[i].name}" class="team-image"  /></div>
                  <p class="teammember-name">${team[i].name}</p>
              </div>`;
}
carousel.innerHTML = cData;

document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple-effect');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600); // Duration of the ripple effect
    });
});

