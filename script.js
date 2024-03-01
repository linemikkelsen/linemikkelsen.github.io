document.addEventListener('DOMContentLoaded', function() {
    loadContent('about'); // Load the content of the About page when the page finishes loading
});

function loadContent(page) {
    // Fetch content based on the clicked subpage
    fetch('pages/' + page + '.html') // Assuming you have separate HTML files for each subpage
        .then(response => response.text())
        .then(html => {
            document.getElementById('current').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}