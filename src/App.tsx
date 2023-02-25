import { Header } from './header/Header'
import { GifProvider } from './context/GifProvider'
import { Body } from './body/Body'

function App () {
  return (
    <GifProvider>
      <div className='app'>
        <Header />
        <Body />
      </div>
    </GifProvider>
  )
}

export default App
