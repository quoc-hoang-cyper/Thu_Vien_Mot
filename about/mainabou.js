var dangxuat = document.getElementById('dangxuat');
var tenkh = document.getElementById('xinchao');
var data = JSON.parse(localStorage.getItem('user'));
if (data != null) {
    tenkh.innerHTML = "Xin chào:  " + data.name;
    dangxuat.innerHTML = "Đăng Xuất";
}
function logout() {
    localStorage.removeItem("user");
    location.replace("./indexabout.html");
}

var listProduct = [
    {
        id: 1,
        tentacgia:"Tác Giả : Stephen Hawking",
        img: "./hinh/vu tru trong vo hat de.jpg",
        name: "Vũ trụ trong vỏ hạt dẻ",
        price: "75.500 ₫",
        p:"MÔ TẢ SẢN PHẨM : Lòng khát khao khám phá luôn là động lực cho trí sáng tạo của con người trong mọi lĩnh vực không chỉ trong khoa học. Điều đó được kiểm chứng trong quyển Vũ trụ trong vỏ hạt dẻ"    },
    {
        id: 2,
        tentacgia:"Tác Giả :  Trần Trọng Kim",
        img: "./hinh/viet nam su luoc.jpg",
        name: "Việt nam sử lược",
        price: "312.000 ₫",
        p:"MÔ TẢ SẢN PHẨM :Đầu thế kỷ XX, giữa lúc nền học thuật nước nhà chỉ có các bộ đại tác như Đại Việt sử ký toàn thư hay Khâm định Việt sử thông giám cương mục là nguồn sử liệu chính thống nhưng chưa đáp ứng nhu cầu tìm hiểu lịch sử của phần đông dân chúng, thì Việt Nam sử lược, với tư cách là bộ thông sử chi tiết đầu tiên được viết bằng chữ quốc ngữ, đã xuất hiện và nhanh chóng thu hút sự quan tâm của độc giả lẫn giới nghiên cứu cả nước. Từ đó đến nay đã 100 năm trôi qua, tác phẩm vẫn giữ nguyên giá trị và là quyển sách vỡ lòng quen thuộc cho những ai bắt đầu tìm hiểu lịch sử Việt Nam.Để góp phần hoàn thiện và phổ biến “tấm Nam sử” mà học giả Trần Trọng Kim đã dệt những sợi đầu tiên cách nay đúng một thế kỷ, Đông A tiến hành tái bản tác phẩm Việt Nam sử lược, dựa theo bản in của nhà Tân Việt năm 1954, có bổ sung một số chi tiết từ các bản in năm 1920, 1928 và 1971. Đồng thời, chúng tôi tuyển lựa và thêm vào một số hình ảnh minh họa từ nguồn tranh dân gian, bảo tàng và một số tư liệu sách báo xưa, với mong muốn gửi tới bạn đọc một ấn bản không chỉ chỉn chu về mặt nội dung mà còn trang nhã về mặt hình thức, nhân kỷ niệm 100 năm ngày tác phẩm ra đời 1920 - 2020"
    },
    {
        id: 3,
        tentacgia:" Tác Giả : Gary Keller",
        img: "./hinh/trieu phu moi gioi bat dong san.jpg",
        name: "Triệu phú môi giới bất động sản",
        price: "210.000 ₫",
        p:"MÔ TẢ SẢN PHẨM : Nghề bất động sản – lựa chọn hoàn hảo cho bất kỳ người nào có máu kinh doanh và nhiều tham vọng.Với chi phí khởi nghiệp tương đối thấp và không có mức trần cứng nhắc giới hạn thu nhập, nghề bất động sản dường như là lựa chọn hoàn hảo cho bất kỳ người nào có máu kinh doanh và nhiều tham vọng.Trong ngành này, bạn tự định ra hạn mức cho mình.Cách tiếp cận, khả năng và niềm đam mê môi giới bất động sản sẽ là những nhân tố quyết định lớn nhất cho thành công của bạn."
    },
    {
        id: 4,
        tentacgia:"Tác Giả :  Carlo Rovelli",
        img: "./hinh/trat tu thoi gian.jpg",
        name: "Trật tự thời gian",
        price: "65.300 ₫",
        p:"MÔ TẢ SẢN PHẨM: Bất chấp sự quen thuộc và vĩnh hằng, thời gian vẫn là một ẩn số không ngừng đánh đố chúng ta. Các triết gia, nghệ sĩ và nhà thơ từ lâu đã khám phá ý nghĩa của nó, trong khi các nhà khoa học nhận thấy rằng cấu trúc của thời gian khác với trực giác đơn giản mà chúng ta có. Từ Boltzmann đến lý thuyết lượng tử, từ Einstein đến hấp dẫn lượng tử vòng, sự hiểu biết của chúng ta về thời gian đã trải qua những biến đổi căn bản. Và với Trật tự thời gian: Từ nguồn gốc vũ trụ, số phận các hố đen đến bản chất của ý thức, Carlo Rovelli đưa chúng ta vào câu chuyện đầy mê hoặc khám phá bản chất và ý nghĩa của thời gian."
    },
    {
        id: 5,
        tentacgia:" Tác Giả : Kim Huggens",
        img: "./hinh/tarot nhap mon.jpg",
        name: "Tarot nhập môn",
        price: "106.000 ₫",
        p:"MÔ TẢ SẢN PHẨM : Tarot – bộ môn vừa mang màu sắc chiêm đoán vừa mang tính nghệ thuật. Mỗi lá bài đem đến cho bạn những thông điệp được ẩn giấu từ quá khứ, hiện tại hoặc tương lai. Từng lá bài giống như một “bảo tàng nghệ thuật” thu nhỏ – từng bức tranh được gửi gắm trong đó đều chứa những thông điệp về nhân sinh quan."
    },
    {
        id: 6,
        tentacgia:"Tác Giả :  Ian Morris",
        img: "./hinh/tai sao phuong tay vuot troi.jpg",
        name: "Tại sao phương tây vượt trội",
        price: "304.000 ₫",
        p:"MÔ TẢ SẢN PHẨM : Tại Sao Phương Tây Vượt Trội,bằng nghiên cứu sâu sắc và lập luận một cách xuất sắc, cuốn sách kéo dài năm mươi nghìn năm lịch sử và cung cấp những hiểu biết mới trên gần như mọi trang sách. Cuốn sách tập hợp những phát hiện mới nhất trong các lĩnh vực từ lịch sử cổ đại đến khoa học thần kinh không chỉ giải thích tại sao phương Tây dẫn đầu thế giới mà còn dự đoán tương lai sẽ mang lại điều gì trong một trăm năm tới"
    },
    {
        id: 7,
        tentacgia:" Tác Giả : Rosalee de la Forêt",
        img: "./hinh/nang luong song tu thao duoc.jpg",
        name: "Năng lượng sống từ thảo dược",
        price: "187.900 ₫",
        p:"MÔ TẢ SẢN PHẨM : Các bạn có biết ngay trong căn bếp nhà mình có cả một rương thuốc thảo dược rất tốt chăng?. Năng lượng sống từ thảo dược sẽ chỉ cho bạn cách làm thế nào để chuyển hóa các loại nguyên liệu thông thường thành thức ăn và dược liệu chữa bệnh. Qua hướng dẫn của dược sư Rosalee de la Forêt, bạn sẽ hiểu được cách làm thế nào để khớp các đặc tính của từng loại cây với nhu cầu của chính cơ thể mình, để có một cách tiếp cận cụ thể dành cho sức khỏe của cá nhân bạn và gia đình."
    },
    {
        id: 8,
        tentacgia:"Tác Giả :  Bill Bryson",
        img: "./hinh/luoc su van vat.jpg",
        name: "Lược sử vạn vật",
        price: "141.900 ₫",
        p:"MÔ TẢ SẢN PHẨM: Với cuốn sách này, người đọc sẽ biết được những giới hạn trong tri thức của con người về vũ trụ và cả về chính trái đất. Đây là cuốn sách khoa học phổ thông bán chạy nhất nước Anh năm 2005 với hơn 300.000 bản in. Nhà phê bình người Anh, Craig Brown thậm chí đã nhận xét rằng tác phẩm này xứng đáng bán được 500.000.000.000 cuốn (theo cách nói của chính Bryson, 'bằng với số proton có trong một dấu chấm câu'."
    },
    {
        id: 9,
        tentacgia:"Tác Giả : Bùi Việt Hà",
        img: "./hinh/20 bt lap trinh scrach.jpg",
        name: "20 bài tập lập trình Scratch  ",
        price: "55.000 ₫",
        p:"MÔ TẢ SẢN PHẨM:Các ngôn ngữ lập trình trực quan kéo thả nói chung và Scratch nói riêng đang lan tỏa mạnh mẽ vào mọi ngóc ngách xã hội, trong các nhà trường và gia đình. Có lẽ chưa bao giờ phong trào học lập trình dành cho các bạn nhỏ (từ 6 đến 14 tuổi) lại bùng nổ như hiện nay ở Việt Nam cũng như trên thế giới. Theo đánh giá của nhiều chuyên gia, sự ra đời các ngôn ngữ lập trình trực quan dành cho thiếu nhi là một cuộc cách mạng giáo dục lớn."
    },
    {
        id: 10,
        tentacgia:" Tác Giả : Tôn Tử",
        img: "./hinh/ton tu binh phap.jpg",
        name: "Tôn tử binh pháp",
        price: "49.900 ₫",
        p:"MÔ TẢ SẢN PHẨM: Được xưng tụng là tuyệt tác binh thư hàng đầu của thế giới cổ đại, binh thư kinh điển vĩ đại nhất trong lịch sử nhân loại, Tôn Tử Binh Pháp là một cuốn cổ thư “kỳ quái”, “để trong vườn sẽ tỏa mùi thơm của hoa quý, ném xuống đất sẽ vang tiếng kêu của bạc vàng”.Nó không chỉ được các vua chúa từ đông sang tây xem như sách gối đầu giường, bí kíp quân sự không thể thiếu, mà còn được nhiều chuyên gia trong các lĩnh vực như triết học, kinh doanh, tâm lý học, ngôn ngữ học, thể dục thể thao,… ứng dụng để nghiên cứu và đạt được nhiều thành tựu đáng kể."
    },
    {
        id: 11,
        tentacgia:"Tác Giả :  Ashley Davis Bush",
        img: "./hinh/toi ko thik on ao.jpg",
        name: "Tôi không thích ồn ào",
        price: "39.600 ₫",
        p:"MÔ TẢ SẢN PHẨM: NHỮNG THỨ GIÁ TRỊ THÌ KHÔNG ỒN ÀO" +
        "Đại bàng một mình bay lượn trên những tầng mây, lũ gà thì kêu quang quác dưới mặt đất." +
        "Những tờ tiền giấy nhẹ bẫng nhưng mua được nhiều thứ hơn đống tiền xu leng keng." + 
        "Những người giản dị và khiêm tốn tạo ra nhiều giá trị xã hội hơn những kẻ ba hoa."
    },
    {
        id: 12,
        tentacgia:"Tác Giả :  Yuval Noah Harari",
        img: "./hinh/hôm deus  luoc su tuong lai.jpg",
        name: "Lược sử tương lai",
        price: "134.900 ₫",
        p:"MÔ TẢ SẢN PHẨM: Homo Deus: Lược Sử Tương Lai.Homo sapiens có phải là một dạng sống siêu đẳng, hay chỉ là một tay đầu gấu địa phương? Làm thế nào con người lại tin rằng họ không chỉ đã kiểm soát thế giới, mà còn mang lại ý nghĩa cho nó? Công nghệ sinh học và trí thông minh nhân tạo đe doạ loài người ra sao? Sinh vật nào có thể kế thừa loài người, và tôn giáo mới nào sẽ được sản sinh?"
    },
    {
        id: 13,
        tentacgia:"Tác Giả : Nhiều Tác Gỉa",
        img: "./hinh/cac trieu dai viet nam.jpg",
        name: "Các triều đại Việt Nam",
        price: "56.900 ₫",
        p:"MÔ TẢ SẢN PHẨM: Các triều đại Việt Nam - cuốn sách có giá trị không chỉ về tri thức mà còn bồi đắp thêm niềm tin về khí phách, tài trí và lòng yêu nước của người Việt Nam.Cuốn sách có dung lượng vừa phải nhưng cung cấp nhiều thông tin cơ bản, bao quát toàn bộ tiến trình phát triển lịch sử dân tộc. Các công tích, hành trạng của những vị vua từ thời Hùng Vương dựng nước đến khi vương triều Nguyễn kết thúc vai trò lịch sử đều được nhóm tác giả chọn lọc, giới thiệu một cách chính xác, cẩn thận "
    },
    {
        id: 14,
        tentacgia:" Tác Giả : Richard Feynman",
        img: "./hinh/feynman chuyen that nhu dua.jpg",
        name: "Feynman chuyện thât như đùa",
        price: "133.800 ₫",
        p:"MÔ TẢ SẢN PHẨM: Richard Feynman (1918-1988), người đoạt giải Nobel về Vật lý, đã kể về những cuộc phiêu lưu kỳ quặc. Bằng một giọng quá tài tình ông tường thuật lại trong cuốn sách những trải nghiệm của mình khi trao đổi các ý tưởng về Vật lý nguyên tử với Einstein và Bohr cũng như các mưu mẹo về cờ bạc với Nick the Greek "
    },
    {
        id: 15,
        tentacgia:" Tác Giả : Cao Huy Giu - Đào Duy Anh",
        img: "./hinh/dai viet su ki toan thu.jpg",
        name: "Đại Việt sử ký toàn thư",
        price: "192.500 ₫",
        p:"MÔ TẢ SẢN PHẨM: Trong các sách lịch sử cũ của ta ,thì Đại Việt sử ký toàn thư là một bộ sử lớn chép từ Hồng Bàng đến Ất Mão đời vua Gia Tôn nhà Lê.Đại Việt sử ký toàn thư là bộ sách lịch sử quý báu trong tủ sách sử cũ của nước Việt Nam , rất cần thiết cho những người nghiên cứu lịch sử dân tộc"
    },
    {
        id: 16,
        tentacgia:" Tác Giả :  Édith Piaf",
        img: "./hinh/con song la con yeu.jpg",
        name: "Còn sống là còn yêu",
        price: "61.900 ₫",
        p:"MÔ TẢ SẢN PHẨM: Édith Piaf – Còn Sống Là Còn Yêu hoàn toàn không phải một cuốn sách tiểu sử đơn thuần, mà đó là những trang viết chân thật nhất về một huyền thoại nổi danh với nghị lực sống mạnh mẽ, đủ để truyền cảm hứng cho nhiều thế hệ về cách chúng ta sống, cách chúng ta yêu và cách chúng ta theo đuổi đam mê. "
    }
]
localStorage.setItem("product", JSON.stringify(listProduct));
localStorage.setItem("cart", JSON.stringify([]));


function themgiohang(id) {
    var listCart = JSON.parse(localStorage.getItem("cart"));
    listCart.push(id);
    localStorage.setItem("cart", JSON.stringify(listCart));
}

function loadProduct() {
    var product = document.getElementById("product");
    listProduct.forEach(item => {
        var img = document.createElement("img");
        var src = document.createAttribute("src");
        var height = document.createAttribute("height");
        var h2 = document.createElement("h2");
        var gia = document.createElement("h2");

        src.value =item.img;
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

// loadProduct() sachban;
function xemchitiet(id) {
    console.log(id)
    listProduct.forEach(item => {
        if (id === item.id) {
            localStorage.setItem("chitietSP", JSON.stringify(item));
        }
    })
    location.replace("../productchitiet/chitietSP.html");
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
    btn.innerHTML = "Mua Hàng";
    var typebtn = document.createAttribute("type");
    var onclick = document.createAttribute("onclick");
    var myClass = document.createAttribute("class");
    myClass.value = "myButton";
    typebtn.value = "button";
    onclick.value = `xemchitiet(${id})`;
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
