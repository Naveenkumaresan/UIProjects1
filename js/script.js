document.addEventListener('DOMContentLoaded', function() {
    const wavePath = document.querySelector('.wave path');

    // Simple animation for the wave
    function animateWave() {
        wavePath.setAttribute('d', `M0,64L60,96C120,128,240,192,360,213.3C480,235,600,213,720,192C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z`);
        requestAnimationFrame(animateWave);
    }

    animateWave();
});
