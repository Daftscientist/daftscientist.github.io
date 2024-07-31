document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project'); // Ensure your projects have this class

    var last_button = document.querySelector('#all_button');
    last_button.className = "filter-btn bg-gray-600 text-accent font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.add('bg-gray-600', 'text-accent', 'font-bold', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:shadow-outline');
            button.classList.remove('bg-gray-700', 'hover:bg-gray-600', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'ease-in-out');
            
            if (last_button != null) {
                last_button.classList.add('bg-gray-700', 'hover:bg-gray-600', 'text-accent', 'font-bold', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:shadow-outline', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'ease-in-out');
                last_button.classList.remove('bg-gray-600');
            }
            const filter = this.getAttribute('data-filter').toLowerCase(); // Normalize to lowercase

            projects.forEach(project => {
                // Assuming each project has a 'data-tech' attribute, split and normalize it
                const techs = project.getAttribute('data-tech').toLowerCase().split(' ');
                if (techs.includes(filter) || filter === 'all') {
                    project.style.display = 'block'; // Show project
                } else {
                    project.style.display = 'none'; // Hide project
                }
            });
            last_button = button;
        });
    });
});
