import React from 'react'
import {Card} from 'react-bootstrap'
import cx from 'classnames'
import CountUp from 'react-countup'
import styles from './Card.module.css'

function CardComponent({className, cardTitle, cardSubtitle, lastUpdate, value}) {
    return (
        <Card className={cx(styles.card, className)}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{cardTitle}</Card.Subtitle>
                <Card.Title>
                    <CountUp start={0} end={value} duration={2.75} separator="," />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> 
                    { new Date(lastUpdate).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text>
                    {cardSubtitle}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent
