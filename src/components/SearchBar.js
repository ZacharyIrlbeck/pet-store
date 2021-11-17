import styled from 'styled-components'

export default function SearchBar(){
    const SearchBar = styled.div`
        
    `

    return(<div>
        <input type="text" placeholder="Find your pet today!"/>
        <button>Search</button>
    </div>)
}