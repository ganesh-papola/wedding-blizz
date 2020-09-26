import React, { Fragment } from "react";
import { Header, Footer } from 'containers';
import { Alert } from "components";
export default props => {
  return (
    <Fragment>
      <Header />
      <div style={{ minHeight: window.innerHeight / 1.35 }}>
        <Alert/>
        {props.children}
      </div>
      <Footer />
    </Fragment>
  )
}


