import React from "react"
import geomark from "../images/geomark.png"

export default function Entry(props) {
    return (
        <div className="entry">
            <img src={`/src/images/${props.image}`}/>
            <div className="entry--info">
                <div className="entry--top">
                    <img src={geomark}/>
                    <h3>{props.country.toUpperCase()}</h3>
                    <a href={props.googlemaps}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.start} - {props.end}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}