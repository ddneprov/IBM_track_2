import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header';
import { Content } from "./components/Content/Content";

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
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
