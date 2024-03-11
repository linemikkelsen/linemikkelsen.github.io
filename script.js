document.addEventListener('DOMContentLoaded', function() {
    loadContent('about'); // Load the content of the About page when the page finishes loading
});

function loadContent(page, section) {
    // Fetch content based on the clicked subpage
    if (section) {
        fetch('pages/' + page + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('current').innerHTML = html;

            var targetSection = document.getElementById(section)
            if (targetSection) {
                targetSection.scrollIntoView({behavior: 'smooth'})
            } else {
                console.error('Section does not exist: ', section);
            }
        })
        .catch(error => console.error('Error loading content:', error));
    } else {
        fetch('pages/' + page + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('current').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
    }
    var button = document.querySelector('.dropdown-menu');
    if (button.style.display === 'none' && window.innerWidth <= 1250) {
        button.style.display = 'block';
    }
}

function openMenu() {
    loadContent('menu')
    var button = document.querySelector('.dropdown-menu');
    button.style.display = 'none';
}