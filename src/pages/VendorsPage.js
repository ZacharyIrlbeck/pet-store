import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VendorContext } from '../context/VendorContext'
import VendorListItem from '../components/VendorListItem'

// add on click to take to the vendor profile page. Aiming to re-use/build on profilepage here. 

function VendorPage(){
    const { vendors } = useContext(VendorContext)

    return(
        <div>
            { vendors.map(v => <Link to={`/vendor/${v.id}`}><VendorListItem key={v.id} vendor={v} /></Link>)}
        </div>
    )
}

export default VendorPage