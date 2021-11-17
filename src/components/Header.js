import styled from 'styled-components'
import SearchBar from './SearchBar'

export default function Header(){
    const TopNav = styled.ul`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        list-style-type: none;
    `

    const NavItem = styled.li`
        
    `

    return(<div>
        <TopNav>
            <SearchBar />
            <NavItem>Login</NavItem>
            <NavItem>Sign Up</NavItem>
            <NavItem>About Us</NavItem>
        </TopNav>
    </div>)
}