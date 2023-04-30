const input = document.querySelectorAll(".input");
const number = document.querySelectorAll(".number");
const label = document.querySelectorAll(".label");
const required = document.querySelectorAll(".required");

document.querySelector(".btn").addEventListener("click", function(){

    if( input[0,1,2].value == "" ){
        for( var i = 0; i < required.length; i++ ){
           required[i].style.display = 'block'; 
        }
        for( var i = 0; 0 < label.length; i++ ){
            label[i].style.color = 'hsl(0, 100%, 67%)';
        }
    }else{
        let birth = input[2].value + '-' + input[1].value + '-' + input[0].value;

        // Tanggal lahir
        let birthdate = new Date(birth);

        // Tanggal hari ini
        let today = new Date();

        // Selisih tgl hari ini dan tgl lahir
        let differentTime = Math.abs(today - birthdate);

        // Jumlah tahun
        let diffYears = Math.floor(differentTime / (1000 * 60 * 60 * 24 * 365.25));

        // Jumlah Bulan
        let diffMonths = Math.floor((differentTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));

        // Jumlah hari
        let diffDays = Math.floor((differentTime % (1000 * 60 * 60 * 24 * 365.25)) % (1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24));

        number[0].innerHTML = diffYears;
        number[1].innerHTML = diffMonths;
        number[2].innerHTML = diffDays;

        for( var i = 0; i < required.length; i++ ){
            required[i].style.display = 'none';
        }
        for( var i = 0; 0 < label.length; i++ ){
            label[i].style.color = 'black';
        }
    }

});

