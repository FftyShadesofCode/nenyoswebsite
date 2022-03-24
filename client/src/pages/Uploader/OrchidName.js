import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const OrchidName = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault()
        prevStep()
    }

    const theme = createTheme();

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '2px dotted green',
            color: state.isSelected ? 'black' : 'black',
            backgroundColor: state.isSelected ? 'green' : 'white'
        }),
        control: (provided) => ({
            ...provided,
            marginTop: "5%",
        })
    }

    return (
        <ThemeProvider theme={theme} >
            <Container component='main' maxWidth='s'>
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
                            <UploaderHeader />
                            <div>
                                <Typography component='h1' variant='h5'>
                                    Orchid's Identity
                                </Typography>
                                <form action=''>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder='Orchids Genera'
                                                label='Orchid Genera'
                                                onChange={handleChange('orchidGenera')}
                                                defaultValue={values.orchidGenera}
                                                fullWidth
                                            />
                                        </Grid>
                                        <br/>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder='Orchid Species'
                                                label='Orchid Species'
                                                onChange={handleChange('orchidSpecies')}
                                                defaultValue={values.orchidSpecies}
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