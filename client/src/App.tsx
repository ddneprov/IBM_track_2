import React from "react";
import { CookiesProvider } from 'react-cookie';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/Content/Content";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import { HeaderContainer } from "./components/Header/HeaderContainer";

const useStyles = makeStyles(
  createStyles({
    app: {
      height: '100%',
      width: '100%'
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Provider store={store}>
          <div className={classes.app}>
            <HeaderContainer />
            <Content />
          </div>
        </Provider>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
