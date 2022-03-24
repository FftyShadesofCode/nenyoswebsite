import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader"
import { Container, Typography, Grid, Button } from '@material-ui/core'
import Dropzone from "../../components/Dropzone"
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const Photos = ({ prevStep, nextStep, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault()
        prevStep()
    }

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
                            <Typography style={{ color: 'white', textShadow: '1px 1px black' }} component='h1' variant='h5' >
                                Photos
                            </Typography>
                            <form action=''>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} >
                                        <Dropzone />
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            onClick= { Previous }
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            color='primary'
                                        >
                                            Previous
                                        </Button>
                                    </Grid>
                                    <br />
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

export default Photos