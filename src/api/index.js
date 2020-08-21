import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableURl = url

    if(country){
        changeableURl = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(changeableURl)

        return {confirmed, deaths, recovered, lastUpdate}
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        
        return data.map(({confirmed, deaths, reportDate: date}) => ({confirmed: confirmed.total, deaths: deaths.total, date}))
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}