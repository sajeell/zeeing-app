import { BOOKS_ENDPOINT, BOOK_DETAIL_ENDPOINT } from '../utils/apiRoutes'

async function fetchBooks() {
    try {
        const response = await fetch(BOOKS_ENDPOINT)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

async function fetchBookDetail(id) {
    try {
        const response = await fetch(`${BOOK_DETAIL_ENDPOINT}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export { fetchBooks, fetchBookDetail }
