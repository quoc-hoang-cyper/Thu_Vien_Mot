var item = JSON.parse(localStorage.getItem("chitietSP"));
localStorage.setItem("item", JSON.stringify(item));
localStorage.setItem("cart", JSON.stringify([]));
console.log(item);

function showItem() {
    var divItem = document.getElementById("item");
    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = "." + item.img;
    img.setAttributeNode(src);
  

    var height = document.createAttribute("height");
    height.value = 200;
    img.setAttributeNode(height);

    var width = document.createAttribute("width");
    width.value = 200;
    img.setAttributeNode(width);

    var h3 = document.createElement("h3");
    h3.innerHTML = item.tentacgia;
   
    var h1 = document.createElement("h1");
    h1.innerHTML = item.name;

    var h4 = document.createElement("h4");
    h4.innerHTML = item.price;

    var p = document.createElement("p");
    p.innerHTML = item.p;

    divItem.appendChild(h3);
    divItem.appendChild(img);
    divItem.appendChild(h1);
    divItem.appendChild(h4);
    divItem.appendChild(p);

    var button = document.createElement("button")
    button.innerHTML = "Thêm vào giỏ hàng";
    divItem.appendChild(button);
    var typebtn = document.createAttribute("type");
    var onclick = document.createAttribute("onclick");
    typebtn.value = "button";
    onclick.value = ` themgiohang(${item.id})`;
    btn.setAttributeNode(myClass);
    button.setAttributeNode(typebtn);
    button.setAttributeNode(onclick);
    
}


function themgiohang(id) {
    var listCart = JSON.parse(localStorage.getItem("cart"));
    listCart.push(id);
    localStorage.setItem("cart", JSON.stringify(listCart));
}


showItem();



var dangxuat = document.getElementById('dangxuat');
var tenkh = document.getElementById('xinchao');
var data = JSON.parse(localStorage.getItem('user'));
if (data != null) {
    tenkh.innerHTML = "Xin chào:  " + data.name;
    dangxuat.innerHTML = "Đăng Xuất";
}
function logout() {
    localStorage.removeItem("user");
    location.replace("./chitietSP.html");
}
