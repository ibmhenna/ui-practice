function tax(){
    let price=document.getElementById("price").value;
    let tax=document.getElementById("tax").value;
    calculatedTax=(price*1)+(price*tax/100);
    document.getElementById("calculatedTax").value=calculatedTax;
}
