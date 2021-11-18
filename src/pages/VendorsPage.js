import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VendorContext } from '../context/VendorContext'
import VendorListItem from '../components/VendorListItem'

function VendorPage(){
    const { vendors } = useContext(VendorContext)

    return(
        <div>
            { vendors.map(v => <Link key={v.id} to={`/vendor/${v.id}`}><VendorListItem vendor={v} /></Link>)}
        </div>
    )
}

export default VendorPage