// Lấy tất cả các mục trong dropdown menu
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Thêm sự kiện click cho từng mục
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        // Lấy tên danh mục từ nội dung của item
        let category = this.textContent.trim();
        if(category=="Apple"){
            category ="Iphone";
        }
        console.log(category)
        // Lưu danh mục vào localStorage
        localStorage.setItem('selectedCategory', category);

        // Chuyển hướng đến trang sản phẩm (nếu cần)
        if (this.getAttribute('href') === './product_list.html') {
            window.location.href = './product_list.html';
        }
    });
});
const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('.btn.btn-primary');

// Thêm sự kiện click vào nút tìm kiếm
searchButton.addEventListener('click', function() {
    // Lấy giá trị người dùng nhập vào ô tìm kiếm
    const searchQuery = searchInput.value.trim();

    // Kiểm tra nếu người dùng đã nhập từ khóa
    if (searchQuery) {
        // Lưu từ khóa vào localStorage dưới dạng selectedCategory
        localStorage.setItem('selectedCategory', searchQuery);

        // Điều hướng đến trang danh sách sản phẩm (hoặc bạn có thể thực hiện hành động lọc ngay trên trang hiện tại nếu muốn)
        window.location.href = './product_list.html';
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.');
    }
});