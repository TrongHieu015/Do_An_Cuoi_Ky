window.onload = function() {
  // Truy suất tên chuyến tham quan và tổng giá từ localStorage
  var nametours = localStorage.getItem('nametours');
  var totalPrice = localStorage.getItem('totalPrice');
  
  // Tạo phần tử h3 để hiển thị tên tour và tổng giá
  var nametoursElement = document.createElement('h3');
  var totalPriceElement = document.createElement('h3');
  
  nametoursElement.textContent = 'Tour: ' + nametours;
  totalPriceElement.textContent = 'Tổng tiền: ' + totalPrice;
  
  // Thêm phần tử h3 vào phần tử hóa đơn
  var billElement = document.getElementById('bill');
  billElement.style.display = 'flex';
  billElement.style.justifyContent = 'space-between';
  
  billElement.appendChild(nametoursElement);
  billElement.appendChild(totalPriceElement);

  // Thêm và xóa lớp 'card-active' khi người dùng nhấn vào các hình chữ nhật
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
      card.addEventListener('click', function() {
          cards.forEach(function(c) {
              c.classList.remove('card-active');
          });
          card.classList.add('card-active');
      });
  });
};


