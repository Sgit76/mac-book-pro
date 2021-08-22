//update price



// handale of memory button
document.getElementById('memory-button1').addEventListener('click',function(){
    const memoryButton1 = document.getElementById('memory-button1').value;
    const memoryButton1Value = parseFloat(memoryButton1);
    // console.log(memoryButton1Value);
    const extraMemoryCost = document.getElementById('extraMemory-cost');
    extraMemoryCost.innerText = memoryButton1Value;

  
    // console.log(bestPriceValue);
});

document.getElementById('memory-button2').addEventListener('click',function(){
    const memoryButton2 = document.getElementById('memory-button2').value;
    const memoryButton2Value = parseFloat(memoryButton2);
    // console.log(memoryButton2Value);
    const extraMemoryCost = document.getElementById('extraMemory-cost');
    extraMemoryCost.innerText = memoryButton2Value;

});

// handale of Storage  button

document.getElementById('storage-button1').addEventListener('click',function(){
    const storageButton1 = document.getElementById('storage-button1').value;
    const storageButton1Value = parseFloat(storageButton1);

    const extraStorageCost = document.getElementById('extraStorage-cost');
    extraStorageCost.innerText = storageButton1Value;
    // console.log(storageButton1Value);

});

document.getElementById('storage-button2').addEventListener('click',function(){
    const storageButton2 = document.getElementById('storage-button2').value;
    const storageButton2Value = parseFloat(storageButton2);

    const extraStorageCost = document.getElementById('extraStorage-cost');
    extraStorageCost.innerText = storageButton2Value;
    // console.log(storageButton2Value);
    

});

document.getElementById('storage-button3').addEventListener('click',function(){
    const storageButton3 = document.getElementById('storage-button3').value;
    const storageButton3Value = parseFloat(storageButton3);

    const extraStorageCost = document.getElementById('extraStorage-cost');
    extraStorageCost.innerText = storageButton3Value;
    // console.log(storageButton3Value);
    

});

//delivery button handel

document.getElementById('delivery-button1').addEventListener('click',function(){
    const deliveryButton1 = document.getElementById('delivery-button1').value;
    const deliveryButton1Value = parseFloat(deliveryButton1);

    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = deliveryButton1Value;
    
});

document.getElementById('delivery-button2').addEventListener('click',function(){
    const deliveryButton2 = document.getElementById('delivery-button2').value;
    const deliveryButton2Value = parseFloat(deliveryButton2);

    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = deliveryButton2Value;
});





