function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const dataSrc = img.getAttribute('data-src');
            // Змінює src на data-src
            img.setAttribute('src', dataSrc);
           // прибераю observer
            observer.unobserve(img);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5
});

const images = document.querySelectorAll('img[data-src]');

images.forEach(img => {
    observer.observe(img);
});

const loadImgBtn = document.getElementById('loadImgBtn');

loadImgBtn.addEventListener('click', () => {
    images.forEach(img => {
        observer.observe(img);
    });
// приберає кнопку після натискання
    loadImgBtn.style.display = 'none';
});