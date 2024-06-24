import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../../icons/search'
import './index.scss'

export function SearchForm () {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleChangeSearch (event: { target: { value: SetStateAction<string> } }) {
    setQuery(event.target.value)
  }

  function handleSubmit (event: { preventDefault: () => void }) {
    event.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <input type="search" className="form-control" placeholder="Search..." style={{ width: '300px', height: '25px' }} onChange={handleChangeSearch} value={query} />
      <button type="submit" className="btn btn-warning"><Search /></button>
    </form>
  )
}
