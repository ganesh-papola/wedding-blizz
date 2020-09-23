import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Landing, Vendors, About, Events, AddEventsForm, WeddingEvent, AddNewGuest,
  Guests, Gifts, AddNewGift, Account, PrivacyPolicy, EventFr, Category } from 'containers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Wrapper from "hoc";
import { palette } from 'constant';



const privateRoues = [
  
]

const PrivateRoutes = ({ auth }) => {
  return (
    <>
      {
        privateRoues.map(route => (
          <Route exact path={route.path} component={auth ? route.component : Landing} key={route.path} />
        ))
      }
    </>
  )
}
const theme = createMuiTheme({
  spacing: 5,
  status: {
    danger: orange[500],
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Gotham", "CormorantBold", "GothamLight", "CormorantBoldItalic", "GothamBook", "CormorantSemiBold", "GothamBold" ',
    button: {
      textTransform: "none"
    }
  },
  palette
});

export default props => {
  const { user } = useSelector(({ user }) => user)
  const auth = !!user.token;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper auth={auth}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/vendors" component={Vendors} />
        <Route exact path="/about" component={About} />

        <Route exact path="/event" component={Events} />
        <Route exact path="/addevent" component={AddEventsForm} />
        <Route exact path="/eventdetail" component={WeddingEvent} />
        <Route exact path="/eventfr" component={EventFr} />
        <Route exact path="/category" component={Category} />

        <Route exact path="/guests" component={Guests} />
        <Route exact path="/addguest" component={AddNewGuest} />
        <Route exact path="/gift" component={Gifts} />
        <Route exact path="/addgift" component={AddNewGift} />

        <Route exact path="/account" component={Account} />
        <Route exact path="/privacy" component={PrivacyPolicy} />

        <PrivateRoutes auth={auth} />
      </Wrapper>
    </ThemeProvider>

  )
}