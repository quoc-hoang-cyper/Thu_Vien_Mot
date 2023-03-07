
var dangxuat = document.getElementById('dangxuat');
var tenkh = document.getElementById('xinchao');
var data = JSON.parse(localStorage.getItem('user'));
if (data != null) {
    tenkh.innerHTML = "Xin chào:  " + data.name;
    dangxuat.innerHTML = "Đăng Xuất";
}
function logout() {
    localStorage.removeItem("user");
    location.replace("./review.html");
}





var item = JSON.parse(localStorage.getItem("review"));

function showItem() {
    console.log(item);
    var divItem = document.getElementById("reviewsach");
    var divrow = document.createElement("div");
    var classrow = document.createAttribute("class");
    classrow.value = "row";
    divrow.setAttributeNode(classrow);
    var divcol = document.createElement("div");
    var classcol = document.createAttribute("class");
    classcol.value = "col-2";
    divcol.setAttributeNode(classcol);
    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = "." + item.anh;
    img.setAttributeNode(src);

    var height = document.createAttribute("height");
    height.value = 350;
    img.setAttributeNode(height);

    var width = document.createAttribute("width");
    width.value = 250;
    img.setAttributeNode(width);
    divcol.appendChild(img);
    divrow.appendChild(divcol);

    var h2 = document.createElement("h2");
    h2.innerHTML = item.ten;

    var h4 = document.createElement("h4");
    h4.innerHTML = item.nd;
    var divcol1 = document.createElement("div");
    var classcol1 = document.createAttribute("class");
    classcol1.value = "col-2";
    divcol1.setAttributeNode(classcol1);
    divcol1.appendChild(h2);
    divcol1.appendChild(h4);
    divrow.appendChild(divcol1);
    

    divItem.appendChild(divrow);


}

showItem();
