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
  {path:'/event', component : Events},
  {path:'/addevent', component : AddEventsForm},
  {path:'/eventdetail', component : WeddingEvent},
  {path:'/eventfr', component : EventFr},
  {path:'/category', component : Category},
  {path:'/guests', component : Guests},
  {path:'/addguest', component : AddNewGuest},
  {path:'/gift', component : Gifts},
  {path:'/addgift', component : AddNewGift},
  {path:'/account', component : Account},
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
        <Route exact path="/privacy" component={PrivacyPolicy} />

        <PrivateRoutes auth={auth} />
      </Wrapper>
    </ThemeProvider>

  )
}