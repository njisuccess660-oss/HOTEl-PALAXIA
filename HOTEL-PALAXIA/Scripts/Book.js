document.getElementById('generateBtn').addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('input[name="item"]:checked');
    const paymentForm = document.getElementById('paymentForm')
    const container = document.getElementById('selectedItemsContainer');
    container.innerHTML='';
    if(checkboxes.length === 0){
        alert('Please select at least one item.');
        return;
    }
    checkboxes.forEach((cb, index)=>{
        const p = document.createElement('p');
        p.innerHTML=`<strong>Selected Item: </strong> <input type="text" name="pay_item_${index}" value="${cb.value}">`; 
        container.appendChild(p);
    });
    paymentForm.style.display='block';

});