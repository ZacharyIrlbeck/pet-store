import { Vendor } from '../type-definitions'

type VendorListItemProps = {
    vendor: Vendor
}

function VendorListItem({ vendor }: VendorListItemProps){
    return(
        <div>
            { vendor.displayname }
        </div>
    )
}

export default VendorListItem 