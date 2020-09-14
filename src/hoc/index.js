import React, { Fragment } from "react";
import { Header, Footer } from 'containers';

export default props => {
  return (
    <Fragment>
        <Header />
        {props.children}
        <Footer />
    </Fragment>
  )
}


