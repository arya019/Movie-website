
// DRAG TO SLIDE FUNCTIONALITY FOR DESKTOP
// DRAG TO SLIDE FUNCTIONALITY FOR DESKTOP
const movieLists = document.querySelectorAll(".movie-list");

movieLists.forEach(movieList => {
    let isDown = false;
    let startX;
    let scrollLeft;

    movieList.addEventListener('mousedown', (e) => {
        isDown = true;
        movieList.classList.add('grabbing');
        startX = e.pageX - movieList.offsetLeft;
        scrollLeft = movieList.scrollLeft;
    });

    movieList.addEventListener('mouseleave', () => {
        isDown = false;
        movieList.classList.remove('grabbing');
    });

    movieList.addEventListener('mouseup', () => {
        isDown = false;
        movieList.classList.remove('grabbing');
    });

    movieList.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - movieList.offsetLeft;
        const walk = (x - startX) * 2;
        movieList.scrollLeft = scrollLeft - walk;
    });
});
