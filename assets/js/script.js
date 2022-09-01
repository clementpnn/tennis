var user1 = document.getElementById("user1");
var lvlUser1 = document.getElementById("lvlUser1");
var user2 = document.getElementById("user2");
var lvlUser2 = document.getElementById("lvlUser2");
var form = document.getElementById("form");
var div = document.getElementById("points");
var post = document.getElementById("post");

var arr = []

function getValue() {
    const usr1 = user1.value
    const lvlUsr1 = lvlUser1.value
    const usr2 = user2.value
    const lvlUsr2 = lvlUser2.value
    arr = []
    var arrPoints = []

    for (let i=0; i<150; i++) {
        var p1 = (Math.random() * 100) + (lvlUsr1*5)
        var p2 = (Math.random() * 100) + (lvlUsr2*5)

        if (p1 > p2){
          arr.push(`<input type='hidden' name='player${i+1}' value='player1'>`)
          arrPoints.push(`<br> Point ${i+1} : remporté par ${usr1}`)
        }
        else{
          arr.push(`<input type='hidden' name='player${i+1}' value='player2'>`)
          arrPoints.push(`<br> Point ${i+1} : remporté par ${usr2}`)
        }
        div.innerHTML = arrPoints
    }
    arr.push(`<input type='hidden' name='p1' value='${usr1}'>`)
    arr.push(`<input type='hidden' name='p2' value='${usr2}'>`)
    arr.push('<br> <input type="submit" value="Envoyer au backend">')
    post.innerHTML = arr
}

form.onsubmit = (e) => {
    getValue()
    form.classList.add('active')
    e.preventDefault()
}