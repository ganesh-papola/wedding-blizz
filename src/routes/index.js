import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Landing, Home, Vendors, About, Events, AddEventsForm } from 'containers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Wrapper from "hoc";
import { palette } from 'constant';



const privateRoues = [
  { path: '/home', component: Home },
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
    fontFamily: '"Gotham", "CormorantBold", "GothamLight", "CormorantBoldItalic", "GothamBook", "CormorantSemiBold" ',
    button: {
      textTransform: "none"
    }
  },
  palette
});

export default props => {
  const { user } = useSelector(({ user }) => user)
  const auth = !!user.token;
  console.log("propspropsprops ",props)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper auth={auth}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/vendors" component={Vendors} />
        <Route exact path="/about" component={About} />

        <Route exact path="/event" component={Events} />
        <Route exact path="/addevent" component={AddEventsForm} />
        <PrivateRoutes auth={auth} />
      </Wrapper>
    </ThemeProvider>

  )
}