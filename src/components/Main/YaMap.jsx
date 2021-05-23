import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import './yaMap.css';

export const YaMap = () => {

    const mapCenter = {
        center: [45.177910, 36.616308],
        zoom: 12,
    };

    const coordinates = [
        [45.157071, 36.587022],
        [45.195504, 36.644513],
    ];

    const objectsCoordinates = coordinates.map((coordinate, i) =>
            <div>
                <Placemark
                    geometry={coordinate}
                    properties={{
                        hintContent: `123`,
                        balloonContent: "241",
                    }}
                    options={{
                        // preset: "islands#redCircleDotIcon",
                        preset: i ? "islands#blueAutoIcon" : "islands#blueWaterwayIcon",
                        // iconColor: '#ffba00'
                        iconColor: 'blue'
                    }}
                    modules={
                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }
                />
            </div>
    )

    return (
        <div className={`yamap show`}>
            <YMaps query={{lang: "en_US"}}>
                <Map className='yamap__item'
                     state={mapCenter}>
                    {objectsCoordinates}
                </Map>

            </YMaps>
        </div>
    )
};