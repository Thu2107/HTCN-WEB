// Lấy sản phẩm từ localStorage
const product = JSON.parse(localStorage.getItem('selectedPhone'));

// Kiểm tra nếu sản phẩm tồn tại trong localStorage
if (product) {
    // Thay thế ảnh sản phẩm
    document.querySelector('.product-image img').src = `./assets/img/${product.name.toLowerCase().replace(/[\s\/]/g, '')}.jpg`;
    document.querySelector('.product-image img').alt = product.name;

    // Thay thế tên sản phẩm
    document.querySelector('.product-title strong').textContent = product.name;

    // Thay thế giá sản phẩm
    document.querySelector('.product-price strong span').textContent = product.price;

    // Thay thế tùy chọn bộ nhớ
    const memorySelect = document.getElementById('Memory');
    memorySelect.innerHTML = `<option value="small">${product.storage}</option>`;

    // Thay thế tùy chọn màu sắc
    const colorSelect = document.getElementById('color');
    colorSelect.innerHTML = `<option value="color">${product.color}</option>`;

    // Thay thế mô tả chi tiết sản phẩm
    document.querySelector('#description').innerHTML = `
        <h2>MÀU SẮC </h2>
        <p>${product.os}</p>
        <h2>CHỦ ĐỀ:</h2>
        <p>${product.cpu}</p>
        <h2>CHẤT LIỆU:</h2>
        
    `;
} else {
    // Nếu không tìm thấy sản phẩm, hiển thị thông báo lỗi
    alert("Không có sản phẩm nào được chọn.");
}
