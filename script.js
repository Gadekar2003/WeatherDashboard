const API_KEY="dda73325de621eeae4dc061529e8b8c8";
function getWeather(){
  const city=document.getElementById("cityInput").value;
  if(!city) return alert("Please enter a city name");
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response)=>{
    if(!response.ok) throw new Error("City not found");
    return response.json();
  })
  .then((data)=>{
    showWeather(data);
    cityInput.value="";
  })
  .catch((error)=>{
    document.getElementById("weatherResult").innerHTML=`<p style="color:red;">${error.message}</p>`;
  });
}
function showWeather(data){
  const{name,main,weather,wind}=data;
  const result=`
  <h2>${name}</h2>
  <p>🌡️Temp:${main.temp}C</p>
  <p>☁️Weather:${weather[0].description}</p>
  <p>💧Humidity:${main.humidity}%</p>
  <p>🌬️Wind Speed:${wind.speed}m/s</p>
  `;
  document.getElementById("weatherResult").innerHTML=result;

}