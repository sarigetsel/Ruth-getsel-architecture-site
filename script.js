function openGallery(type) {
    const overlay = document.getElementById('galleryOverlay');
    const imagesDiv = document.getElementById('galleryImages');
    const title = document.getElementById('galleryTitle');
    imagesDiv.innerHTML = '';

    if(type === 'flower') {
        title.innerText = 'חנות פרחים במילאנו';
        imagesDiv.innerHTML += `
            <div style="grid-column: 1 / -1; text-align: center; margin-bottom: 30px;">
                <a href="flowerShop/flower.pdf" target="_blank" style="display:inline-block; padding:15px 30px; background:#1a1a1a; color:white; text-decoration:none;">צפייה בתיק מוצר מלא (PDF)</a>
            </div>`;
        for(let i=1; i<=3; i++) imagesDiv.innerHTML += `<img src="flowerShop/p${i}.png" alt="flower ${i}">`;
    } else if(type === 'kinder') {
        title.innerText = 'מוסדות חינוך';
        imagesDiv.innerHTML += `
            <div style="grid-column: 1 / -1; text-align: center; margin-bottom: 30px;">
                <a href="kindergarten/kinder.pdf" target="_blank" style="display:inline-block; padding:15px 30px; background:#1a1a1a; color:white; text-decoration:none;">צפייה בתיק מוצר מלא (PDF)</a>
            </div>`;
        for(let i=1; i<=3; i++) imagesDiv.innerHTML += `<img src="kindergarten/p${i}.png" alt="kinder ${i}">`;
    } else if(type === 'kitchen') {
        title.innerText = 'מטבחים וחללי פנים';
        imagesDiv.innerHTML += `
            <div style="grid-column: 1 / -1; text-align: center; margin-bottom: 30px;">
                <a href="kitchen/kit.pdf" target="_blank" style="display:inline-block; padding:15px 30px; background:#1a1a1a; color:white; text-decoration:none;">צפייה בתיק מוצר מלא (PDF)</a>
            </div>`;
        for(let i=1; i<=15; i++) imagesDiv.innerHTML += `<img src="kitchen/p (${i}).png" alt="kitchen ${i}">`;
    } else if(type === 'final') {
        title.innerText = 'פרויקט גמר | פנימייה';
        for(let i=1; i<=5; i++) imagesDiv.innerHTML += `<img src="FinalProject/p (${i}).png" alt="final ${i}">`;
    } else if(type === 'office') {
        title.innerText = 'בניין משרדים';
        for(let i=1; i<=4; i++) imagesDiv.innerHTML += `<img src="officeBuilding/p${i}.png" alt="office ${i}">`;
    } else if(type === 'kitchen2') {
        title.innerText = 'הדמיית מטבח';
        for(let i=1; i<=6; i++) imagesDiv.innerHTML += `<img src="kitchen2/p (${i}).png" alt="kitchen2 ${i}">`;
    } else if(type === 'villa') {
        title.innerText = 'וילה';
        for(let i=1; i<=4; i++) imagesDiv.innerHTML += `<img src="villa/p${i}.png" alt="villa ${i}">`;
    }

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
if(slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}