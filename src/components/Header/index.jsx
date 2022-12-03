import { HeaderContainer, ContainerProfile, ContainerLogout } from './styled'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()

  return (
    <HeaderContainer>
      <ContainerProfile to="/profile">
        <img src="https://github.com/adonaikjr.png" alt="foto user" />
        <div>
          <span>Bem-vindo</span>
          <strong>Adonai</strong>
        </div>
      </ContainerProfile>

      <ContainerLogout onClick={signOut}>
        <RiShutDownLine />
      </ContainerLogout>
    </HeaderContainer>
  )
}
