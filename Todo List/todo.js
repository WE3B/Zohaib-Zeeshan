const parent = document.getElementById('para-div');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    const newParag = document.createElement('p');
    const text = document.getElementById('text').value;
    const para = document.createTextNode(text);
    newParag.appendChild(para);
    parent.appendChild(newParag).style.color ='red';
    
})