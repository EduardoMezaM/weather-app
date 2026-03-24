export async function getWeather (city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=8QST3F7ZZXRD7LYP3RXEYRTLS`);

    if(!response.ok) {
        throw new Error("City not found...");
    }

    return response.json();
}

export async function getWeatherGIF(weather) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=GqJQAL6gHr3vWlfADm4Lh20R5ZyFVbAQ&s=${weather}`);

    if(!response.ok) {
        throw new Error('Image could not load correctly...');
    }

    return response.json();
}