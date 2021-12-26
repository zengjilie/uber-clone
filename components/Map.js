import React,{useEffect, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY} from '@env'

const Map = () => {
    const origin = useSelector(selectOrigin); 
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    
    useEffect(()=>{
        if(!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
            edgePadding:{top:50, right:50, bottom: 50, left:50}, animated:true
        })
        console.log(mapRef.current)
    },[origin, destination]) 
        
    return (
        <MapView
            ref={mapRef}
            style={tw `flex-1`}
            mapType='mutedStandard'
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin = {origin.description} 
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY} 
                    strokeWidth={3} 
                    strokeColor='hotpink'
                    
                />
            )}
            {origin?.location && <Marker
                title='Origin'
                identifier='origin'
                coordinate = {{
                    latitude:origin.location.lat,
                    longitude:origin.location.lng
                }}
                description={origin.description}
            
            />}
            {destination?.location && <Marker
                title='Destination'
                identifier='destination'
                coordinate = {{
                    latitude:destination.location.lat,
                    longitude:destination.location.lng
                }}
                description={destination.description}
            />}


        </MapView>
    )
}
export default Map
