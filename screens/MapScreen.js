import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const MapScreen = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    return (
        <View>
            <TouchableOpacity 
                style={tw`absolute z-50 top-16 left-8 rounded-full bg-white p-3 shadow-lg`}
                onPress={()=>navigation.navigate('HomeScreen')}
            >
                <Icon
                    name='menu' 
                />
            </TouchableOpacity>
            <View style={tw `h-1/2`}>
                <Map/>
            </View>
            <View style = {tw `h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen 
                        name = 'NavigateCard' 
                        component = {NavigateCard}
                        options = {{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name = 'RideOptionsCard' 
                        component = {RideOptionsCard}
                        options = {{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
