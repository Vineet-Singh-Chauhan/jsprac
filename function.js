var n=document.getElementsByClassName("name")[0].value;
function hide(){
    var modal=document.getElementsByClassName("modal")[0];
    var n=document.getElementsByClassName("name")[0].value;
    if(n=="")
        alert("Please Enter your name first");
    else
       
        modal.style.display="none";
    

}
function naam()
{
    var n=document.getElementsByClassName("name")[0].value;
    if(n=="")
        alert("Please Enter your name");
    else
    
        alert("Welcome "+n);
        hide();


}