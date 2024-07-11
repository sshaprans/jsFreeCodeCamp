"use strict"
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

document.getElementById('check-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');
    const phoneRegex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/i;

    if(!input){
        alert("Please provide a phone number")
    }

    if (phoneRegex.test(input)) {
        resultsDiv.textContent = `Valid US number: ${input}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
    }
});
clear.addEventListener("click", () => {
    result.textContent = "";
});

