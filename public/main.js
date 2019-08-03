let lead = {};

const btn = document.querySelector('#submit');
const cityInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');
const zipInput = document.querySelector('#zip');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value; 
    const state = stateInput.value;
    const zip = zipInput.value;
        lead = {
            city: city,
            state: state,
            zip: zip
        };
    console.log('lead info: ', lead);
    
        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lead),
        }
    fetch('/api', options);  
});








