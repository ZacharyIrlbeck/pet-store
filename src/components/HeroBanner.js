import styled from 'styled-components'
import faker from 'faker'
import SearchBar from './SearchBar'

const Banner = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${faker.image.image()}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    font-size: 10em;
`

// const BannerContent = styled.div`
//     height: 100%;
//     width: 100%;
//     color: white;
// `

// bit short on time, waiting on the search bar for now.

export default function HeroBanner(){ 
    return(<Banner>
        {/* <SearchBar /> */}
    </Banner>)
}