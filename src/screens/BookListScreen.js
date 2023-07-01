import React from 'react'
import { View, FlatList, Dimensions, StyleSheet } from 'react-native'
import Card from '../components/Card'

const BOOKS = [
    {
        id: '1',
        title: '레이블라우스',
        discountRate: 20,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 9.99,
    },
    {
        id: '2',
        title: '레이블라우스',
        discountRate: 15,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 12.99,
    },
    {
        id: '3',
        title: '레이블라우스',
        discountRate: 10,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 7.99,
    },
]

const BookListScreen = () => {
    const renderBookCard = ({ item }) => (
        <Card title={item.title} discountRate={item.discountRate} coverImage={item.coverImage} price={item.price} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={BOOKS}
                renderItem={renderBookCard}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default BookListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 1,
    },
})
