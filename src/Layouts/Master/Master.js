import React, { Fragment } from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function MasterPage (props) {
    return (
        <Fragment>

            <Header handleClick={props.handleClick}/>
            {props.children}
            <Footer />

        </Fragment>
    )
}

export default MasterPage;