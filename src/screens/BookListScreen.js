import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Card from '../components/Card'
import fetchBooks from '../services/ApiService'

const BOOKS = [
    {
        id: '1',
        title: '레이블라우스',
        discountRate: 20,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        title: '레이블라우스',
        discountRate: 15,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 12.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        title: '레이블라우스',
        discountRate: 10,
        coverImage: 'https://dummyimage.com/187/000/919191',
        price: 7.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]

const BookListScreen = () => {
    const [books, setBooks] = useState(BOOKS)
    const [refreshing, setRefreshing] = useState(false)

    const renderBookCard = ({ item }) => (
        <Card
            title={item.title}
            discountRate={item.discountRate}
            coverImage={item.coverImage}
            price={item.price}
            description={item.description}
        />
    )
    const handleRefresh = () => {
        setRefreshing(true)

        fetchBooks().then(data => {
            setBooks(data)
        })
        setRefreshing(false)
    }
    const handleLoadMore = () => {
        setTimeout(() => {
            fetchBooks().then(data => {
                setBooks(data)
            })
        }, 2000)
    }

    useEffect(() => {
        fetchBooks().then(data => {
            setBooks(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderBookCard}
                keyExtractor={() => Math.random()}
                numColumns={2}
                contentContainerStyle={styles.contentContainer}
                onEndReachedThreshold={0.8}
                onEndReached={handleLoadMore}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
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
