function getParagraph1()
}
var inputs = [];
for(var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("paral_input_box_" + i).value)
    inputs.join(". ")
    document.getElementById("get_paragraph").innerHTML=Get_paragraph_array;
 document.getElementById("Get_paragraph_button").style.display="none"; 
}
