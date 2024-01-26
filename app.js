const apikey="d0300d1a2207f30500c2b680c38e9aec";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
let weather=document.querySelector(".weather");

searchbtn.addEventListener("click",()=>{
     checkWeather(searchbox.value);
})
async function checkWeather(city){
  
    try{
      const response=await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
      var data=await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=data.main.temp;
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";      
        let img=document.querySelector(".weather-icon");
        if(data.weather[0].main=="Clouds"){
          img.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
        img.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
          img.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
          img.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
          img.src="mist.png";
        }}
        catch{
          document.querySelector(".city").innerHTML="OOPS!!Data not found";
          document.querySelector(".temp").innerHTML="-";
      document.querySelector(".humidity").innerHTML="-"+"%";
      document.querySelector(".wind").innerHTML="-"+" km/hr"; 
      let img=document.querySelector(".weather-icon");
      img.src="404.png"
        }
      
    
  weather.style.display="block";
    

      


    }