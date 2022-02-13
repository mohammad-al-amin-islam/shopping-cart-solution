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