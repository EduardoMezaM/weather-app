export async function getWeather (city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=8QST3F7ZZXRD7LYP3RXEYRTLS`);

    if(!response.ok) {
        throw new Error("City not found...");
    }

    return response.json();
}