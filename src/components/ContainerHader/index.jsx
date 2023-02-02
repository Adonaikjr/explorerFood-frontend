/* eslint-disable prettier/prettier */
import ContainerButton, { Container, Logo, Label, Favorites } from './styled'
import polygon from '../../assets/logo.svg'
import { NewButton } from '../NewButton'
import { Input } from '../Input'
import { BsSearch } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/all'
import { useAuth } from '../../hooks/auth'
import icons from '../../assets/icon1.svg'

import { Link } from 'react-router-dom'
export function ContainerHeader() {
    const { signOut } = useAuth()
    return (
        <Container>
            <Link to="/new">
                <Logo>
                    <img src={polygon} alt='polyg' />
                </Logo>
            </Link>
            <Favorites>
                <>Meus Favoritos</>
            </Favorites>
            <Label>
                <Input placeholder="Pratos do dia?🔍" icon={BsSearch} />
            </Label>
            <ContainerButton>
                <NewButton title="Meu pedido">
                    <img src={icons} alt='icon' />
                </NewButton>
            </ContainerButton>
            <IoExitOutline size={30} onClick={signOut} />
        </Container>
    )
}
