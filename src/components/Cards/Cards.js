import React from 'react';
import styles from './Cards.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import CardComponent from './Card/Card'

function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
    
    if (!confirmed) {
        return( <h1>Loading ....</h1>)
    }

    return (
        <Container className={styles.container}>
            <Row>
                <Col sm={12} md={4}>
                    <CardComponent 
                        className={styles.infected}
                        cardTitle= "Infected"
                        value={confirmed.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of active cases from COVID-19."
                    />
                </Col>

                <Col sm={12} md={4}>
                    <CardComponent 
                        className={styles.recovered}
                        cardTitle= "Recovered"
                        value={recovered.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of recoveries from COVID-19."
                    />
                </Col>

                <Col sm={12} md={4}>
                    <CardComponent 
                         className={styles.deaths}
                         cardTitle="Deaths"
                         value={deaths.value}
                         lastUpdate={lastUpdate}
                         cardSubtitle="Number of deaths caused by COVID-19."
                    />
                </Col>

            </Row>
        </Container>
    )
}

export default Cards
