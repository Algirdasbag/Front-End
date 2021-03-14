let nr1 = document.getElementById("sk1");
let nr2 = document.getElementById("sk2");
let val1 = document.getElementById("pirmojiValiuta");
let val2 = document.getElementById("antrojiValiuta");

let data = new Date();
let datetime =
  data.getMonth() +
  1 +
  "-" +
  data.getDate() +
  " " +
  data.getHours() +
  ":" +
  data.getMinutes() +
  "; UTC · ";
document.getElementById("data").innerHTML = datetime;

nr1.addEventListener("change", updateNr2);
nr2.addEventListener("change", updateNr1);

function updateValue() {
  document.getElementById("eilute1").innerText =
    nr1.value +
    " " +
    JSON.stringify(
      valiutuKursai[document.getElementById("pirmojiValiuta").value - 1]
        .valiutosTr
    ).substring(1, 4) +
    " atitinka";
  document.getElementById("eilute2").innerText =
    nr2.value +
    " " +
    JSON.stringify(
      valiutuKursai[document.getElementById("antrojiValiuta").value - 1]
        .valiutosTr
    ).substring(1, 4);
}

function updateNr1() {
  nr1.value = Math.round((nr2.value / getRatio()) * 100) / 100;
  updateValue();
  // updateChart();
}

function updateNr2() {
  nr2.value = Math.round(nr1.value * getRatio() * 100) / 100;
  updateValue();
  // updateChart();
}

val1.addEventListener("change",  updateChart0);
val2.addEventListener("change", updateChart0);

function getRatio() {
  let v1 = document.getElementById("pirmojiValiuta").value;
  let v2 = document.getElementById("antrojiValiuta").value;
  let ratio1 = valiutuKursai[v1 - 1].kursas;
  let ratio2 = valiutuKursai[v2 - 1].kursas;
  return ratio2 / ratio1;
}

function updateChart0(){
  updateNr1(); 
  updateNr2();
  updateChart();
}

function updateChart() {
  let valiuta = document.getElementById("antrojiValiuta").value;
  let labelValue = Math.round(getRatio() * 100) / 100;
  Math.random() / 10;
  if (labelValue == 1) {
    dataValues = [1, 1, 1, 1, 1, 1];
  } else {
    dataValues = [getRatio() + (Math.random() / 10), getRatio() + (Math.random() / 10), getRatio() + (Math.random() / 10), getRatio() + (Math.random() / 10), getRatio() + (Math.random() / 10), getRatio() + (Math.random() / 10)];
  }

  let spalvos = ["black", "azure", "red", "green", "blue", "orange", "yellow", "blueviolet", "cornflowerblue", "magenta", "mistyrose"];
  let spalvosNr = Math.round(Math.random() * 10);
//   console.log("spalvos Nr.: " + spalvosNr);
  let spalva = spalvos[spalvosNr];
//   console.log("labelValue: " + labelValue, "spalva: " + spalva);
  chart(spalva, dataValues, "1 : " + labelValue);
}
