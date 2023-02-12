
var bName = document.getElementById("b_Name");

var urlWeb = document.getElementById("url_Website");


var box = [];

if (localStorage.getItem("bookmark") != null) {
    box = JSON.parse(localStorage.getItem("bookmark"));
    displayList()
}
//======= add WebSite ==========
function addWebsite() {
    var oneSite = {
        nWeb: bName.value,
        urWeb: urlWeb.value
    }
    box.push(oneSite);
    localStorage.setItem("bookmark", JSON.stringify(box));
    clearInput();
    displayList()



}
//========= Save Data ==========

//======= clear Input ==========
function clearInput() {
    bName.value = "";
    urlWeb.value = "";
}
//======= display list =========
function displayList() {
    var markList = ``;
    for (i = 0; i < box.length; i++) {
        markList += `<tr>
        <td>${i + 1}</td>
        <td>${box[i].nWeb}</td>
        <td>${box[i].urWeb}</td>
        <td><button class="btn btn-primary rounded-pill"><a class="text-white text-decoration-none" href="${box[i].urWeb}" target="_blank">Visit</a></button></td>
        <td><button class="btn btn-danger rounded-pill"onclick="delat(${i})">Delat</button></td>
    </tr>`
    }
    document.getElementById("t_body").innerHTML = markList;
}
//======= vist webSite =========
// function Visit(visit) {


// }
//======= delat Item ========= 
function delat(index) {
    box.splice(index, 1)
    displayList();
    localStorage.setItem("bookmark", JSON.stringify(box));

}





