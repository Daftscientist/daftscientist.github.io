document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const techItems = document.querySelectorAll('.tech-item');
    let itemsPerRow = 2; // Default items per row
    let rowsToShow = 2;
    let isShowingMore = false; // Assume we're starting in "show more" mode

    function updateItemsVisibility() {
        // Adjust itemsPerRow based on screen width
        if (window.innerWidth >= 1280) itemsPerRow = 9;
        else if (window.innerWidth >= 1024) itemsPerRow = 6;
        else if (window.innerWidth >= 768) itemsPerRow = 4;
        else itemsPerRow = 3; // Default for smaller screens

        let totalItemsToShow = itemsPerRow * rowsToShow;

        techItems.forEach((item, index) => {
            if (index < totalItemsToShow) {
                item.classList.remove('custom_hidden'); // Show items up to the totalItemsToShow
            } else {
                item.classList.add('custom_hidden'); // Hide items beyond totalItemsToShow
            }
        });

        // Calculate the maximum number of rows
        const maxRows = Math.ceil(techItems.length / itemsPerRow);

        // Update button text and state
        if (rowsToShow < maxRows) {
            showMoreBtn.textContent = 'Show More';
            isShowingMore = true;
        } else {
            showMoreBtn.textContent = 'Show Less';
            isShowingMore = false;
        }
    }

    // Initial update
    updateItemsVisibility();

    // Update on window resize to adjust to new column layout
    window.addEventListener('resize', updateItemsVisibility);

    // Toggle rowsToShow based on the current state of the button
    showMoreBtn.addEventListener('click', function () {
        const maxRows = Math.ceil(techItems.length / itemsPerRow);

        if (isShowingMore) {
            rowsToShow = maxRows; // Show all rows
            isShowingMore = false;
        } else {
            rowsToShow = 2; // Show default rowsToShow
            isShowingMore = true;
        }

        updateItemsVisibility();
    });
});