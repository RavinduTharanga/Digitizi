function display_Features(){

    document.getElementById("tab1").style.border = "0px solid #1e90ff";
    document.getElementById("tab2").style.border = "1px solid #1e90ff";
    document.getElementById("tab2").style.borderBottom = "0";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab1").style.backgroundColor = "transparent";
    document.getElementById("tab3").style.border = "0px solid #1e90ff";
    document.getElementById("tab3").style.backgroundColor = "transparent";
    document.getElementById("F").style.display = "block";
    document.getElementById("Spec").style.display = "none";
    document.getElementById("Overview").style.display = "none";
}

function display_Overview(){

    document.getElementById("tab1").style.border = "1px solid #1e90ff";
    document.getElementById("tab2").style.border = "0px solid #1e90ff";
    document.getElementById("tab1").style.borderBottom = "0";
    document.getElementById("tab1").style.position = "absoulte";
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "transparent";
    document.getElementById("tab3").style.border = "0px solid #1e90ff";
    document.getElementById("tab3").style.backgroundColor = "transparent";
    document.getElementById("Spec").style.display = "none";
    document.getElementById("F").style.display = "none";
    document.getElementById("Overview").style.display = "block";

}
function display_Spec(){

    document.getElementById("tab1").style.border = "0px solid #1e90ff";
    document.getElementById("tab2").style.border = "0px solid #1e90ff";
    document.getElementById("tab3").style.border = "1px solid #1e90ff";

    document.getElementById("tab3").style.borderBottom = "0";
    document.getElementById("tab3").style.position = "absoulte";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab1").style.backgroundColor = "transparent";
    document.getElementById("tab2").style.backgroundColor = "transparent";
    document.getElementById("F").style.display = "none";
    document.getElementById("Spec").style.display = "block";
    document.getElementById("Overview").style.display = "none";

}