
function changeheader()
{
    var header = document.querySelector('.header');
    if(window.scrollY > 50)
        {
            header.classList.add('active');
        }
    else
    {
        header.classList.remove('active');
    }
}

window.onscroll = function() {changeheader()};


ScrollReveal({ distance: '100px' });
ScrollReveal().reveal('.reveal', { origin: 'top', duration:2000 , reset: true});
ScrollReveal().reveal('.content-home', { origin: 'top', duration:2000 , reset: true, opacity: 0});
ScrollReveal().reveal('.content-about', { origin: 'left', duration:2000 , reset: true, opacity: 0});
ScrollReveal().reveal('.content-about-right', { origin: 'right', duration:2000 , reset: true, opacity: 0});
ScrollReveal().reveal('.last-content-left', { origin: 'left', duration:2000 , reset: true, opacity: 0});
ScrollReveal().reveal('.content-last-right', { origin: 'right', duration:2000 , reset: true, opacity: 0});
