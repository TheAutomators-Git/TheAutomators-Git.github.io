const nav = document.getElementById("navbar-section");

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        nav.style.backgroundColor = "transparent";
    } else {
        nav.style.backgroundColor = "black";
    }
});

if (window.scrollY === 0) {
    nav.style.backgroundColor = "transparent";
} else {
    nav.style.backgroundColor = "black";
}

document.querySelectorAll(".wrapper").forEach((wrapper) => {
    const carousel = wrapper.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = wrapper.querySelectorAll("i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false,
        isAutoPlay = false,
        startX,
        startScrollLeft,
        timeoutId;
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
        .slice(-cardPerView)
        .reverse()
        .forEach((card) => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft +=
                btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };
    const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };
    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft =
                carousel.scrollWidth - 2 * carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (
            Math.ceil(carousel.scrollLeft) ===
            carousel.scrollWidth - carousel.offsetWidth
        ) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    };
    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(
            () => (carousel.scrollLeft += firstCardWidth),
            2500
        );
    };
    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});


// start of the code for the starting animation
document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    let delay = 500; // 0.5 seconds delay between each word

    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('show');
        }, delay * (index + 1));
    });

    // Hide the overlay after the loader finishes
    setTimeout(function() {
        document.getElementById('overlay').classList.add('hidden');
    }, delay * (words.length + 2)); // Adjust to ensure it hides after the last word
});
//center the scrollbar for cards
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.core-content');
    if (grid) {
        const centerGrid = () => {
            if (window.innerWidth < 1280) {
                grid.scrollLeft = (grid.scrollWidth - grid.clientWidth) / 2;
            } else {
                grid.scrollLeft = 0; // or another desired position for larger screens
            }
        };

        // Center the grid on initial load
        centerGrid();

        // Optionally, re-center the grid on window resize
        window.addEventListener('resize', centerGrid);
    }
});
document.getElementById('ham-burger').addEventListener('click', function() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('show');
});

// Optional: Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebarMenu = document.getElementById('sidebar-menu');
    const hamBurger = document.getElementById('ham-burger');
    if (!sidebarMenu.contains(event.target) && !hamBurger.contains(event.target)) {
        sidebarMenu.classList.remove('show');
    }
});