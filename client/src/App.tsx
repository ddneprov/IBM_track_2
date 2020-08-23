import React from "react";
import { Form } from "./components/form/Form";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Header } from './components/header/Header';

const useStyles = makeStyles(
  createStyles({
    app: {
      backgroundColor: '#E5E5E5',
      with: '100%',
      height: '100vh'
    },
    appContainer: {
      maxWidth: '1440px',
      margin: '0 auto',
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.appContainer}>
        <Form />
      </main>
    </div>
  );
};

export default App;
