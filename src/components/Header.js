import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const TopNav = styled.ul`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
list-style-type: none;
`

const NavItem = styled.li`
        
`


export default function Header(){
    const { isLoggedIn, logout } = useContext(AuthContext)

    return(<div>
        <TopNav>
            { isLoggedIn && <NavItem onClick={() => logout() }>Logout</NavItem> }
            { !isLoggedIn && <NavItem><Link to="/login">Login</Link></NavItem> }
            { isLoggedIn && <NavItem><Link to="/profile">My Account</Link></NavItem> }
            { isLoggedIn && <NavItem><Link to="/list">List A Pet</Link></NavItem> }
            <NavItem><Link to="/market">Market</Link></NavItem>
            <NavItem><Link to="/vendors">Vendors</Link></NavItem>
        </TopNav>
    </div>)
}