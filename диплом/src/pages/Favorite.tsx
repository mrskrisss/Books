// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch } from '../redux/store'
// import { fetchPosts } from '../redux/posts-slice'
// import { CardFavorite } from '../components/cardFavorite'
// import { Title } from '../components/title'

// export const Favorite = () => {
//   const dispatch = useDispatch<AppDispatch>()

//   const book = useSelector(state => state.book.item.filter(item => item.isFavorite))
//   const error = useSelector(state => state.book.error)
//   const isLoading = useSelector(state => state.book.isLoading)

//   useEffect(() => {
//     if (book.isFavorite === true) return

//     dispatch(fetchPosts())
//   }, [dispatch])

//   const renderBooks = () => {
//     if (!Array.isArray(books)) return <div>Not Found</div>

//     if (isLoading) return <div>Loading...</div>

//     if (error) return <div className="alert alert-danger">{error}</div>

//     return <>{books?.map((book) => <CardFavorite key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price}/>)}</>
//   }

//   return (
//     <>
//       <Title>Favorites</Title>
//       <div className="wrapper-cards" >
//         {renderBooks()}
//       </div>
//     </>
//   )
// }
