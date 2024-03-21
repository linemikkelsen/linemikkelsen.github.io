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
    var title = document.querySelector('.small-title');
    var div = document.querySelector('.upper-left');
    if (button.style.display === 'none' && window.innerWidth <= 1250) {
        button.style.display = 'block';
        title.style.display = 'block';
        div.style.display = 'flex';
    }
}

function openMenu() {
    loadContent('menu')
    var button = document.querySelector('.dropdown-menu');
    button.style.display = 'none';
    var title = document.querySelector('.small-title');
    title.style.display = 'none';
    var div = document.querySelector('.upper-left');
    div.style.display = 'none';
}

function showPopup(header, content, link) {
    var popupContainer = document.getElementById('popupContainer');
    var popUpHeader = document.getElementById('popupHeader');
    var anchorTag = document.createElement('a');
    var popUpText = document.getElementById('popupText');
    if (link) {
        anchorTag.href = link;
        anchorTag.target = "_blank";
        anchorTag.innerHTML = header;
        popUpHeader.innerHTML = anchorTag.outerHTML
    } else {
        popUpHeader.innerHTML = header;
    }
    popUpText.innerHTML = content;
    popupContainer.style.display = 'block';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}