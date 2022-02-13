function updateProductNumber(product,isTrue,num) {
    const inputValue = document.getElementById(product+'-number');
    let newValue = parseInt(inputValue.value);
    if (isTrue) {
        newValue = newValue + 1;
    }
    else if (newValue > 0) {
        newValue = newValue - 1;
    }
    inputValue.value = newValue;

    //update product total
    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText = newValue * num;

    //total calculation
    totalCalculation();
}
function getInputValue (product){
    const inputValue = document.getElementById(product+'-number');
    const value = parseInt(inputValue.value);
    return value;
}
function totalCalculation(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal/10;
    console.log(tax)
    document.getElementById('tax-amount').innerText = tax;
    const totalPrice = subTotal + tax;

    //sub toal ouput
    const totalOutput = document.getElementById('sub-total');
    totalOutput.innerText = subTotal ;

    //total price output
    document.getElementById('total-price').innerText = totalPrice;

}

//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',true,1219);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',false,1219);
})

//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',true,59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',false,59);
})