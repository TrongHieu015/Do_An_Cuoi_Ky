window.onload = function() {
    filterPosts('news');
}

function filterPosts(filter) {
    var postBoxes = document.getElementsByClassName('post-box');
    for (var i = 0; i < postBoxes.length; i++) {
        if (postBoxes[i].classList.contains(filter)) {
            postBoxes[i].style.display = 'block';
        } else {
            postBoxes[i].style.display = 'none';
        }
    }
}

var filterItems = document.getElementsByClassName('filter-item');
for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active-filter');
        current[0].className = current[0].className.replace(' active-filter', '');
        this.className += ' active-filter';
        filterPosts(this.getAttribute('data-filter'));
    });
}
