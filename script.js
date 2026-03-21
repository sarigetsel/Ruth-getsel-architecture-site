let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 6000);

function openGallery(type) {
    const overlay = document.getElementById('galleryOverlay');
    const imagesDiv = document.getElementById('galleryImages');
    const title = document.getElementById('galleryTitle');
    imagesDiv.innerHTML = '';

    if(type === 'kitchen') {
        title.innerText = 'מטבחים וחללי פנים';
        for(let i=1; i<=15; i++) imagesDiv.innerHTML += `<img src="kitchen/p (${i}).png" alt="kitchen ${i}">`;
    } else if(type === 'final') {
        title.innerText = 'פרויקט גמר';
        for(let i=1; i<=5; i++) imagesDiv.innerHTML += `<img src="FinalProject/p (${i}).png" alt="final ${i}">`;
    } else if(type === 'kinder') {
        title.innerText = 'גני ילדים';
        for(let i=1; i<=3; i++) imagesDiv.innerHTML += `<img src="kindergarten/p${i}.png" alt="kinder ${i}">`;
    }

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}