document.getElementById("output").style.display = "none";

function kira() {
    let name = document.getElementById("i_name").value;
    document.getElementById("o_name").innerText = name;
    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "table";
}