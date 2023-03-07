
var dangxuat = document.getElementById('dangxuat');
var tenkh = document.getElementById('xinchao');
var data = JSON.parse(localStorage.getItem('user'));
if (data != null) {
    tenkh.innerHTML = "Xin chào:  " + data.name;
    dangxuat.innerHTML = "Đăng Xuất";
}
function logout() {
    localStorage.removeItem("user");
    location.replace("./cart.html");
}


function loadItemSPcart(item) {
    var listSP = document.getElementById("listSP");
    listSP.innerHTML += "<tr> " +
        " <td class=\"cart_product_img d-flex align-items-center\"> " +
        `<a><img src=".${item.img}"></a>` +
        `<h6>${item.name}</h6>` +
        "</td>" +
        `<td class=\"price\"><span>${item.price}</span></td>` +
        "</tr>";
}

function loadSP() {
var listSP = JSON.parse(localStorage.getItem("product"));
var listCart = JSON.parse(localStorage.getItem("cart"));
    listSP.forEach(item => {
        listCart.forEach(item1 => {
            if(item.id === item1) {
                loadItemSPcart(item);
            }
        })
    })
}

loadSP();