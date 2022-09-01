var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var htmlSet = document.getElementById("set");
var htmlPoints1 = document.getElementById("points1");
var htmlPoints2 = document.getElementById("points2");
var cg1 = document.getElementById("cg1");
var cg2 = document.getElementById("cg2");
var winMessage = document.getElementById("result");

const options = {method: 'GET'};
fetch('http://localhost/tennis/assets/pages/api.json', options)
  .then(response => response.json())
  .then(data => {
    player1.innerText = data[0]
    player2.innerText = data[1]
    console.log(data);
    var count = 1
    var inc = 1

    for (let set = 2; set <= (data.length - 4) ; set+=2) {
      setTimeout(() => {
        let newSet =  document.createElement('th');
          newSet.textContent = `Set ${count}`;
          htmlSet.append(newSet);

          var newP1 =  document.createElement('td');
          newP1.setAttribute("id", `pp1-s${set}`);
          htmlPoints1.append(newP1)

          var newP2 =  document.createElement('td');
          newP2.setAttribute("id", `pp2-s${set}`);
          htmlPoints2.append(newP2)
          count ++
        }, 1000 * inc)

      for (let point = 0; point <= data[set].length - 2; point+=2) {

        setTimeout(() => {
          var htmlPointsP1 = document.getElementById(`pp1-s${set}`);
          var htmlPointsP2 = document.getElementById(`pp2-s${set}`);
          
          htmlPointsP1.innerHTML = `${data[set][point]}`;
          htmlPointsP2.innerHTML = `${data[set][point+1]}`;
          
          cg1.innerHTML = `${data[set+1][point]}`;
          cg2.innerHTML = `${data[set+1][point+1]}`;

        }, 1000 * inc)
        inc++
      }
      
    }
    setTimeout(() => {
    if(data[data.length - 1] = "Gagner") {
      winMessage.innerHTML = `${data[1]} a Gagné`
    } else {
      winMessage.innerHTML = `${data[0]} a Gagné`
    }
  }, 1000 * inc)

  })