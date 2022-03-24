import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h3: {
        color: 'white',
        textShadow: '1px 1px 1px black'
    }
})

const Name = ({ nextStep, handleChange, values }) => {
    const styles = useStyles()

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme} >
            <Container component='main' maxWidth='lg'>
                <div  className='uploader-container' >
                    <CssBaseline />
                    <UploaderHeader />
                    <Grid
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                    <Container component='main' maxWidth='xs'>
                        <div>
                            <Typography className={styles.overrides} component='h1' variant='h3' >
                                Grower's Name
                            </Typography>
                            <form action=''>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            placeholder='First Name'
                                            label='First Name'
                                            onChange={handleChange('firstName')}
                                            defaultValue={values.firstName}
                                            fullWidth
                                        />
                                    </Grid>
                                    <br/>
                                    <Grid item xs={12}>
                                        <TextField
                                            placeholder='Last Name'
                                            label='Last Name'
                                            onChange={handleChange('lastName')}
                                            defaultValue={values.lastName}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                        onClick={ Continue }
                                        type='submit'
                                        fullWidth
                                        variant='contained'
                                        color='primary'
                                        >
                                            Next
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Name
