import './style.scss';

const nav = document.querySelectorAll('.nav-item')
const contentDiv = document.querySelector('.content')
var section = document.querySelectorAll('.section')
var sections = {};

// // HIGHLIGH NAV-ITEM ON CLICK
// for (let i = 0; i < nav.length; i++) {
//     nav[i].addEventListener('click', function () {
//         let current = document.getElementsByClassName('active')
//         current[0].className = current[0].className.replace(' active', '')
//         this.className += ' active'
//     })
// }

// HIGHLIGHT NAV-ITEM ON SCROLL
contentDiv.onscroll = function () {
    let i = 0
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop
    })
    var scrollPosition =
        document.documentElement.scrollTop || contentDiv.scrollTop
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ')
            document
                .querySelector('a[href*=' + i + ']')
                .setAttribute('class', 'active')
        }
    }
}

