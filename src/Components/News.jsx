import pogoda from './Photo/pogoda.png'
import Photo3 from './Photo/Photo3.jpg'
import React from "react";


export function News() {
    return <div className="BackForNews">
        <div className="BlockNews">
            <h1>Смачні смаколики</h1>
            <img src={Photo3} />
        </div>

        <div className="BlockNews">
            <h1>Прикольна сьогодні погода</h1>
            <h2>Можна піти погуляти)</h2>
            <div className="Pogoda">
                <img src={pogoda} />
            </div>


        </div>
    </div>

}
