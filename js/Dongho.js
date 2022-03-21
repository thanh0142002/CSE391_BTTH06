let arrayTime = {
    "images/00.gif",
    "images/01.gif",
    "images/02.gif",
    "images/03.gif",
    "images/04.gif",
    "images/05.gif",
    "images/06.gif",
    "images/07.gif",
    "images/08.gif",
    "images/09.gif",
}

function dongho() {

    var gio = today.getHours()
    var phut = today.getMinutes()
    var giay = today.getSeconds()

    // document.getElementById("gio1").src = arrayTime[Math.floor(gio/10)]
    // document.getElementById("gio2").src = arrayTime[gio/10]

    // document.getElementById("phut1").src = arrayTime[Math.floor(phut/10)]
    // document.getElementById("phut2").src = arrayTime[phut/10]
    
    // document.getElementById("giay1").src = arrayTime[Math.floor(giay/10)]
    // document.getElementById("giay2").src = arrayTime[giay/10]


    setTimeout("dongho()", 1000)
    function cauchao() {
        if (0 <= gio < 12)
            document.getElementById("chao").innerHTML = "chào buổi sáng"
        if (12 <= gio < 17)
            document.getElementById("chao").innerHTML = "chào buổi chiều"
        if (17 <= gio < 23)
            document.getElementById("chao").innerHTML = "chào buổi tối"
        setTimeout("cauchao()", 1000)
    }
    cauchao()
}
dongho()
