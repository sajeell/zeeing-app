import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function BookDetailScreen({ route, navigation }) {
    const { title, discountRate, coverImage, price } = route.params
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text>{title}</Text>,
            headerBackTitleVisible: false,
        })
    }, [])

    return (
        <View>
            <Text>Title</Text>
            <Text>Author</Text>
            <Text>Description</Text>
        </View>
    )
}
