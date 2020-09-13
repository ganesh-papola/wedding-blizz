import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Landing, Login, Home } from 'containers';
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
          <Route path={route.path} component={auth ? route.component : Login} key={route.path} />
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
    fontFamily: '"Gotham", "CormorantBold", "GothamLight", "CormorantBoldItalic", "GothamBook" ',
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
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} />
        <PrivateRoutes auth={auth} />
      </Wrapper>
    </ThemeProvider>

  )
}