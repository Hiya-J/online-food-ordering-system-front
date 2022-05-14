import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/menu"><HomeInfoCard infoImg="https://binaries.templates.cdn.office.net/support/templates/en-us/lt33736603_quantized.png" infoTitle="Order your favourite food" infoLink="Check the Menu"/></Link>            
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
