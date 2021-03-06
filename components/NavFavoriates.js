import React from 'react'
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:'123',
        icon:'home',
        location:'Home',
        destination:'7205 Hart Ln, Austin, TX, USA',
    },
    {
        id:'456',
        icon:'briefcase',
        location:'Work',
        destination:'Google Austin, West 2nd Street, Austin, TX, USA',
    }
];

const NavFavoriates = () => {
    return (
        <FlatList
            data = {data} 
            keyExtractor = {item => item.id} 
            ItemSeparatorComponent={() => (
                <View
                    style = {[tw`bg-gray-200`,{height:0.5}]}    
                />
            )}
            renderItem = {({item:{icon,location,destination}}) => (
                <TouchableOpacity 
                    style = {tw`flex-row items-center p-5`}
                    onPress={()=>{

                    }} 
                >
                    <Icon
                        style ={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name = {icon}
                        type = 'ionicon'
                        color = 'white'
                        size = {18}
                    />
                    <View>
                        <Text style = {tw`font-semibold text-lg`}>{location}</Text>
                        <Text style = {tw`text-gray-500 text-xs`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavoriates

const styles = StyleSheet.create({})
