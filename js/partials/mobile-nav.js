var HeaderHeight = document.getElementById('header').clientHeight;

document.getElementById('mobile-nav-wrapper').style.height = 'calc(100% - ' + HeaderHeight + 'px)';

window.addEventListener('resize', function(){
    HeaderHeight = document.getElementById('header').clientHeight;
    document.getElementById('mobile-nav-wrapper').style.height = 'calc(100% - ' + HeaderHeight + 'px)';
})

window.addEventListener('orientationchange', function(){
    HeaderHeight = document.getElementById('header').clientHeight;
    document.getElementById('mobile-nav-wrapper').style.height = 'calc(100% - ' + HeaderHeight + 'px)';
})

document.getElementById('hamburger').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.getElementById('mobile-nav-wrapper').classList.toggle('active');
    document.getElementById('body').classList.toggle('fix');
})

var mobile_nav_links = document.getElementsByClassName('mobile-nav__section-navpoints__link');

for (var i=0; i<mobile_nav_links.length; i++) {
    mobile_nav_links[i].addEventListener('click', function(){
        document.getElementById('mobile-nav-wrapper').classList.toggle('active');
        document.getElementById('body').classList.toggle('fix');
        document.getElementById('hamburger').classList.toggle('is-active');
    })
}