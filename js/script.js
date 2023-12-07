let btnLuas = document.getElementById("btnLuas");
let btnKeliling = document.getElementById("btnKeliling");
let keliling = document.getElementById("keliling");
let luas = document.getElementById("luas");

btnKeliling.addEventListener('click', function(){
    keliling.classList.add("d-flex");
    keliling.classList.remove("d-none");
    luas.classList.add("d-none");
})

btnLuas.addEventListener('click', function(){
    luas.classList.add("d-flex");
    luas.classList.remove("d-none");
    keliling.classList.add("d-none");
})

let inputAlas = document.getElementById("inputAlas");
let inputTinggi = document.getElementById("inputTinggi");
let btnHitung = document.getElementById("btn-hitung");
let hasilLuas = document.getElementById("hasilLuas");
let btnRes = document.getElementById("btn-reset");

btnHitung.addEventListener('click', function(){
    hasil = 1/2*inputAlas.value*inputTinggi.value;
    hasilLuas.innerHTML = hasil;
    
})

btnRes.addEventListener('click', function(){
    inputAlas.value = "";
    inputTinggi.value = "";
    hasilLuas.innerHTML = "";
})

let inputSisi1 = document.getElementById("inputSisi1");
let inputSisi2 = document.getElementById("inputSisi2");
let inputSisi3 = document.getElementById("inputSisi3");
let btnhitung = document.getElementById("btnHitung");
let hasilKeliling = document.getElementById("hasilKeliling");
let btnReset = document.getElementById("btnReset");

btnhitung.addEventListener('click', function(){
    hasil = parseInt(inputSisi1.value)+parseInt(inputSisi2.value)+parseInt(inputSisi3.value);
    hasilKeliling.innerHTML = hasil;
})

btnReset.addEventListener('click', function(){
    inputSisi1.value = "";
    inputSisi2.value = "";
    inputSisi3.value = "";
    hasilKeliling.innerHTML = "";
})









