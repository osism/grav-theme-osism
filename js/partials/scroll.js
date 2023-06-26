var HeaderHeight = document.getElementById('header').clientHeight;

function addScrollClasses() {
    function posTop() {
      return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
    }

    var scrollTop = posTop();

    if (scrollTop > 1) {
      body.classList.add('scrolled');
      document.getElementById('main').style.marginTop = HeaderHeight + 'px';
    } else {
      body.classList.remove('scrolled');
      document.getElementById('main').style.marginTop = '0px';
    }
  }

  addScrollClasses();

  document.addEventListener('scroll', function () {
    addScrollClasses();
  });
