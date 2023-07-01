import React from 'react'

export default function BookDetailScreen({ route, navigation }) {
    const { book } = route.params
    return (
        <View>
            <Text>{book.title}</Text>
            <Text>{book.author}</Text>
            <Text>{book.description}</Text>
        </View>
    )
}
