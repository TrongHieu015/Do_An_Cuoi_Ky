window.onload = function() {
  filtertours('Mien_Nam');
  document.querySelector('.filter-item[data-filter="Mien_Nam"]').classList.add('active');
}

function filtertours(category) {
  var tours = document.getElementsByClassName('tours-box');
  for (var i = 0; i < tours.length; i++) {
    if (tours[i].classList.contains(category)) {
      tours[i].style.display = 'block';
    } else {
      tours[i].style.display = 'none';
    }
  }
}

var filters = document.getElementsByClassName('filter-item');
for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
    filtertours(this.getAttribute('data-filter'));
  });
}

//////////////////
function showAlert() {
    alert("Bạn đã đăng ký thành công");
}
