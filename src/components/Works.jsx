import React from 'react'
import barbergrib from '../images/barbergrib.jpeg'
import bijoo from '../images/bijoo.jpeg'
import savenotes from '../images/savenotes.jpeg'
export const Works = () => {

    const gallery = [
        {
            name: 'Barbergrib.by',
            description: 'Website with personal design. Developed by CMS',
            link: 'https://barbergrib.by', 
            src: barbergrib
        },
        {
            name: 'Bijoo.by',
            description: 'Developed by CMS Wordpress, large web store',
            link: 'https://bijoo.by', 
            src: bijoo
        },
        {
            name: 'SaveNotes',
            description: 'PWA created by reactjs. All notes saves locally in browser',
            link: 'https://browsernoteapp.web.app/', 
            src: savenotes
        },
    ] 

    return (
        <div className="works__container">
            <h2 className="works__h2">Works collection</h2>
            <p className="works__title">My websites and applications</p>
            <div className="works__list">
                {
                    gallery.map((data, index) => {
                        return (
                            <div target="_blank" className="works__item">
                                <a href={data.link} className="works__name">{data.name}</a>
                                <div className="works__filter" />
                                <img className="works__preview" src={data.src} alt="" />
                                <p className="works__description">{data.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}