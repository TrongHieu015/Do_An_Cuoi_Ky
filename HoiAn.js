
///Thuật toán tính tổng bill
initAcc(".accordion", true);

function calculateTotal() {
   const pricePerDay = 900.000;
   const checkinDate = new Date(document.getElementById('checkin-input').value);
   const checkoutDate = new Date(document.getElementById('checkout-input').value);
   const guestsNumber = parseInt(document.getElementById('guests-input').value);
   const timeDiff = checkoutDate - checkinDate;
   const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
   
   if (daysDiff > 0 && guestsNumber > 0) {
     const totalPrice = pricePerDay * daysDiff*guestsNumber;
     const discount = pricePerDay * 0.1*guestsNumber*daysDiff;
     const finalPrice = totalPrice - discount;
     
     document.getElementById('total-days').textContent = daysDiff + ' Ngày';
     document.getElementById('discount').textContent =  discount.toFixed(3) + ' VNĐ';
     document.getElementById('total-price').textContent =  finalPrice.toFixed(3) + ' VNĐ';
   }
 }
 
 function toggleInput(inputId) {
   var input = document.getElementById(inputId);
   if (input.classList.contains('hidden')) {
     input.classList.remove('hidden');
   } else {
     input.classList.add('hidden');
   }
 }
 
 function updateInput(inputElement) {
   calculateTotal();
   inputElement.classList.add('hidden');
 }
 

function bookNow() {
  // Lấy tổng tiền từ element trên trang
  var totalPrice = document.getElementById('total-price').textContent;
  var nametours = document.getElementById('nametours').textContent;
  
  // Lưu tổng tiền vào localStorage
  localStorage.setItem('totalPrice', totalPrice);
  localStorage.setItem('nametours', nametours);
  
  alert("Bạn đã đặt vé thành công. Tổng tiền đã được lưu.");
}