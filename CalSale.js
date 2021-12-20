document.getElementById("output").style.display = "none";

function kira() {
    let name = document.getElementById("i_name").value;
    let yes = document.getElementById("yes").checked;
    let no = document.getElementById("no").checked;
    let name1 = document.getElementById("i_name1").value;
    let name2 = document.getElementById("i_name2").value;
    let unitprice1 = document.getElementById("i_unitprice1").value;
    let unitprice2 = document.getElementById("i_unitprice2").value;
    let Quantity1 = document.getElementById("i_quantity1").value;
    let Quantity2 = document.getElementById("i_quantity2").value;

    let total1 = unitprice1 * Quantity1;
    let total2 = unitprice2 * Quantity2;
    

    document.getElementById("o_name").innerText = name;
    document.getElementById("o_yes").checked = yes;
    document.getElementById("o_no").checked = no;
    document.getElementById("o_name1").innerText = name1;
    document.getElementById("o_name2").innerText = name2;
    document.getElementById("o_unitprice1").innerText = unitprice1;
    document.getElementById("o_unitprice2").innerText = unitprice2;
    document.getElementById("o_quantity1").innerText = Quantity1;
    document.getElementById("o_quantity2").innerText = Quantity2;

    document.getElementById("total1").innerText = total1;
    document.getElementById("total2").innerText = total2;

    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "table";
}

