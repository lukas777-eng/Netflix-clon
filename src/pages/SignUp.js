import { makeStyles } from '@material-ui/core';
import React from 'react'

const SignUp = () => {
    const classes = useStyles();

  return (
    <div>
      SignUp
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#111",
      minHeight: "100vh",
    },
  }));

export default SignUp;