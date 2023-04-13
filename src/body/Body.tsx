import { ListGifs, ListSearch } from './components'

export const Body = () => {
  return (
    <div className="body">
      <ListSearch className='divsearch' />
      <ListGifs className='divGrid' />
    </div>
  )
}
