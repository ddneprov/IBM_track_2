import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Header } from './components/Header';
import { Content } from "./components/Content";

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
    <div className={classes.app}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
