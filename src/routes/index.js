import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Landing, Vendors, About, Events, AddEventsForm, WeddingEvent, AddNewGuest,
  Guests, Gifts, AddNewGift, Account, PrivacyPolicy, EventFr, Category, EventVendorList, EventVendorDetail } from 'containers';
import { Notfound } from "components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Wrapper from "hoc";
import { palette } from 'constant';



const privateRoues = [
  {path:'/', component : Events},
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
  {path:'/eventvendorlist', component : EventVendorList},
  {path:'/eventvendordetail', component : EventVendorDetail},
]
const publicRoutes = [
  {path:'/', component : Landing},
  {path:'/vendors', component : Vendors},
  {path:'/about', component : About},
  {path:'/privacy', component : PrivacyPolicy}
]
const PrivateRoutes = () => {
  return (
    <>
      {
        privateRoues.map(route => (
          <Route exact path={route.path} component={route.component} key={route.path} />
        ))
      }
      {/* <Route component={Notfound} /> */}
    </>
  )
}
const PublicRoutes = () => {
  return(
    <>
    {  publicRoutes.map(route => (
        <Route exact path={route.path} component={route.component} key={route.path} />
      ))
    }
    {/* <Route component={Notfound} /> */}
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
        {
          auth?<PrivateRoutes auth={auth} />:
          <PublicRoutes/>
        }
        
      </Wrapper>
    </ThemeProvider>

  )
}