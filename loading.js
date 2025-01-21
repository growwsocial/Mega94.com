// JavaScript to hide the loading screen once the page has loaded with a minimum delay of 3 seconds
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Minimum delay of 3 seconds
    const minLoadingTime = 3000;
    const startTime = Date.now();

    function hideLoadingScreen() {
        const elapsedTime = Date.now() - startTime;
        const delay = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, delay);
    }

    hideLoadingScreen();
});

