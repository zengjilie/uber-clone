import React from 'react'
import {TouchableOpacity,  StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import NavFavoriates from './NavFavoriates'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const toInputBoxStyles = {
        container:{
            backgroundColor:'white',
            paddingTop:20,
            flex:0
        },
        textInput:{
            backgroundColor:'#dddddf',
            borderRadius: 0,
            fontSize: 18,
        },
        textInputContainer:{
            paddingHorizontal: 20,
            paddingBottom:0,
        }
    }

    return (
        <SafeAreaView style = {tw`bg-white flex-1`}>
            <Text style = {tw`text-center py-5 text-xl`}>Something</Text>
            <View style = {tw `border-t border-gray-200`}>
                <GooglePlacesAutocomplete
                    placeholder='Where to go?'
                    styles = {toInputBoxStyles}
                    onPress={(data,details = null) =>{
                        dispatch(
                            setDestination({
                                location:details.geometry.location,
                                description: data.description
                            })
                        )
                        navigation.navigate('RideOptionsCard')
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={2}
                    nearbyPlacesAPI='GooglePlacesSearch' 
                debounce={400}
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language:'en',
                    }}
                />
                    
                <NavFavoriates/>
            </View>
            <View style = {tw`flex flex-row justify-evenly mt-auto`}>
                <TouchableOpacity 
                    style = {tw`flex-row justify-between rounded-full bg-black w-24 px-4 py-3`}
                    onPress ={()=> navigation.navigate('RideOptionsCard')} 
                    >
                    <Icon
                        name = 'car' 
                        type = 'font-awesome'
                        color = 'white'
                        size = {16}
                        
                    />
                    
                    <Text
                        style = {tw`text-white text-center`} 
                    >
                        Rides
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {tw`flex-row justify-between rounded-full bg-white w-24 px-4 py-3`}>
                    <Icon
                        name = 'fast-food-outline' 
                        type = 'ionicon'
                        color = 'black'
                        size = {16}
                    />
                    
                    <Text
                        style = {tw`text-center`} 
                    >
                       Eats 
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
