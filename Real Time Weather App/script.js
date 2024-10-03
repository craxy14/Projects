const key = "DQKS16UnocNexif1MNjzZmxuzCXt6AvO"

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`

    const responce = await fetch(base + query);
    const data = await responce.json();
    console.log(data[0])
}






const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const responce = await fetch(base + query)
    const data = await responce.json()

    return data[0]

}

