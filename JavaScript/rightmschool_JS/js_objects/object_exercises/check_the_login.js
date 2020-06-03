let login = prompt("Please input your login!");
if (login === "Admin") {
    let password = prompt("Please password");
    if (password === 'TheMaster') {
        alert('Welcome');
    }else if (password === '' || password === null) {
        alert('Canceled');
    }else {
        alert("Wrong password!")
    }
}else if (login === '' || login == null) {
    alert('Canceled');
}else {
    alert("I don\'t know you");
}
