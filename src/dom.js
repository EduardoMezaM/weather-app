import { getWeather, getWeatherGIF } from "./api.js";

const city = document.getElementById('cityHeader');
const temp = document.getElementById('temp');
const conditions = document.getElementById('conditions');
const description = document.getElementById('description');
const cityInput = document.getElementById('cityInput');
const img = document.getElementById('image');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const tomorrowCond = document.getElementById('tomorrowCond');
const tomorrowDesc = document.getElementById('tomorrowDesc');

 async function displayWeather(data) {
    console.log(data.address);
    console.log(data.currentConditions.temp);
    console.log(data.currentConditions.icon);
    console.log(data.description);

    city.innerText = data.address;
    temp.innerText = data.currentConditions.temp;
    conditions.innerText = data.currentConditions.icon;
    description.innerText = data.description;
    
    console.log("Tomorrow:")
    console.log(data.days[0].tempmax);
    console.log(data.days[0].tempmin);    
    console.log(data.days[0].icon);

    tempMax.innerText = data.days[0].tempmax;
    tempMin.innerText = data.days[0].tempmin;    
    tomorrowCond.innerText = data.days[0].icon;
    tomorrowDesc.innerText = data.days[0].description;

}

async function displayWeatherGIF(GIFdata) {
    console.log(GIFdata.data.images.original.url);
    img.src = GIFdata.data.images.original.url;
}

export async function displayAll(){

    const cityValue = cityInput.value ? cityInput.value : "London";
   // cityInput ? cityValue = cityInput.value : cityValue = 'London';

    const data = await getWeather(cityValue);
    const GIFdata = await getWeatherGIF(data.currentConditions.icon);

    displayWeather(data);
    displayWeatherGIF(GIFdata);
}