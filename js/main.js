


// Плавный скрол====================================
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

// получаем необходимые элементы!==========================================
const body = document.getElementById('body')
const burgerMenuButton = document.getElementById('menu-icon');
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
const burgerMenu = document.getElementById('menu-burger');



// Плавная прокрутка по якорям!========================================
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            // if(burgerMenu.classList.contains('active')) {
            //     burgerMenuButton.classList.remove('.active');
            //     body.classList.remove('.no_scroll');
            //     burgerMenu.classList.remove('.active');
            // }

            window.scroll({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();

    }
}

// Бургер меню ===================================================
if(burgerMenuButton) {
    burgerMenuButton.addEventListener('click', function(e) {
        burgerMenuButton.classList.toggle('active');
        body.classList.toggle('no_scroll');
        burgerMenu.classList.toggle('active');
    })
}

//navbar links

const navbar = document.querySelector("#menu-burger");
a = navbar.querySelectorAll("#burgerMenu");
console.log(a);


a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {

            a[i].classList.remove("active")
        }
        this.classList.add("active");
        burgerMenuButton.classList.remove('active');
        body.classList.remove('no_scroll');
        burgerMenu.classList.remove('active');
    })
});