let patientInfo = document.querySelector('.patient-info');
let info2 = document.querySelector('.info2');
let info1 = document.querySelector('.info1');
let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let li = document.querySelectorAll('li');
let dot = document.querySelector('.dot')

dark.addEventListener('click', function(){
    patientInfo.style.background = 'black';
    patientInfo.style.color = 'wheat';
    info1.style.color = 'rgb(119, 108, 108)';
    info2.style.color = 'rgb(119, 108, 109)';
    dark.classList.add('dot');
    light.classList.remove('dot');
})
light.addEventListener('click', function(){
    patientInfo.style.background = 'wheat';
    patientInfo.style.color = 'black';
    info1.style.color = 'black';
    info2.style.color = 'black';
    light.classList.add('dot');
    dark.classList.remove('dot');
})