import { Button, HeaderForm, Icon, Input } from './components'

export const Header = () => {
  return (
    <>
      <header className="header" title="Buscar tu Gif">
        <HeaderForm className='header__form'>
          <Icon className='header__containIcon' />
          <Input className='header__containInput' />
          <Button className='header__ContainButton' />
        </HeaderForm>
      </header>
    </>
  )
}
