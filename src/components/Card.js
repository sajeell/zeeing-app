import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Card = ({ title, discountRate, coverImage, price, description }) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('BookDetailScreen', { title, discountRate, coverImage, price, description })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: coverImage }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.detailsBottom}>
                        <Text style={styles.discount}>{discountRate} %</Text>
                        <Text style={styles.price}>{price} 원</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
    },
    card: {
        width: 187,
        height: 257,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 150,
    },
    details: {
        marginTop: 10,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailsBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    discount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
