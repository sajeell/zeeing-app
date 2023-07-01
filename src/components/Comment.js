import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const CommentComponent = () => {
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState([
        {
            id: Math.random().toString(),
            profileImage: 'https://dummyimage.com/34x34',
            userName: 'John Doe',
            commentText: 'This is a comment',
            likes: Math.floor(Math.random() * 100),
            messages: Math.floor(Math.random() * 100),
        },
    ])

    const addComment = () => {
        setCommentText('')
    }

    return (
        <ScrollView>
            {/* Render the list of comments */}
            {comments.map(comment => (
                <View key={comment.id} style={styles.commentContainer}>
                    <Image source={{ uri: comment.profileImage }} style={styles.profileImage} />
                    <View style={styles.commentDetails}>
                        <View style={styles.commentHeader}>
                            <Text style={styles.userName}>{comment.userName}</Text>
                            <Text style={styles.threeDots}>...</Text>
                        </View>
                        <Text style={styles.commentMessage}>{comment.commentText}</Text>
                        <View style={styles.commentActions}>
                            <Text style={styles.like}>
                                <Text style={styles.likeIcon}>❤️</Text>
                                {comment.likes}
                            </Text>
                            <Text style={styles.message}>
                                <Text style={styles.messageIcon}>💬</Text>
                                {comment.messages}
                            </Text>
                        </View>
                    </View>
                </View>
            ))}

            {/* Render the user input section */}
            <View style={styles.userInput}>
                <Image source={{ uri: 'https://dummyimage.com/34x34' }} style={styles.profileImage} />
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Write a comment..."
                        value={commentText}
                        onTextInput={text => setCommentText(text)}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={addComment}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = {
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
    },
    profileImage: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginRight: 10,
    },
    commentDetails: {
        flex: 1,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    threeDots: {
        fontSize: 24,
    },
    commentMessage: {
        marginBottom: 5,
    },
    commentActions: {
        flexDirection: 'row',
    },
    like: {
        flexDirection: 'row',
        marginRight: 10,
    },
    likeIcon: {
        marginRight: 5,
    },
    message: {
        flexDirection: 'row',
    },
    messageIcon: {
        marginRight: 5,
    },
    userInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
    },
    sendButton: {
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        border: 'none',
        color: 'black',
    },
    sendButtonText: {
        color: 'black',
    },
}

export default CommentComponent
