function valthisform()
{
    var checkboxes=document.getElementsByName("reason");
    var okay=false;
    for(var i=0;i<checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
        {
            okay=true;
            break;
        }
        
    }
    if(okay) alert("Reason selected");
        else
        alert("Kindly select a reason");

}
function terms_changed(termsCheckBox)
{
    if(termsCheckBox.checked)
    {
        document.getElementById("marg").disabled=false;
    }
    else{
        document.getElementById("marg").disabled=true;
    }
}