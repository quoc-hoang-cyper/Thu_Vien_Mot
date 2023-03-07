//hien ten kh va dang xuat//

var dangxuat = document.getElementById('dangxuat');
var tenkh = document.getElementById('xinchao');
var data = JSON.parse(localStorage.getItem('user'));
if (data != null) {
    tenkh.innerHTML = "Xin chào:  " + data.name;
    dangxuat.innerHTML = "Đăng Xuất";
}
function logout() {
    localStorage.removeItem("user");
    location.replace("./index.html");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var listProduct = [
    {
        id: 1,
        tentacgia: "Tác Giả : Stephen Hawking",
        img: "./hinh/vu tru trong vo hat de.jpg",
        name: "Vũ trụ trong vỏ hạt dẻ",
        price: "75.500 ₫",
        p: "MÔ TẢ SẢN PHẨM : Lòng khát khao khám phá luôn là động lực cho trí sáng tạo của con người trong mọi lĩnh vực không chỉ trong khoa học. Điều đó được kiểm chứng trong quyển Vũ trụ trong vỏ hạt dẻ"
    },
    {
        id: 2,
        tentacgia: "Tác Giả :  Trần Trọng Kim",
        img: "./hinh/viet nam su luoc.jpg",
        name: "Việt nam sử lược",
        price: "312.000 ₫",
        p: "MÔ TẢ SẢN PHẨM :Đầu thế kỷ XX, giữa lúc nền học thuật nước nhà chỉ có các bộ đại tác như Đại Việt sử ký toàn thư hay Khâm định Việt sử thông giám cương mục là nguồn sử liệu chính thống nhưng chưa đáp ứng nhu cầu tìm hiểu lịch sử của phần đông dân chúng, thì Việt Nam sử lược, với tư cách là bộ thông sử chi tiết đầu tiên được viết bằng chữ quốc ngữ, đã xuất hiện và nhanh chóng thu hút sự quan tâm của độc giả lẫn giới nghiên cứu cả nước. Từ đó đến nay đã 100 năm trôi qua, tác phẩm vẫn giữ nguyên giá trị và là quyển sách vỡ lòng quen thuộc cho những ai bắt đầu tìm hiểu lịch sử Việt Nam.Để góp phần hoàn thiện và phổ biến “tấm Nam sử” mà học giả Trần Trọng Kim đã dệt những sợi đầu tiên cách nay đúng một thế kỷ, Đông A tiến hành tái bản tác phẩm Việt Nam sử lược, dựa theo bản in của nhà Tân Việt năm 1954, có bổ sung một số chi tiết từ các bản in năm 1920, 1928 và 1971. Đồng thời, chúng tôi tuyển lựa và thêm vào một số hình ảnh minh họa từ nguồn tranh dân gian, bảo tàng và một số tư liệu sách báo xưa, với mong muốn gửi tới bạn đọc một ấn bản không chỉ chỉn chu về mặt nội dung mà còn trang nhã về mặt hình thức, nhân kỷ niệm 100 năm ngày tác phẩm ra đời 1920 - 2020"
    },
    {
        id: 3,
        tentacgia: " Tác Giả : Gary Keller",
        img: "./hinh/trieu phu moi gioi bat dong san.jpg",
        name: "Triệu phú môi giới bất động sản",
        price: "210.000 ₫",
        p: "MÔ TẢ SẢN PHẨM : Nghề bất động sản – lựa chọn hoàn hảo cho bất kỳ người nào có máu kinh doanh và nhiều tham vọng.Với chi phí khởi nghiệp tương đối thấp và không có mức trần cứng nhắc giới hạn thu nhập, nghề bất động sản dường như là lựa chọn hoàn hảo cho bất kỳ người nào có máu kinh doanh và nhiều tham vọng.Trong ngành này, bạn tự định ra hạn mức cho mình.Cách tiếp cận, khả năng và niềm đam mê môi giới bất động sản sẽ là những nhân tố quyết định lớn nhất cho thành công của bạn."
    },
    {
        id: 4,
        tentacgia: "Tác Giả :  Carlo Rovelli",
        img: "./hinh/trat tu thoi gian.jpg",
        name: "Trật tự thời gian",
        price: "65.300 ₫",
        p: "MÔ TẢ SẢN PHẨM: Bất chấp sự quen thuộc và vĩnh hằng, thời gian vẫn là một ẩn số không ngừng đánh đố chúng ta. Các triết gia, nghệ sĩ và nhà thơ từ lâu đã khám phá ý nghĩa của nó, trong khi các nhà khoa học nhận thấy rằng cấu trúc của thời gian khác với trực giác đơn giản mà chúng ta có. Từ Boltzmann đến lý thuyết lượng tử, từ Einstein đến hấp dẫn lượng tử vòng, sự hiểu biết của chúng ta về thời gian đã trải qua những biến đổi căn bản. Và với Trật tự thời gian: Từ nguồn gốc vũ trụ, số phận các hố đen đến bản chất của ý thức, Carlo Rovelli đưa chúng ta vào câu chuyện đầy mê hoặc khám phá bản chất và ý nghĩa của thời gian."
    },
    {
        id: 5,
        tentacgia: " Tác Giả : Kim Huggens",
        img: "./hinh/tarot nhap mon.jpg",
        name: "Tarot nhập môn",
        price: "106.000 ₫",
        p: "MÔ TẢ SẢN PHẨM : Tarot – bộ môn vừa mang màu sắc chiêm đoán vừa mang tính nghệ thuật. Mỗi lá bài đem đến cho bạn những thông điệp được ẩn giấu từ quá khứ, hiện tại hoặc tương lai. Từng lá bài giống như một “bảo tàng nghệ thuật” thu nhỏ – từng bức tranh được gửi gắm trong đó đều chứa những thông điệp về nhân sinh quan."
    },
    {
        id: 6,
        tentacgia: "Tác Giả :  Ian Morris",
        img: "./hinh/tai sao phuong tay vuot troi.jpg",
        name: "Tại sao phương tây vượt trội",
        price: "304.000 ₫",
        p: "MÔ TẢ SẢN PHẨM : Tại Sao Phương Tây Vượt Trội,bằng nghiên cứu sâu sắc và lập luận một cách xuất sắc, cuốn sách kéo dài năm mươi nghìn năm lịch sử và cung cấp những hiểu biết mới trên gần như mọi trang sách. Cuốn sách tập hợp những phát hiện mới nhất trong các lĩnh vực từ lịch sử cổ đại đến khoa học thần kinh không chỉ giải thích tại sao phương Tây dẫn đầu thế giới mà còn dự đoán tương lai sẽ mang lại điều gì trong một trăm năm tới"
    },
    {
        id: 7,
        tentacgia: " Tác Giả : Rosalee de la Forêt",
        img: "./hinh/nang luong song tu thao duoc.jpg",
        name: "Năng lượng sống từ thảo dược",
        price: "187.900 ₫",
        p: "MÔ TẢ SẢN PHẨM : Các bạn có biết ngay trong căn bếp nhà mình có cả một rương thuốc thảo dược rất tốt chăng?. Năng lượng sống từ thảo dược sẽ chỉ cho bạn cách làm thế nào để chuyển hóa các loại nguyên liệu thông thường thành thức ăn và dược liệu chữa bệnh. Qua hướng dẫn của dược sư Rosalee de la Forêt, bạn sẽ hiểu được cách làm thế nào để khớp các đặc tính của từng loại cây với nhu cầu của chính cơ thể mình, để có một cách tiếp cận cụ thể dành cho sức khỏe của cá nhân bạn và gia đình."
    },
    {
        id: 8,
        tentacgia: "Tác Giả :  Bill Bryson",
        img: "./hinh/luoc su van vat.jpg",
        name: "Lược sử vạn vật",
        price: "141.900 ₫",
        p: "MÔ TẢ SẢN PHẨM: Với cuốn sách này, người đọc sẽ biết được những giới hạn trong tri thức của con người về vũ trụ và cả về chính trái đất. Đây là cuốn sách khoa học phổ thông bán chạy nhất nước Anh năm 2005 với hơn 300.000 bản in. Nhà phê bình người Anh, Craig Brown thậm chí đã nhận xét rằng tác phẩm này xứng đáng bán được 500.000.000.000 cuốn (theo cách nói của chính Bryson, 'bằng với số proton có trong một dấu chấm câu'."
    },
    {
        id: 9,
        tentacgia: "Tác Giả : Bùi Việt Hà",
        img: "./hinh/20 bt lap trinh scrach.jpg",
        name: "20 bài tập lập trình Scratch  ",
        price: "55.000 ₫",
        p: "MÔ TẢ SẢN PHẨM:Các ngôn ngữ lập trình trực quan kéo thả nói chung và Scratch nói riêng đang lan tỏa mạnh mẽ vào mọi ngóc ngách xã hội, trong các nhà trường và gia đình. Có lẽ chưa bao giờ phong trào học lập trình dành cho các bạn nhỏ (từ 6 đến 14 tuổi) lại bùng nổ như hiện nay ở Việt Nam cũng như trên thế giới. Theo đánh giá của nhiều chuyên gia, sự ra đời các ngôn ngữ lập trình trực quan dành cho thiếu nhi là một cuộc cách mạng giáo dục lớn."
    },
    {
        id: 10,
        tentacgia: " Tác Giả : Tôn Tử",
        img: "./hinh/ton tu binh phap.jpg",
        name: "Tôn tử binh pháp",
        price: "49.900 ₫",
        p: "MÔ TẢ SẢN PHẨM: Được xưng tụng là tuyệt tác binh thư hàng đầu của thế giới cổ đại, binh thư kinh điển vĩ đại nhất trong lịch sử nhân loại, Tôn Tử Binh Pháp là một cuốn cổ thư “kỳ quái”, “để trong vườn sẽ tỏa mùi thơm của hoa quý, ném xuống đất sẽ vang tiếng kêu của bạc vàng”.Nó không chỉ được các vua chúa từ đông sang tây xem như sách gối đầu giường, bí kíp quân sự không thể thiếu, mà còn được nhiều chuyên gia trong các lĩnh vực như triết học, kinh doanh, tâm lý học, ngôn ngữ học, thể dục thể thao,… ứng dụng để nghiên cứu và đạt được nhiều thành tựu đáng kể."
    },
    {
        id: 11,
        tentacgia: "Tác Giả :  Ashley Davis Bush",
        img: "./hinh/toi ko thik on ao.jpg",
        name: "Tôi không thích ồn ào",
        price: "39.600 ₫",
        p: "MÔ TẢ SẢN PHẨM: NHỮNG THỨ GIÁ TRỊ THÌ KHÔNG ỒN ÀO" +
            "Đại bàng một mình bay lượn trên những tầng mây, lũ gà thì kêu quang quác dưới mặt đất." +
            "Những tờ tiền giấy nhẹ bẫng nhưng mua được nhiều thứ hơn đống tiền xu leng keng." +
            "Những người giản dị và khiêm tốn tạo ra nhiều giá trị xã hội hơn những kẻ ba hoa."
    },
    {
        id: 12,
        tentacgia: "Tác Giả :  Yuval Noah Harari",
        img: "./hinh/hôm deus  luoc su tuong lai.jpg",
        name: "Lược sử tương lai",
        price: "134.900 ₫",
        p: "MÔ TẢ SẢN PHẨM: Homo Deus: Lược Sử Tương Lai.Homo sapiens có phải là một dạng sống siêu đẳng, hay chỉ là một tay đầu gấu địa phương? Làm thế nào con người lại tin rằng họ không chỉ đã kiểm soát thế giới, mà còn mang lại ý nghĩa cho nó? Công nghệ sinh học và trí thông minh nhân tạo đe doạ loài người ra sao? Sinh vật nào có thể kế thừa loài người, và tôn giáo mới nào sẽ được sản sinh?"
    },
    {
        id: 13,
        tentacgia: "Tác Giả : Nhiều Tác Gỉa",
        img: "./hinh/cac trieu dai viet nam.jpg",
        name: "Các triều đại Việt Nam",
        price: "56.900 ₫",
        p: "MÔ TẢ SẢN PHẨM: Các triều đại Việt Nam - cuốn sách có giá trị không chỉ về tri thức mà còn bồi đắp thêm niềm tin về khí phách, tài trí và lòng yêu nước của người Việt Nam.Cuốn sách có dung lượng vừa phải nhưng cung cấp nhiều thông tin cơ bản, bao quát toàn bộ tiến trình phát triển lịch sử dân tộc. Các công tích, hành trạng của những vị vua từ thời Hùng Vương dựng nước đến khi vương triều Nguyễn kết thúc vai trò lịch sử đều được nhóm tác giả chọn lọc, giới thiệu một cách chính xác, cẩn thận "
    },
    {
        id: 14,
        tentacgia: " Tác Giả : Richard Feynman",
        img: "./hinh/feynman chuyen that nhu dua.jpg",
        name: "Feynman chuyện thât như đùa",
        price: "133.800 ₫",
        p: "MÔ TẢ SẢN PHẨM: Richard Feynman (1918-1988), người đoạt giải Nobel về Vật lý, đã kể về những cuộc phiêu lưu kỳ quặc. Bằng một giọng quá tài tình ông tường thuật lại trong cuốn sách những trải nghiệm của mình khi trao đổi các ý tưởng về Vật lý nguyên tử với Einstein và Bohr cũng như các mưu mẹo về cờ bạc với Nick the Greek "
    },
    {
        id: 15,
        tentacgia: " Tác Giả : Cao Huy Giu - Đào Duy Anh",
        img: "./hinh/dai viet su ki toan thu.jpg",
        name: "Đại Việt sử ký toàn thư",
        price: "192.500 ₫",
        p: "MÔ TẢ SẢN PHẨM: Trong các sách lịch sử cũ của ta ,thì Đại Việt sử ký toàn thư là một bộ sử lớn chép từ Hồng Bàng đến Ất Mão đời vua Gia Tôn nhà Lê.Đại Việt sử ký toàn thư là bộ sách lịch sử quý báu trong tủ sách sử cũ của nước Việt Nam , rất cần thiết cho những người nghiên cứu lịch sử dân tộc"
    },
    {
        id: 16,
        tentacgia: " Tác Giả :  Édith Piaf",
        img: "./hinh/con song la con yeu.jpg",
        name: "Còn sống là còn yêu",
        price: "61.900 ₫",
        p: "MÔ TẢ SẢN PHẨM: Édith Piaf – Còn Sống Là Còn Yêu hoàn toàn không phải một cuốn sách tiểu sử đơn thuần, mà đó là những trang viết chân thật nhất về một huyền thoại nổi danh với nghị lực sống mạnh mẽ, đủ để truyền cảm hứng cho nhiều thế hệ về cách chúng ta sống, cách chúng ta yêu và cách chúng ta theo đuổi đam mê. "
    },
    {
        id: 17,
        tentacgia: "Hecto Malot",
        img: "./hinhreview/khong gia dinh.jpg",
        name: "KHÔNG GIA ĐÌNH",
        price: "00.00đ",
        p: "Gia đình chính là nơi mà mỗi chúng ta được sinh ra và lớn lên...."
    },
    {
        id: 18,
        tentacgia: "Ellis Bell",
        img: "./hinhreview/doi gio hu.jpg",
        name: "ĐỒI GIÓ HÚ",
        price: "00.00đ",
        p: "Xuyên suốt chiều dài của cuốn tiểu thuyết chính là sự ám ảnh, ám ảnh bắt đầu từ sự bạc đãi đối xử dã man.."
    },
    {
        id: 19,
        tentacgia: "Jeffrey Eugenides",
        img: "./hinhreview/Lưỡng Giới - Jeffrey Eugenides..jpg",
        name: "Lưỡng Giới",
        price: "00.00đ",
        p: "Nếu khoái cảm tình yêu mà có thang điểm 10, thì phụ nữ được ba. Phần còn lại là của đàn ông..."
    },
    {
        id: 20,
        tentacgia: "Andre Aciman",
        img: "./hinhreview/Gọi Em Bằng Tên Anh.jpg",
        name: "Gọi Em Bằng Tên Anh",
        price: "00.00đ",
        p: "Có lẽ trong âm nhạc, cái thứ âm thanh khiến người ta nhớ mãi mà day dứt không quên là những thanh âm cuối cùng..."
    },
    {
        id: 21,
        tentacgia: "Higashino Keigo",
        img: "./hinhreview/Điều Kỳ Diệu Của Tiệm Tạp Hoá Namiya.jpg",
        name: "Điều Kỳ Diệu Của Tiệm Tạp Hoá Namiya",
        price: "00.00đ",
        p: "Tiệm Tạp Hoá Namiya cho Mọt 1 cảm giác huyền bí vì những tâm tình, những lá thư vượt thời gian,..."
    },
    {
        id: 22,
        tentacgia: "Susie Hodge",
        img: "./hinhreview/Câu Chuyện Nghệ Thuật.jpg",
        name: "Câu Chuyện Nghệ Thuật",
        price: "00.00đ",
        p: "Không có thứ gọi là Nghệ Thuật. Chỉ tồn tại các Nghệ Sĩ."
    },
    {
        id: 23,
        tentacgia: "Paul Theroux",
        img: "./hinhreview/Phương Đông Lướt Ngoài Cửa Sổ.jpg",
        name: "Phương Đông Lướt Ngoài Cửa Sổ",
        price: "00.00đ",
        p: "Phương Đông Lướt Ngoài Cửa Sổ là một tác phẩm du ký dành cho những kẻ 'tham đi'..."
    },
    {
        id: 24,
        tentacgia: "Alexandre Dumas",
        img: "./hinhreview/Hoàng Hậu Margot.jpg",
        name: "Hoàng Hậu Margot",
        price: "00.00đ",
        p: "Hoàng Hậu Margot là những câu chuyện xoay quanh quyền thế, vưồng quyền ở Pháp vào thế kỷ XVI với những mưu mô, lừa lọc, thật giả trộn lẫn..."
    },
    {
        id: 25,
        tentacgia: "MARK KURLANSKY",
        img: "./hinhreview/Khi Loài Cá Biến Mất.jpg",
        name: "Khi Loài Cá Biến Mất",
        price: "00.00đ",
        p: "Khi loài cá biến mất, các loài khác cũng dần biến mất bởi sự tồn tại của chúng phụ thuộc vào việc cộng sinh với các loài khác nhau..."
    },
    {
        id: 26,
        tentacgia: "Eugen Ruge",
        img: "./hinhreview/Thời Nắng Lịm - Eugen Ruge.jpg",
        name: "Thời Nắng Lịm",
        price: "0.00đ",
        p: "Dù mở đầu khá buồn bã và uể oải, nhưng cuốn sách dễ dàng hấp dẫn Mọt bởi những sự kiện xảy ra trong diễn biến hưng thịnh suy vong của một gia đình..."
    },
    {
        id: 27,
        tentacgia: "Ayn Rand",
        img: "./hinhreview/Suối Nguồn - Ayn Rand.jpg",
        name: "Suối Nguồn",
        price: "0.00đ",
        p: "Có một câu nói trong sách Mọt luôn suy tư mãi:'Anh chỉ là một bộ phận nhỏ của một xã hội rộng lớn'..."
    },
    {
        id: 28,
        tentacgia: "Patricia Highsmith",
        img: "./hinhreview/TIẾNG CÚ KÊU - Patricia Highsmith.jpg",
        name: "TIẾNG CÚ KÊU",
        price: "0.00đ",
        p: "Một sự trống rỗng... Đó là điều duy nhất Mọt có thể nói đến sau khi đọc xong quyển sách này."
    },
    {
        id: 29,
        tentacgia: "Tablo",
        img: "./hinhreview/NHỮNG MẢNH GHÉP CUỘC ĐỜI - Tablo.jpg",
        name: "NHỮNG MẢNH GHÉP CUỘC ĐỜI",
        price: "0.00đ",
        p: "Nếu cuộc đời là con đường cao tốc thì sẽ chẳng có đèn đỏ, nhưng biết đâu trong cuộc sống có những chiếc đèn đỏ lại là điều tốt"
    },
    {
        id: 30,
        tentacgia: "Linh Lê",
        img: "./hinhreview/Đào - Linh Lê.jpg",
        name: "Đào",
        price: "0.00đ",
        p: "Đào - cái tình trong từng câu chữ, cái thơ mang theo chua xót, đau thương, tủi hờn... "
    },
    {
        id: 31,
        tentacgia: "RAY BRADBURY",
        img: "./hinhreview/451 Độ F - RAY BRADBURY.jpg",
        name: "451 Độ F",
        price: "0.00đ",
        p: "415 độ F là tiểu thuyết giả tưởng Mỹ kể về xã hội tương lai theo kiểu 'Phản Địa Đàng'(dystopia).."
    },
    {
        id: 32,
        tentacgia: "Guillaume Musso",
        img: "./hinhreview/CENTRAL PARK - Guillaume Musso.jpg",
        name: "CENTRAL PARK",
        price: "0.00đ",
        p: "Nay Mọt lại kể cho cậu nghe về một quyển sách Mọt đọc trên chuyến đi của mình đầu năm nay..."
    }
]


function loadProduct() {
    var product = document.getElementById("product");
    listProduct.forEach(item => {
        var img = document.createElement("img");
        var src = document.createAttribute("src");
        var height = document.createAttribute("height");
        var h2 = document.createElement("h2");
        var gia = document.createElement("h2");

        src.value = item.img;
        height.value = 200;
        h2.innerHTML = item.name;
        gia.innerHTML = item.price


        img.setAttributeNode(height);
        img.setAttributeNode(src);


        product.appendChild(img)
        product.appendChild(h2)
        product.appendChild(gia)
    })
}


localStorage.setItem("product", JSON.stringify(listProduct));
localStorage.setItem("cart", JSON.stringify([]));


function themgiohang(id) {
    var listCart = JSON.parse(localStorage.getItem("cart"));
    listCart.push(id);
    localStorage.setItem("cart", JSON.stringify(listCart));
}

// loadProduct() sachban;
function addGiohang(id) {
    listProduct.forEach(item => {
        if (id === item.id) {
            localStorage.setItem("chitietSP", JSON.stringify(item));
        }
    })

    location.replace("../projectcuoi/productchitiet/chitietSP.html");
}
function createItem(id, scrImg, title, price) {
    var divCol4 = document.createElement("div");
    var classCol4 = document.createAttribute("class");
    classCol4.value = "col-4";
    divCol4.setAttributeNode(classCol4);

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = scrImg;
    img.setAttributeNode(src);
    divCol4.appendChild(img);

    var h4 = document.createElement("h4");
    h4.innerHTML = title;
    divCol4.appendChild(h4);

    var p = document.createElement("P");
    p.innerHTML = price;
    divCol4.appendChild(p);

    var btn = document.createElement("button");
    btn.innerHTML = "Xem Chi Tiết";
    var typebtn = document.createAttribute("type");
    var onclick = document.createAttribute("onclick");
    var myClass = document.createAttribute("class");
    myClass.value = "myButton";
    typebtn.value = "button";
    onclick.value = `addGiohang(${id})`;
    btn.setAttributeNode(myClass);
    btn.setAttributeNode(typebtn);
    btn.setAttributeNode(onclick);
    divCol4.appendChild(btn);

    var btncart = document.createElement("button");
    btncart.innerHTML = "Add Cart";
    var typebtncart = document.createAttribute("type");
    var onclickcart = document.createAttribute("onclick");
    var myClass1 = document.createAttribute("class");
    myClass1.value = "myButton1";
    typebtncart.value = "button";
    onclickcart.value = `themgiohang(${id})`;
    btncart.setAttributeNode(myClass1);
    btncart.setAttributeNode(typebtncart);
    btncart.setAttributeNode(onclickcart);
    divCol4.appendChild(btncart);

    return divCol4;
}

function createRow() {
    var product = document.getElementById("product");

    var divRow = document.createElement("div");
    var classRow = document.createAttribute("class");
    for (var i = 0; i < listProduct.length; i++) {
        if (i % 4 == 0) {
            divRow = document.createElement("div");
            classRow = document.createAttribute("class");
            classRow.value = "row";
            divRow.setAttributeNode(classRow);
            product.appendChild(divRow);
        }
        divRow.appendChild(createItem(listProduct[i].id, listProduct[i].img, listProduct[i].name, listProduct[i].price));
    }
}

createRow();

//sach review
var sachreview = [
    {
        di: 1,
        anh: "",
        ten: " – .",
        info: "",
        nd: "<br/>⭐ Gia đình chính là nơi mà mỗi chúng ta được sinh ra và lớn lên; nơi mà chúng ta có thể cảm nhận được tình yêu thương của cha, cảm nhận được hơi ấm của bàn tay mẹ; nơi tốt nhất để ta tìm về với bình yên, để ta nghỉ ngơi sau khi vấp ngã. Cũng chính ở nơi này chúng ta có thể nhận được tình yêu thương mà không điều kiện. Thế nhưng, không phải ai cũng may mắn có được một gia đình tròn vẹn, ấm áp..." +
            "<br/>⭐ Hôm nay, Kuzl sẽ review cho các bạn một trong những cuốn sách kinh điển của một tiểu thuyết gia nổi tiếng thế kỉ 19 với hàng loạt cuốn tác phẩm đặc sắc được biết bao thế hệ độc giả yêu thích đó chính là Không gia đình của nhà văn Hector Malot." +
            "<br/>⭐ Khi đọc tác phẩm, chúng ta như được hòa mình vào hành trình mưu sinh của cậu bé Remi với nhiều tình cảnh trớ trêu mà một cậu bé còn quá nhỏ đã phải gánh chịu. Trong cuộc hành trinh mưu sinh ấy đã có những lúc tưởng chừng như cái chết đang cận kề, thế nhưng Remi vẫn không hề tỏ ra bi quan hay tiêu cực, thay vào đó cậu đã luôn học hỏi và trau dồi thêm những kinh nghiệm sống quý giá. Và để tạo ra được một Remi bản lĩnh và đầy nghị lực như thế. Chúng ta cũng không thể không kể đến công ơn dạy bảo to lớn của ông Vitalis - người đã ra sức chỉ bảo và truyền đạt cho cậu những phẩm chất tốt đẹp từ chính bản thân ông. Trước hết khi đi cùng cụ Vitalis, Remi học được bài học đầu tiên là phải phải lao động mới có được miếng ăn, nhưng cũng đừng vì miếng ăn mà bất chấp thủ đoạn, làm trái với đạo đức. Và rồi sau khi ông cụ qua đời Remi phải sống tự lập, cậu dần trưởng thành hơn, chú bé Remi bé bỏng dần khôn ngoan hơn, phải suy nghĩ nhiều hơn, làm thế nào để kiếm sống, nơi nào chào đón những nghệ sĩ đường phố, phải xoay sở ra sao nếu không kiếm đủ tiền. Và trên hết là lòng quả cảm, khao khát tự do làm chủ cuộc sống của mình chứ không dựa dẫm vào ai khác."
    },
    {
        di: 2,
        anh: "./hinhreview/doi gio hu.jpg",
        ten: "ĐỒI GIÓ HÚ – Ellis Bell",
        info: " Xuyên suốt chiều dài của cuốn tiểu thuyết chính là sự ám ảnh, ám ảnh bắt đầu từ sự bạc đãi đối xử dã man...",
        nd: "<br/>⭐ Xin chào, Mọt đây! Đồi Gió Hú là quyển sách Mọt may mắn rủ rê được cậu em @_peanut1998_ đồng hành cùng. Thế rồi Mọt cũng chọn nó là bài mở đầu cho cô em Kuzl của mình. Với một giọng văn mới, một góc nhìn mới, một người bạn mới mong là vẫn được mọi người chào đón và yêu thương. Ở Thư Viện Mọt sẽ không chỉ có cô Mọt đa sầu đa cảm nữa, sự thay đổi này có thể cho mọi người thêm nhiều lựa chọn về review ở mỗi một bạn. Xin cảm ơn vì đã ở nơi này và đồng hành cùng Mọt suốt thời gian qua và cũng mong là những người bạn mới bé nhỏ cũng được mọi người yêu quý như yêu thương Mọt hơn một năm qua vậy." +
            "<br/>⭐ Ai đó đã từng nói : Tình yêu chính là cỗ máy hao tốn nhiều thời gian của nhân loại . Lịch sử của sự tiến hóa con người đã nhiều lần chứng minh được rằng chúng ta  bị chi phối nhiều hơn bởi cảm xúc của con tim hơn là bởi những lý trí lạnh lùng. Và tình yêu trong cuốn tiểu thuyết Đồi gió hú của Emily Bronte cũng là một tình yêu nguyên bản như vậy nhưng là ở một phiên bản trần trụi hơn, dữ dội hơn, ám ảnh và cũng đầy sự bi kịch của chính nó, tình yêu giữa hai con người Heathcliff và Catherine." +
            "<br/>⭐ Xuyên suốt chiều dài của cuốn tiểu thuyết chính là sự ám ảnh, ám ảnh bắt đầu từ sự bạc đãi đối xử dã man của người anh trai của Catherine – Hindley đối với Heathcliff. Vì Heathcliff đã giành hết sự yêu thương của người cha quá cố lúc ông còn sống, và bởi anh là trẻ mồ côi không xứng đáng chung vị trí với họ…. Ám ảnh vì mối tình mối tình giữa Heathclif, đứa con nuôi địa vị thấp kém của nhà Earnshaw và quý cô tiểu thư Catherine Earnshaw xinh đẹp. Cả đời Heathclif chỉ yêu một mình Catherine, và chính tình yêu đã khiến hắn trở nên điên loạn. Chỉ đến khi chết, Heathclif mới thực sự tìm được bình yên trong tâm hồn mình, khi mộ phần của hắn được chôn cạnh Catherine như ý nguyện từ rất lâu. Ám ảnh vì những cơn gió cứ hoang vu trải dài mênh mang..."
    },
    {
        di: 3,
        anh: "",
        ten: "Lưỡng Giới - Jeffrey Eugenides.",
        info: "",
        nd: "<br/>⭐ 'Nếu khoái cảm tình yêu mà có thang điểm 10, thì phụ nữ được ba. Phần còn lại là của đàn ông' . Lưỡng giới thời điểm đó vẫn được tung gọi như một bản trường ca về một con người, một chiếc Gen đột biến khác lạ đã phiêu lưu từ bán đảo Tiểu Á của Thổ Nhĩ Kỳ sang vùng Trung Âu nước Mỹ, đến tận Berlin trong câu chuyện về một gia đình bốn thế hệ người Mỹ gốc Hy Lạp." +
            "<br/>⭐ Tôi sinh ra hai lần: lần đầu, là bé gái, vào một ngày không sương khói khác thường ở Detroit tháng Giêng năm 1960. Rồi lần nữa, là thằng nhóc thiếu niên, ở phòng cấp cứu gần thành phố Petoskey, tiểu bang Michigan, tháng Tám năm 1974" +
            "<br/>⭐ Tất cả những con người đang sống này, những đứa con trai và con gái của Chúa muốn bạn biết rằng: Dù này dù nọ, họ - ừ chính họ vẫn là con người. Một phần giống các bạn" +
            "<br/>⭐ Cuộc sống này chính là chẳng có điều gì phân định rõ ràng. Chúng ta là những bản thể hoàn hảo nhất và cuộc đời này Đúng hay Sai là do chính mình lựa chọn. Giới tính, cái thứ mà trước đây con người ta đề ra để gói gọn một cơ thể con người dựa trên bộ phận sinh dục. Nhưng mà ngay cả thứ gọi là giới tính ấy chúng ta ngỡ phân định rõ ràng đâu là Nam, đâu là Nữ cũng có lúc tồn tại cả hai trên một cơ thể. Người ta gọi nôm na là Lưỡng Giới. Chẳng phải Lưỡng Giới này là một cách gọi những người bạn trong cộng đồng LGBT đâu, nó chẳng hề liên quan gì đến xu hướng tình dục cả. Để Mọt kể cho cậu nghe một câu chuyện nhé!" +
            "<br/>⭐ Eugenides từng cho biết trong một cuộc phỏng vấn, đối với Văn Chương thì Lưỡng Giới thời mô tả một vài nhân vật thần thoại chẳng hạn như Tiresias dự đoán tương lai, Orlando của Virginia Woolf có thể thay đổi từ nam thành nữ một cách thần kỳ. Và đó là cách ông đem một thứ thần thoại ấy vào một cơ thể con người 'trần phàm' đối diện với cuộc sống. Ông - tác giả muốn viết từ về một con người cụ thể, càng chính xác càng tốt về cả phương diện sinh học lẫn y học và quan trọng hơn là Tâm Lý. Thứ tâm lý ảnh hưởng trực tiếp lên con người Lưỡng Giới ấy phần nào thể hiện rõ được bối cảnh sống"
    },
    {
        di: 4,
        anh: "",
        ten: "Gọi Em Bằng Tên Anh - ",
        info: "" +
            "<br/>⭐ Ý, vào một ngày hè đủ oi bức và câu chuyện bắt đầu...Cậu bé Elio Perlman năm 17 tuổi, chàng trai sống cùng bố mẹ và chàng sinh viên người Mỹ cởi mở Oliver - khách trọ quen thuộc 'hằng năm' . Thế là cuộc tình họ dịu dàng đến bên nhau trong 6 tuần. Kể trong lổi suy nghĩ của Elio chúng ta như hoà vào dòng suy nghĩ của cậu, những cảm xúc chân thật lúc nhanh, lúc chậm. Mùa hè cũng dài như mùa đông nhưng cớ sao đông lại lê thê đến thế!" +
            "<br/>⭐ Họ sốt sắng lao vào nhau hệt những chú thiêu thân tìm cho mình ánh sáng và ngỡ rằng đấy là điểm cuối cùng. Mê đắm, ngọt ngào, họ yêu và chỉ đơn giản là yêu. Học cách cùng nhau làm mọi việc và Mọt đã ước rằng biết đâu nhỉ Thượng Đế mở lòng cho họ bên nhau, trao những cái hôn vụng dại vào thời điểm ' anh trở thành tôi và tôi trở thành anh', gọi anh bằng tên em, khi cửa sổ mở toang, trên chiếc giường dài nằm vui đùa cùng ánh nắng..." +
            "<br/>⭐ Và cuối cùng thứ ánh sáng ấy lại bị ngăn vào phòng. Đối với cậu bé năm 17 tuổi ấy đó chính là tội ác, nhất là khi ta đã nếm trên môi những vị ngọt trái cấm mà cả đời này không bao giờ có lại được. Cậu mất anh cả đời! " + "⭐ Liệu anh đi cái cái kết cho đôi ta hay chỉ đơn giản chia xa rồi quay về!!!"
    },
    {
        di: 5,
        anh: "",
        ten: "Điều Kỳ Diệu Của Tiệm Tạp Hoá Namiya - ",
        info: " ",
        nd: "<br/>⭐ Tiệm Tạp Hoá Namiya cho Mọt 1 cảm giác huyền bí vì những tâm tình, những lá thư vượt thời gian, không gian. Có đôi lúc Mọt từng nghĩ sẽ viết một lá thư để lại ở 1 quán cafe lạ, rồi biết đâu có một 'người lạ' nào đó đọc lá thư của Mọt lại được an ủi." +
            "<br/>⭐ Chúng ta sẽ không biết được những tâm sự ấy họ cần lắm một người lắng nghe, cũng chẳng thể hay khi bạn quan trọng đến dường lúc bạn thật tâm chia sẽ, thật lòng lắng nghe." +
            "<br/>⭐ Khó khăn rồi sẽ qua, mỗi câu chuyện đều có hướng giải quyết, không có đúng sai chỉ đơn giản là liệu có phù hợp hay không mà thôi." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 6,
        anh: "",
        ten: "Câu Chuyện Nghệ Thuật - ",
        info: "",
        nd: "<br/>⭐ ' Không có thứ gọi là Nghệ Thuật. Chỉ tồn tại các Nghệ Sĩ'." +
            "<br/>⭐ Susie Hodge là một nhà sử học nghệ thuật, một sử gia và là một hoạ sĩ. Chất nghệ trong cô thấm nhuần qua từng câu chữ và có lẽ vì là 'người cùng nghề' Mọt như được nghe kể về các thời kỳ qua góc nhìn rất khác. Nghệ Thuật hay Nghệ Sĩ âu cũng là danh xưng vì thứ hiện rõ lên là cảm xúc trong từng tác phẩm." +
            "<br/>⭐ Có lẽ điều khiến Mọt ấn tượng với quyển sách này là cách tác giả đặt góc nhìn của cả nghệ sĩ và cả đọc giả vào để 'họ' hiểu rõ về nhau hơn. Đấy cũng là một loại nghệ thuật dành cho những tâm hồn tinh tế." +
            "<br/>⭐Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp." +
            "<br/>ĐÁNH GIÁ: cảm xúc thì không thể đánh giá ạ."
    },
    {
        di: 7,
        anh: "",
        ten: "Phương Đông Lướt Ngoài Cửa Sổ - ",
        info: " ",
        nd: "<br/>⭐ Phương Đông Lướt Ngoài Cửa Sổ là một tác phẩm du ký dành cho những kẻ 'chân đi'. Cuộc hành trình bảo dài chẳng dài, ngắn chẳng ngắn thu mọi thứ vào tầm mắt ở những ô cửa sổ, những trạm dừng chân độc đáo, những ngưới bạn thú vị, mỗi người mỗi câu chuyện mỗi góc nhìn...." +
            "<br/>⭐ Cách mà quyển sách này đem đến cho Mọt là tầm nhìn về những chuyến đi, Mọt nhớ những ngày rong ruổi cùng chúng bạn trên con xe, những nụ cười, bài học, niềm vui... Cách Theroux đưa Mọt qua những chuyến đi của ông hệt như những lữ khách cô độc muốn dấn thân, muốn bước đi, muốn trải chứ chẳng phải những vị khách đến tham quan." +
            "<br/>⭐ Ngoài vẻ đẹp của quan cảnh, con người thì điều để lại cho Mọt suy nghĩ sâu sắc là những mặt trái của xã hội ở mỗi quốc gia, đâu cũng thế đều có nhiều khía cạnh." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 8,
        anh: "",
        ten: "Hoàng Hậu Margot - ",
        info: ".",
        nd: "<br/>⭐ Hoàng Hậu Margot là những câu chuyện xoay quanh quyền thế, vưồng quyền ở Pháp vào thế kỷ XVI với những mưu mô, lừa lọc, thật giả trộn lẫn." +
            "<br/>⭐ Cảm giác đầu tiên Mọt đọc quyển sách là những mối quan hệ tay ba chẳng đầu chẳng đuôi. Một cuộc hôn nhân dựa trên tiền đề danh vọng, một mối tình vụng trộm cấn cản,..." +
            "<br/>⭐ Margot người phụ nữ được ưu ái ban tặng danh xưng người phụ nữ đẹp nhất thời đại, bảo vật của người Pháp, kẻ thì so sánh nàng với nữ thần Bình Minh.... Nhưng nàng lại trở thành con cờ trong cuộc hôn nhân mang tính chính trị." +
            "<br/>⭐ Alexander Dumas vẽ rõ những hình ảnh thương tâm, nắm mồ hôn nhân và tình yêu không được chấp nhận trong từng câu chữ của quyển sách này. Tất thảy là quân cờ, là máu tanh, là quyền lực nước mắt và những cuộc vui vụng trộm...." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 9,
        anh: "",
        ten: "Khi Loài Cá Biến Mất -   ",
        info: "" +
            "<br/>⭐ Bằng một cách vô hình loài người đang tự treo đầu mình lên máy chém chờ ngày hành quyết khi tán phá tự nhiên biển không thương tiếc. Cuối cùng liệu mẹ thiên nhiên có còn rộng lượng cho chúng ta." +
            "<br/>⭐ Mọt rơi vào 1 mớ suy nghĩ lộn xộn của chính mình... Liệu 5 năm, 10 năm, 20 năm sau... Cá ta ăn chỉ còn là 'Vỏ', đại dương ta nhìn ngắm dần thành nhân tạo, rừng chim cây cảnh liệu còn bao nhiêu ngoài thế gian.... Ta cho rằng mình là loài động vật thông minh nhất hay cuối cùng là kẻ cô đơn nhất?" +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 10,
        anh: "",
        ten: "Thời Nắng Lịm - Eugen Ruge",
        info: "",
        nd: "<br/>⭐ Dù mở đầu khá buồn bã và uể oải, nhưng cuốn sách dễ dàng hấp dẫn Mọt bởi những sự kiện xảy ra trong diễn biến hưng thịnh suy vong của một gia đình hay nói đúng hơn là cách Eugen Ruge lồng ghép gia đình ấy làm tiền đề về nước Đức lúc bấy giờ." +
            "<br/>Tràn ngập mùi lửa than, mùi quan điểm, tư tưởng, với những khắc biệt giữa hai miền Đông và Tây Đức, thoạt tiên Thời nắng lịm có vẻ giống như một cuộc tình được Khối Đông Âu gây dựng mang đầy vẻ khắc khổ. Tuy nhiên, đây là một câu chuyện về gia đình nhiều thế hệ đình với đầy những biến động ở Đông Đức trước và sau sự sụp đổ của chủ nghĩa cộng sản." +
            "<br/>⭐ Suy cho cùng khi một thứ gì đó sụp đổ, thứ khác lên ngôi thì những tranh cãi gay gắt là điều không thể tránh khỏi. Lịch sử được tái hiện lại một cách vô cùng sống động bắt đầu từ một gia đình, người cha là một giáo sư, nhà hùng biện lừng danh, một trong những “nhà sử học có năng suất lao động cao nhất CHDC Đức”, chuyên nghiên cứu về giai cấp công nhân Đông Đức, toàn bộ công trình có độ dày ngang ngửa bộ Lenin toàn tập, đã khiến ông lao tâm khổ tứ suốt 30 năm, hành hạ gia đình ông suốt 30 năm… nhưng nay tất cả “đều thành đống giấy lộn”, người con trai thì trốn sang Tây Đức, một người ông luôn dành được huân chương của nhà nước cho những chiến công gắn liền với đảng Cộng sản trong quá khứ…." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 11,
        anh: "",
        ten: "Suối Nguồn - Ayn Rand",
        info: "",
        nd: "<br/>⭐ Xin chào, là Mọt đây. Lý do hơn 1 tháng qua Mọt biến mất là vì em nó, Suối Nguồn quyển sách mà ít có ai đủ kiên nhẫn mang theo để đọc ở mọi nơi như Mọt. Nặng chắc vài kg với gần 2000 trang. Cuối cùng thì Mọt đã hoàn thành em nó." +
            "<br/>⭐ Dạo này Mọt thích đọc sách của những tác giả nữ hơn, không biết nữa có gì đó tinh tế, nhẹ nhàng hơn chắc là do bản chất phụ nữ nên góc nhìn của học mang theo xúc cảm hơn cho Mọt  .  Nói chút về cô Ayn Rand nhỉ, đối với Mọt cô ấy như 1 quý cô kể một câu chuyện về đam mê, nhiệt huyết, xã hội... như bản nhạc sonate. Thật ấy cái các ghép những chi tiết về xã hội khắc nghiệt, tâm lý nhân vật không quá gây gắt nhưng lại mang chiều sâu đọng lại." +
            "<br/>⭐ Có một vài câu nói trong sách Mọt có note lại: ' Anh chỉ là một bộ phận nhỏ của một xã hội rộng lớn. Hợp tác là một khái niệm sống còn đối với thế giới hiện đại của chúng ta' , ' Vì tôi yêu quý mặt đất này. Đấy vốn là tất cả những gì tôi yêu quý. Tôi không thích hình dạng của những thứ trên trái đất. Tôi muốn thay đổi chúng',... Cậu nghĩ sao về những lời thoại trên?" +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 12,
        anh: "",
        ten: "TIẾNG CÚ KÊU - Patricia Highsmith",
        info: " ",
        nd: "<br/>⭐ Một sự trống rỗng... Đó là điều duy nhất Mọt có thể nói đến sau khi đọc xong quyển sách này." +
            "<br/>⭐ Chúng ta vẫn luôn bị ảnh hưởng bởi quá khứ - điều mà chúng ta luôn bảo mọi chuyện sẽ qua." +
            "<br/>⭐ Thời gian luôn làm sáng tỏ mọi việc nhưng vết thương hằn trong tim thì chẳng thể nhờ thời gian bù đắp." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ ." +
            "<br/>Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 13,
        anh: "",
        ten: "NHỮNG MẢNH GHÉP CUỘC ĐỜI - Tablo",
        info: "",
        nd: "<br/>⭐ 'Nếu cuộc đời là con đường cao tốc thì sẽ chẳng có đèn đỏ, nhưng biết đâu trong cuộc sống có những chiếc đèn đỏ lại là điều tốt. Nếu phải đứng chờ đèn đỏ, thì ta sẽ ngoảnh đầu nhìn lại con đường đã đi qua. Nếu không có việc gì phải dừng lại nữa thì tốt biết mấy.'" +
            "<br/>⭐ Mọt nghĩ đây sẽ là quyển sách cho những ngày dở dở ương ương, không phải vô định mà chỉ là tạm thời muốn dừng lại để ngắm nhìn và đắm chìm..." +
            "<br/>⭐ Những cảm xúc thật, những câu chuyện trải qua, những lắng động, những đồng cảm... Như một thước phim quay chậm về khoảng thời gian Tablo trải qua và cũng như nhìn thấy chính cậu." +
            "<br/>⭐ Chúc rằng ngày nào cũng có 1 người bạn để cậu đồng hành dẫu cho tâm trạng hôm nay có hơi hong vui...." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 14,
        anh: "",
        ten: "Đào - Linh Lê",
        info: "",
        nd: "<br/>⭐Đào - cái tình trong từng câu chữ, cái thơ mang theo chua xót, đau thương, tủi hờn... mọi thứ cảm xúc tiêu cực nhất đẩy Mọt đến cao trào của Đào mà thấm nhuần cái đau của kẻ 'bán thân'." +
            "<br/>⭐ Điều gì thế nhỉ? Khiến cho những cô gái trẻ bỏ quên đi chính mình mà trở thành 'món hàng định giá'. Đồng tiên mê hoặc hay cuộc sống đẩy đưa .  Trong thế giới của Đào có xa hoa của 'bề trên', có tủi nhục, ê chề phơi bày trên những tấm thân gầy rạc, héo mòn." +
            "<br/>⭐ Linh Lê - một cô gái Việt trọn vẹn một tâm hồn Việt thổi hồn những dấu ấn rất riêng về những người đàn bà không còn 'sạch'." +
            "<br/>Đối với văn học Việt Nam nói chung thì hình ảnh những ả đào không còn quá lạ lẫm nhưng chỉ là ở giao đoạn những năm 45, còn với thời đại này thật tâm chiếc bìa hào nhoáng với ruột rỗng tuyếch chạy theo thị trường khiến Mọt mệt mõi." +
            "<br/>⭐ Chẳng đủ sâu, chẳng mang câu chuyện để tồn động lại như những tác phẩm văn học Việt Nam. Thôi thì cậu đọc Đào đi để ủng hộ một tâm hồn Việt để nhận ra dẫu thế nào chăng nữa một tấm lòng Việt dù có bị vùi dập bởi vật chất cũng không bị ' bán đứng linh hồn '." +
            "<br/>⭐Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 15,
        anh: "",
        ten: "451 Độ F - RAY BRADBURY",
        info: "",
        nd: "<br/>⭐ 415 độ F là tiểu thuyết giả tưởng Mỹ kể về xã hội tương lai theo kiểu 'Phản Địa Đàn' ( dystopia) - cuối thế kỷ XXI khi con người có cuộc sống sung túc, đủ đầy, xã hội như một cái máy được lập trình sẵn và cứ theo guồng quay mà đối diện mọi thứ diễn ra không sai lệch. Con người ta chẳng khác gì những con robot không xúc cảm, ai cùn đắm chìm trong thế giới riêng và 'Sách' là thứ cần phải đốt đi." +
            "<br/>⭐ Trong lịch sử thế giới những sự kiện đốt sách đã không còn quá xa lạ. Đốt sách là cách mà lũ người 'cầm quyền' chọn để đốt đi con đường học vấn, đốt đi tri thứ, và đốt cả con đường đứng lên chóng lại những áp bức, giày vò... Vì sao à? Vì sách là kẻ dẫn đường, không chỉ là quyển sách vô tri vô giác mà là thứ duy nhất hướng dẫn một dân tộc đứng lên nhanh và đơn giản nhất chỉ cần bước đầu là đọc." +
            "<br/>⭐ Nhưng với 415 độ F việc đốt sách xảy ra là do con người chúng ta chối bỏ sách, họ không còn nghĩ sách là cần thiết thay vào đó họ chọn những thứ 'hiện đại hơn' để chạy theo và rồi họ cứ trong vòng tròn của chính họ." +
            "<br/>⭐ Mọt đọc xong quyển sách này chỉ biết thốt lên: ' Ra là chúng ta của sau này cô đơn đến thế '..." +
            "<br/>⭐ Quyển sách tên 415 độ F là vì 451 độ F (tương đương với gần 233 độ Celsius) theo ghi chú của bản dịch là “nhiệt độ giấy in sách bắt lửa và bốc cháy”, thiết nghĩ cần nói rõ hơn một chút, thực chất 451 độ F là nhiệt độ tự bốc cháy của giấy." +
            "<br/>⭐ Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ . Chúc cậu có một ngày đọc sách tốt đẹp."
    },
    {
        di: 16,
        anh: "",
        ten: " - Guillaume Musso",
        info: "",
        nd: "<br/>⭐ Xin chào, Mọt đây cuối cùng chúng ta cũng về với chủ đề chính của chiếc IG này là review sách sau khoảng thời gian khá dài nhỉ. Nay Mọt lại kể cho cậu nghe về một quyển sách Mọt đọc trên chuyến đi của mình đầu năm nay." +
            "<br/>⭐ Musso cái tên đã chẳng còn quá lạ khi nhắc đến, cách mà ông viết về trinh thám luôn bao trùm một vẻ rất tình trong câu chuyện, tình ở cả cảnh vật, cả câu chữ, cả nhân vật,... Có lẽ do vì ông là người Pháp nhỉ cái đất nước mà lãng mạng trở thành điều có trong cả phong cách sống của mỗi người con, chắc là thế." +
            "<br/>⭐ Mọt đọc nhiều rồi, nào là trinh thám Nhật máu me hóc búa, trinh thám Mỹ với đầu óc nhạy bén và cả tỷ hướng đi, trinh thám Anh với dăm ba mu mẹo nhưng rồi vẫn mê mẫn cái Tình mà Musso đưa vào câu chuyện. Alice là một sĩ quan, cô có câu chuyện tình của đời mình, có cố chấp, có sai lầm, có đánh đổi và cả bi thương, mở đầu câu chuyện là cô bị bắt còng tay vào một anh chàng xa lạ Grabiel. Trong người cô khi ấy chỉ có vệt máu đỏ trên chiếc sơ mi, tấm thẻ gửi đồ tại khách sạn, dãy số được viết trên tay và một khẩu súng Glock 22 thiếu một viên đạn." +
            "<br/>⭐ Rồi diễn biến câu chuyện sẽ ra sao, nghị lực sống có giúp cô gái nhỏ vượt qua mọi khó khăn..." +
            "<br/>Mọt không thể kể cho cậu nghe về quyển sách này một cách thấu hiểu hơn trừ phi cậu đọc nó và cùng Mọt cảm nhận từng câu chữ dưới trang sách . Hãy đọc để ngắm nhìn bức tranh tổng thể của riêng cậu và đón nhận những góc khuất mà chỉ cậu mới có thể hiểu rõ ."
    }
]


function taisach() {
    var review = document.getElementById("review");
    sachreview.forEach(item1 => {
        var img1 = document.createElement("img");
        var src1 = document.createAttribute("src");
        var height1 = document.createAttribute("height");
        var h21 = document.createElement("h2");
        var info = document.createElement("h2");

        src1.value = item1.anh;
        height1.value = 200;
        h21.innerHTML = item1.ten;
        info.innerHTML = item1.info;


        img1.setAttributeNode(height1);
        img1.setAttributeNode(src1);


        review.appendChild(img1)
        review.appendChild(h21)
        review.appendChild(info)
    })
}

// loadProduct() sachban;
function createItem1(id1, scrImg1, title1, gia) {

    var sachreview = document.getElementById("review");
    sachreview.innerHTML +=
        " <div class=\"row\"> " +
        " <div class=\"col-2\">" +
        `<img src=\"${scrImg1}\" class=\"offer-img\">` +
        "</div>" +
        "<div class=\"col-2\">" +
        `<h1>${title1}</h1>` +
        `<p>${gia}</p>` +
        `<button onclick = \"docreview(${id1})\" class=\"btn\">Xem Chi Tiết</button>` +
        "</div>" +
        "</div>";
}
function docreview(id1) {
    sachreview.forEach(item => {
        if (id1 === item.di) {
            localStorage.setItem("review", JSON.stringify(item));
        }
    })

    location.replace("../projectcuoi/reviewsach/review.html");
}

function createRow1() {
    for (var i1 = 0; i1 < sachreview.length; i1++) {
        createItem1(sachreview[i1].di, sachreview[i1].anh, sachreview[i1].ten, sachreview[i1].info);
    }
}

createRow1();

