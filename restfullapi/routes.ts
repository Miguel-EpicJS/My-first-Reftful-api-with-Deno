import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook, addBook, updateBook, deleteBook } from './controllers.ts'

const router = new Router()
router.get('/books', getBooks)
    .get('/books/:isnb', getBook)
    .post('/books', addBook)
    .put('/books/:isbn', updateBook)
    .delete('/books/:isbn', deleteBook)

export default router
