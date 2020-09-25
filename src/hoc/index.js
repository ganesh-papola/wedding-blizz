import React, { Fragment } from "react";
import { Header, Footer } from 'containers';

export default props => {
  return (
    <Fragment>
      <Header />
      <div style={{ minHeight: window.innerHeight / 1.35 }}>
        {props.children}
      </div>
      <Footer />
    </Fragment>
  )
}


