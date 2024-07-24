const apiKey="ddefa62a9971e1f11f1c35ada17f6a07";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})