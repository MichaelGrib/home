import React from 'react'

export const Cover = () => {
    return (
        <div className="maxcontainer cover__container">
            <div className="cover__textcontent">
                <h1 className="cover__h1" >Mikhail Grib</h1>
                <p className="cover__pfirst" >Frontend Developer</p>
                <p className="cover__psecond" >Gomel, Belarus is my place where I live. I am 22 years old. I came in web development in 2020. Before programming I was a barber. I've almost 1 year of IT technologies. Now I've goal - to learn: Redux, MongoDB, Design Patterns. But, primary, I want to get more experience in commerce development.    </p>
            </div>
            <div className="squares__container">
                <div className="squares__photo"></div>
                <div className="squares__topanchors">
                    <div className="squares__cube squares__pp"/>
                    <div className="squares__cube squares__ye"/>
                </div>
                <div className="squares__bottomanchors">
                    <div className="squares__cube squares__pn"/>
                    <div className="squares__cube squares__gr"/>
                </div>
            </div>
        </div>
    )
}