document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Change animation speed here

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Lower the number to slow and increase to speed up
            const increment = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add increment
                counter.innerText = Math.ceil(count + increment);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
