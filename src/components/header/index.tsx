import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import Logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="ignite-logo" />
      <nav>
        <NavLink to="/" end title="timer">
          <Timer size={25} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={25} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
