document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.movie-card button').forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.parentElement.querySelector('h3').textContent;
        alert(Now Playing: ${movieTitle});
    });
});