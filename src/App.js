import React, { Component } from 'react';
import styles from './App.module.css'
import {fetchData} from './api'
import image from './img/image.png'
import {Cards, Chart, CountryPicker} from './components'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({data})
       
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({data, country: country})
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="convid-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}