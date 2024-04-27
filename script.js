document.querySelectorAll('.tour-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.querySelector('video').play();
    });
    card.addEventListener('mouseout', function() {
        this.querySelector('video').pause();
    });
});

