const form = document.querySelector('form')
const result = document.querySelector('#results')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    if(height===''|| isNaN(height) || height<0){
        alert('Enter valid height')
    }
    else if(weight===''|| isNaN(weight) || weight<0){
        alert('Enter valid weight')
    }
    else{
        const bmi = (weight*1000/(height*height)).toFixed(2)
        result.innerHTML=`<h3>${bmi}</h3>`
    }
})