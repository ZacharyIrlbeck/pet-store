import { Link } from 'react-router-dom'
import { useVendorContext } from '../context/VendorContext'
import VendorListItem from '../components/VendorListItem'

function VendorPage(){
    const { vendors } = useVendorContext()

    return(
        <div>
            { vendors.map(v => <Link key={v.id} to={`/vendor/${v.id}`}><VendorListItem vendor={v} /></Link>)}
        </div>
    )
}

export default VendorPage