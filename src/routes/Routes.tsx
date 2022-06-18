import React from 'react'
// import { Switch } from 'react-router'
import Pages from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Routes() {
    return (
        <div>
            {/* <Switch> */}
                <Pages />
            {/* </Switch> */}
        </div>
    )
}

export default Routes
