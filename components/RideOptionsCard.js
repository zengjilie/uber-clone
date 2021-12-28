import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import { TouchableOpacity, StyleSheet,SafeAreaView, Text, View, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'

const RideOptionsCard = () => {
    const data = [
        {
            id:'Uber-X-123',
            title:'Uber X',
            multiplier:1,
            image:'https://links.papareact.com/3pn',
        },
        {
            id:'Uber-XL-456',
            title:'Uber XL',
            multiplier:1.2,
            image:'https://links.papareact.com/5w8',
        },
        {
            id:'Uber-LUX-789',
            title:'Uber LUX',
            multiplier:1.75,
            image:'https://links.papareact.com/7pf',
        }
    ];

    const navigation = useNavigation();

    const [selected, setSelected] = useState(null);

    const travelTimeInfo = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 0.025;
    return (
        <SafeAreaView style = {tw`bg-white flex-1`}>
            <TouchableOpacity
                style = {tw`absolute top-3 left-4 p-3 z-50 rounded-full`} 
                onPress = {()=> navigation.navigate('NavigateCard')}
            >
                <Icon
                    name = 'chevron-left' 
                    type = 'fontawesome'
                />
            </TouchableOpacity>
            <Text style = {tw `text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance?.text}</Text>

            <FlatList
                data = {data} 
                keyExtractor={item => item.id}
                renderItem = {({item:{id,title,multiplier,image},item}) => (
                    <TouchableOpacity 
                        onPress = {()=> setSelected(item)}
                        style = {tw`flex-row justify-between items-center px-6 ${id === selected?.id? 'bg-gray-200':''}`} 
                    >
                        <Image
                            style = {{
                                width:100,
                                height:100,
                                resizeMode:'contain'
                            }} 
                            source={{uri:image}}
                        />
                        <View>
                            <Text style = {tw`text-xl font-semibold`}>{title}</Text>
                            <Text style = {tw`text-xs`}>Traverl Time {travelTimeInfo?.duration?.text}</Text>
                        </View>
                        <Text style = {tw`text-xl`}>
                            {new Intl.NumberFormat(
                                'en-US',
                                {
                                    style:'currency',
                                    currency:'USD'
                                }
                            ).format(travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * multiplier)}
                        </Text>
                    </TouchableOpacity>
                )} 
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity
                    disabled = {!selected}
                    style = {tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`} 
                >
                    <Text style = {tw`text-white text-center text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
