import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";

import '../../CSS Files/pages/Uploader.css'

const OrchidName = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault()
        prevStep()
    }


    const CssTextField = styled(TextField)({
        '& label.MuiFormLabel-root': {
            color: 'white',
        },
        '& span.MuiFormLabel-asterisk': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'darkpink',
            },
            '&:hover fieldset': {
                borderColor: 'lightpink',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    });

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
                                <Typography style={{ color: 'white', textShadow: '1px 1px black' }} component='h1' variant='h5'>
                                    Orchid's Identity
                                </Typography>
                                <form action=''>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder='Orchids Genera'
                                                label='Orchid Genera'
                                                onChange={handleChange('orchidGenera')}
                                                value={values.orchidGenera}
                                                variant='standard'
                                                required
                                                error
                                                fullWidth
                                            />
                                        </Grid>
                                        <br/>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder='Orchid Species'
                                                label='Orchid Species'
                                                onChange={handleChange('orchidSpecies')}
                                                value={values.orchidSpecies}
                                                variant='standard'
                                                required
                                                error
                                                fullWidth
                                            />
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

export default OrchidName