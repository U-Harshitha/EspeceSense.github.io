    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

