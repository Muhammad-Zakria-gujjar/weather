const apikey="4b99ce8951120a6b328639aeed618918";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".searchBox");
const b1 = document.querySelector(".b1");




async function checkweather(city){
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidty").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";  
    
}


b1.addEventListener("click",()=>{

checkweather(searchBox.value);
})

