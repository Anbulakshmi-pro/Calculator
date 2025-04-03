function dis(x)
{
    if(document.getElementById("input").value==0)
{
        document.getElementById("input").value="";
        document.getElementById("input").value=x;
}
else{
    let inputfield=document.getElementById("input");
    let current=inputfield.value;
    let lastchar=current.slice(-1);
    if(["+","-","*","/","."].includes(lastchar) && ["+","-","*","/","."].includes(x) )
    return;
    else
    document.getElementById("input").value += x;
}
}
function solve()
{
    var x=document.getElementById("input").value;
    var y=eval(x);
    document.getElementById("input").value=y;
}
function clean()
{
    document.getElementById("input").value=0;
}