import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import './yaMap.css';

export const YaMap = () => {

    const mapCenter = () => ({
        center: [45.177910, 36.616308],
        zoom: 10,
    })
    const objectsCoordinates = () => {
        return (
            <div>
                <Placemark
                    geometry={[45.157071, 36.587022]}
                    properties={{
                        hintContent: `123`,
                        balloonContent: "",
                    }}
                    options={{
                        // preset: !c.link ? portIcon.map : cameraIcon.map,
                        iconColor: '#ffba00'
                    }}
                    modules={
                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }
                />

                <Placemark
                    geometry={[45.195504, 36.644513]}
                    properties={{
                        hintContent: `123`,
                        balloonContent: "",
                    }}
                    options={{
                        // preset: !c.link ? portIcon.map : cameraIcon.map,
                        iconColor: '#ffba00'
                    }}
                    modules={
                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }
                />
            </div>
        )
    };

    return (
        <div className={`yamap show`}>
            <YMaps query={{lang: "en_US"}}>
                <Map className='yamap__item'
                     state={{
                         center: [45.177910, 36.616308],
                         zoom: 10,
                     }}>
                    {objectsCoordinates}
                </Map>

            </YMaps>
        </div>
        // <div>
        //     <YMaps query={{lang: "en_US"}}>
        //         <Map state={{
        //             center: [45.177910, 36.616308],
        //             zoom: 10,
        //         }}>
        //             {objectsCoordinates}
        //         </Map>
        //
        //     </YMaps>
        // </div>
    )
};