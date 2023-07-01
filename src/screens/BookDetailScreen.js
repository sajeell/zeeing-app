import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function BookDetailScreen({ route, navigation }) {
    const { title, discountRate, coverImage, price, description } = route.params
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text>{title}</Text>,
            headerBackTitleVisible: false,
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.coverImage} source={{ uri: coverImage }} resizeMode="cover" />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.discount}>{discountRate}%</Text>
                    <Text style={styles.price}>Price: {price} 원</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverImage: {
        width: '100%',
        height: 450,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    description: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 16,
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
