import './style.scss';

const nav = document.querySelectorAll('.nav-item')
const contentDiv = document.querySelector('.content')
let section = document.querySelectorAll('.section')
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.project-container img');
const original = document.querySelector('.full-img');
const projectCaption = document.querySelector('.caption');
const projectDescription = document.querySelector('.project-description');
let sections = {};

contentDiv.onscroll = function () {
    let i = 0
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop
    })
    var scrollPosition =
        document.documentElement.scrollTop || contentDiv.scrollTop + 300
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ')
            document
                .querySelector('a[href*=' + i + ']')
                .setAttribute('class', 'active')
        }
    }
}

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        const originalSrc = preview.getAttribute('src');
        original.src = originalSrc;
        const altText = preview.alt;
        projectCaption.textContent = altText;
        projectDescription.textContent = preview.nextElementSibling.textContent;
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }

})