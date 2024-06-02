document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const link of scrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});



  