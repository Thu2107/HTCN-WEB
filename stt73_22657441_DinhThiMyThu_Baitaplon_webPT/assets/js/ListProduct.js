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
// Lấy danh mục từ `localStorage`
const selectedCategory = localStorage.getItem('selectedCategory');

// Lọc sản phẩm theo danh mục
let filteredProducts = phones.filter(product => {
    return product.name.toLowerCase().includes(selectedCategory.toLowerCase());
});
if(selectedCategory=="Tất cả sản phẩm"){
    filteredProducts = phones;
}

// Lấy phần tử chính nơi các carousels sẽ được hiển thị
const mainContainer = document.querySelector('.carousel-container'); // Đảm bảo có phần tử .carousel-container trong HTML

// Xóa nội dung hiện có trong mainContainer
mainContainer.innerHTML = '';

// Chia các sản phẩm đã lọc thành nhóm (4 sản phẩm mỗi slide)
const chunks = [];
for (let i = 0; i < filteredProducts.length; i += 4) {
    chunks.push(filteredProducts.slice(i, i + 4));
}

// Tạo một `carousel slide` cho từng nhóm sản phẩm và thêm vào `mainContainer`
chunks.forEach((chunk, index) => {
    // Tạo một div cho carousel slide
    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('carousel', 'slide', `carousel-slide-${index}`);
    carouselSlide.setAttribute('data-bs-ride', 'carousel');
    carouselSlide.style.marginBottom = '20px';

    // Tạo một div cho carousel-inner
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    // Tạo một carousel-item cho slide này
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item', 'active');
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm trong carousel-item
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach(product => {
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
                    <button class="btn btn-secondary view-detail-btn" type="button" data-name="${product.name}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;

        row.appendChild(col);
    });

    // Thêm hàng vào carousel-item
    carouselItem.appendChild(row);

    // Thêm carousel-item vào carousel-inner
    carouselInner.appendChild(carouselItem);

    // Thêm carousel-inner vào carousel slide
    carouselSlide.appendChild(carouselInner);

    // Thêm carousel slide vào mainContainer
    mainContainer.appendChild(carouselSlide);
});

// Thêm sự kiện cho các nút "Xem chi tiết" để lưu thông tin sản phẩm vào localStorage khi nhấn vào
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Lấy tên sản phẩm từ thuộc tính data-name
        const productName = this.getAttribute('data-name');
        
        // Tìm sản phẩm trong mảng `phones`
        const selectedProduct = phones.find(product => product.name === productName);

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu cần)
        window.location.href = './productdetail.html';
    });
});