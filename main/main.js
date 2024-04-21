
const images = document.querySelectorAll('img[data-src]');
const loadButton = document.getElementById('loadImagBt');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};  

const lazyLoad = (target) => {
    target.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('loaded')) { 
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in', 'loaded'); 
            observer.unobserve(img);
        }
    });
};

const observer = new IntersectionObserver(lazyLoad, options);

loadButton.addEventListener('click', function () {
    images.forEach((img) => {
        observer.observe(img);
    });

    loadButton.style.display = 'none'; 
});