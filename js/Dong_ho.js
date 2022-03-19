function dongho() {
    var today = new Date()
    var gio = today.getHours()
    var phut = today.getMinutes()
    var giay = today.getSeconds()
    if (giay < 10) {
        giay = "0" + giay
    }
    if (phut < 10) {
        phut = "0" + phut
    }
    if (gio < 10) {
        gio = "0" + gio
    }
    document.getElementById("time").innerHTML = gio + ":" + phut + ":" + giay
    setTimeout("dongho()", 1000)
    function cauchao() {
        if (0 <= gio < 12)
            document.getElementById("chao").innerHTML = "Chào buổi sáng !"
        if (12 <= gio < 17)
            document.getElementById("chao").innerHTML = "Chào buổi chiều !"
        if (17 <= gio < 23)
            document.getElementById("chao").innerHTML = "Chào buổi tối !"
        setTimeout("cauchao()", 1000)
    }
    cauchao()
}
dongho()