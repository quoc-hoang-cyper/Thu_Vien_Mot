const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
var user = [
    {
        name: 'admin',
        userName: 'admin',
        passWord: '123'
    },
    {
        name: 'test1',
        userName: 'kh1',
        passWord: '123'
    },
    {
        name: 'test2',
        userName: 'kh2',
        passWord: '123'
    }
]

var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
var notification = document.getElementById("thongbao");

//đăng nhập//

function login() {
    if (localStorage.getItem("LIST_USER") == null) {
        localStorage.setItem("LIST_USER", JSON.stringify(user))
    }
    var users = JSON.parse(localStorage.getItem("LIST_USER"))
    for (var i = 0; i < users.length; i++) {
        console.log(userName.value)
        if (users[i].passWord == passWord.value && users[i].userName == userName.value) {
            localStorage.setItem("user", JSON.stringify(users[i]))
            
            location.replace("../index.html");
            return;
        }
    }
    notification.innerHTML = "tài khoản hoặc mật khẩu sai"
}

//tạo tài khoản//

function register() {
    if (localStorage.getItem("LIST_USER") == null) {
        localStorage.setItem("LIST_USER", JSON.stringify(user))
    }

    var name1 = document.getElementById("name");
    var userName1 = document.getElementById("userName1");
    var password1 = document.getElementById("passWord1")
    var notifi = document.getElementById("notifi")
    var check = false;
    if (name1.value == "" || userName1.value == "" || password1.value == "") {
        notifi.innerHTML = "Hãy nhập đầy đủ thông tin"
        return;
    }

    var users = JSON.parse(localStorage.getItem("LIST_USER"));

    users.forEach(Element => {
        if (userName1.value == Element.userName) {
            check = true
        }
    });
    if (check) {
        notifi.innerHTML = "Tài khoản đã tồn tại"
    }
    else {

        users.push({
            name: name1.value,
            userName: userName1.value,
            passWord: password1.value
        })
        localStorage.setItem("LIST_USER", JSON.stringify(users))
        alert("Bạn Đã Đăng Ký Thành Công");
    }
}







