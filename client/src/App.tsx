import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Header } from './components/Header';

const useStyles = makeStyles(
  createStyles({
    app: {
      width: '100%'
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export default App;
