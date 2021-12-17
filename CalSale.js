document.getElementById("output").style.display = "none";

function kira() {
    let name = document.getElementById("i_name").value;
    let yes = document.getElementById("yes").checked;
    let no = document.getElementById("no").checked;
    let name1 = document.getElementById("i_name1").value;
    let unitprice = document.getElementById("i_unitprice").value;

    document.getElementById("o_name").innerText = name;
    document.getElementById("o_yes").checked = yes;
    document.getElementById("o_no").checked = no;
    document.getElementById("o_name1").innerText = name1;
    document.getElementsByName("o_unitprice").innerText = unitprice;

    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "table";
}

