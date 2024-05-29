"use strict"

const btn = document.getElementById('check-btn');
btn.addEventListener('click', () =>{
    const res = document.getElementById('result');
    const input = document.getElementById('text-input').value;
    if(input.length <= 0){
        alert("Please input a value");
    }
    const regex = /[()_=\-+.;:'",\/\\|`!@%^&* ]/g;
    const inputText = input.replace(regex, "");
    const inputTest = inputText.split('').reverse().join('');
    if(inputTest.toLowerCase() === inputText.toLowerCase()){
       return  res.innerText = `${input} is a palindrome`;
    }else{
        return  res.innerText = `${input} is not a palindrome`;
    }
})


