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

    document.addEventListener("DOMContentLoaded", function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const topMenu = document.querySelector('.top');

        hamburgerMenu.addEventListener('click', function() {
            if (topMenu.style.display === 'block') {
                topMenu.style.display = 'none';
            } else {
                topMenu.style.display = 'block';
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const grid = document.querySelector('.grid');
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
    for (var i = 0; i < 128; i++) { // Small numbers look nice too
        var bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.cssText = `--size:${2+Math.random()*4}rem; --distance:${6+Math.random()*4}rem; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`;
        document.querySelector('.bubbles').appendChild(bubble);
    }