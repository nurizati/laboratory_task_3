document.getElementById("output").style.display = "none";

function kira() {
    let name = document.getElementById("i_name").value;
  //  let membercard = document.getElementsByName("membercard").value;

    document.getElementById("o_name").innerText = name;
   // document.getElementById("o_mc").innerText = membercard;

    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "table";
}

