import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
            <NavItem><Link to="/market">Market</Link></NavItem>
            <NavItem><Link to="/login">Login</Link></NavItem>
            <NavItem><Link to="/signup">Sign Up</Link></NavItem>
            <NavItem><Link to="/about">About Us</Link></NavItem>
        </TopNav>
    </div>)
}