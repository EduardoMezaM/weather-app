import { getWeather, getWeatherGIF } from "./api.js";

const data = await getWeather("London");
const GIFdata = await getWeatherGIF(data.currentConditions.icon);

export async function displayWeather() {
    console.log(data);
    console.log(data.address);
    console.log(data.currentConditions.temp);
    console.log(data.currentConditions.icon);
    console.log(data.description);
    
    console.log("Tomorrow:")
    console.log(data.days[0].tempmax);
    console.log(data.days[0].tempmin);    
    console.log(data.days[0].icon);

}

export async function displayWeatherGIF() {
    console.log(GIFdata.data.images.original.url);
}