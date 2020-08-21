import React, {useState, useEffect} from 'react';
import {Form, option} from 'react-bootstrap'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

function CountryPicker({handleCountryChange}) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }

        fetchAPI();
    }, [])

    return (
        <Form.Control as="select" className={styles.formControl} 
            defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </Form.Control>
    )
}

export default CountryPicker
