import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../hoc/Layout/Layout';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Layout>
      <section>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <form className={classes.form} noValidate autoComplete="off">
                <div>
                  
                  <div>
                    <TextField required id="user-key" label="Data Description" variant="outlined" />
                  </div>

                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<Icon>send</Icon>}
                    >
                      Submit
              </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </section>
    </Layout>
  );
}