const phones = [
    {
        "name": "Tranh Phong Thủy Cho Mệnh Kim",
        "price": "4.990.000₫",
        "color": "Trắng",
        "os": "Đồng quê",
        "cpu": "Bạc",
       
    },
    {
        "name": "Vòng tay thạch anh tóc vàng",
        "price": "3.490.000₫",
        "color": "Vàng",
        "os": "Thạch anh",
        "cpu": "Vàng 19k",
       
    },
    {
        "name": "Vòng tay",
        "price": "4.990.000₫",
        "color": "đen ",
        "os": "Đá quý",
        "cpu": "vòng tay cho người mệnh thủy",
        
    },
    {
        "name": "Vòng Ngọc",
        "price": "2.990.000₫",
        "color": "Xanh ngọc ",
        "os": "Vòng ngọc cho người mệnh thủy",
        "cpu": "Ngọc",
       
    },
    {
        "name": "Tranh phong thủy",
        "price": "1.490.000₫",
        "color": "Xanh",
        "os": "Phong cảnh",
        "cpu": "Giấy",
        
    },
    {
        "name": "Tranh phong thủy 2",
        "price": "1.990.000₫",
        "color": "Xám",
        "os": "Sơn Mài",
        "cpu": "Đồng quê",
       
    },
    {
        "name": "linh vật phong thủy 1",
        "price": "6.990.000₫",
        "color": "Xanh",
        "os": "Ngọc ",
        "cpu": "Rồng",
       
    },
    {
        "name": "Linh Vật Phong Thủy 2",
        "price": "4.890.000₫",
        "color": "Xanh ngọc",
        "os": "đá tự nhiên",
        "cpu": "Thiềm thừ",
       
    },
    {
        "name": "Tranh Rồng ",
        "price": "1.990.000₫",
        "color": "Vàng",
        "os": "Mạ vàng",
        "cpu": "Rồng",
        
    },
    {
        "name": "Vòng tay thạch anh vàng DTA 43",
        "price": "790.000₫",
        "color": "Vàng",
        "os": "Mạ Vàng",
        "cpu": "Thạch anh",
       
    },
   
    {
        "name": "Tranh Tứ Quý",
        "price": "4.490.000₫",
        "color": "Trắng, đen",
        "os": "Sơn mài",
        "cpu": "Giấy gỗ ",
       
    }
];
// Lấy 8 sản phẩm đầu tiên từ mảng phones
// Lấy 8 sản phẩm đầu tiên từ mảng phones
const products = phones.slice(0, 8);

// Lấy các phần tử cần thiết từ DOM
const carouselInner = document.querySelector('.carousel-inner.item1');

// Xóa tất cả nội dung hiện có trong slider
carouselInner.innerHTML = '';

// Chia các sản phẩm thành hai nhóm (4 sản phẩm mỗi slide) để hiển thị trong các slide khác nhau
const chunks = [];
for (let i = 0; i < products.length; i += 4) {
    chunks.push(products.slice(i, i + 4));
}

// Tạo HTML động cho từng nhóm sản phẩm
chunks.forEach((chunk, index) => {
    // Tạo một div cho carousel-item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active'); // Đặt slide đầu tiên là active
    }
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach((product, productIndex) => {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3', 'col-lg-3', 'col-xl-3', 'col-xxl-3');

        col.innerHTML = `
            <div class="card">
                <div class="card-body text-center" style="border-width: 0px !important;background: #c5c5c5;border-radius: 15px;margin-bottom: 10px;">
                    <img src="./assets/img/${product.name.toLowerCase().replace(/[\s\/]/g, '')}.jpg" style="margin-bottom: 10px;border-radius: 15px;width: 250px;height: 250px;">
                    <h4 class="card-title price-head" style="font-size: 18px; font-family: 'Times New Roman', Times, serif;min-height:65px;">
                        <strong>${product.name}</strong><br><br>
                    </h4>
                    <h1 class="price-cost" style="font-size: 18px;color: rgb(167,44,27);">
                        <strong>${product.price}</strong>
                    </h1>
                    <button class="btn btn-secondary view-detail-btn" type="button" data-index="${index * 4 + productIndex}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;
        row.appendChild(col);
    });

    // Thêm hàng vào carousel item
    carouselItem.appendChild(row);

    // Thêm carousel item vào carousel inner
    carouselInner.appendChild(carouselItem);
});
for(let i in phones){
    console.log(phones[i].name.toLowerCase().replace(/[\s\/]/g, ''))
}
// Thêm sự kiện cho tất cả các nút "Xem chi tiết"
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        const selectedProduct = phones[productIndex];

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu có)
        window.location.href = './productdetail.html';
    });
});
// Lấy 8 sản phẩm tiếp theo từ mảng phones (từ phần tử thứ 8 đến thứ 15)
const nextProducts = phones.slice(8, 16);

// Lấy phần tử carousel inner cho phần tiếp theo
const carouselInnerNext = document.querySelector('.carousel-inner.item2');

// Xóa nội dung hiện có trong slider nếu cần (nếu muốn thêm mới hoàn toàn)
carouselInnerNext.innerHTML = '';

// Chia các sản phẩm thành hai nhóm (4 sản phẩm mỗi slide) để hiển thị trong các slide khác nhau
const nextChunks = [];
for (let i = 0; i < nextProducts.length; i += 4) {
    nextChunks.push(nextProducts.slice(i, i + 4));
}

// Tạo HTML động cho từng nhóm sản phẩm
nextChunks.forEach((chunk, index) => {
    // Tạo một div cho carousel-item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active'); // Đặt slide đầu tiên là active
    }
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach((product, productIndex) => {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3', 'col-lg-3', 'col-xl-3', 'col-xxl-3');

        col.innerHTML = `
            <div class="card">
                <div class="card-body text-center" style="border-width: 0px !important;background: #c5c5c5;border-radius: 15px;margin-bottom: 10px;">
                    <img src="./assets/img/${product.name.toLowerCase().replace(/[\s\/]/g, '')}.jpg" style="margin-bottom: 10px;border-radius: 15px;width: 250px;height: 250px;">
                    <h4 class="card-title price-head" style="font-size: 18px; font-family: 'Times New Roman', Times, serif;min-height:65px;">
                        <strong>${product.name}</strong><br><br>
                    </h4>
                    <h1 class="price-cost" style="font-size: 18px;color: rgb(167,44,27);">
                        <strong>${product.price}</strong>
                    </h1>
                    <button class="btn btn-secondary view-detail-btn" type="button" data-index="${8 + index * 4 + productIndex}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;

        row.appendChild(col);
    });

    // Thêm hàng vào carousel item
    carouselItem.appendChild(row);

    // Thêm carousel item vào carousel inner
    carouselInnerNext.appendChild(carouselItem);
});

// Thêm sự kiện cho tất cả các nút "Xem chi tiết" của 8 sản phẩm tiếp theo
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        const selectedProduct = phones[productIndex];

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu có)
        window.location.href = './productdetail.html';
    });
});
// Danh muc
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