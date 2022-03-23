import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";

const OrchidName = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault()
        prevStep()
    }

    return (
        <UploaderHeader>
            <Container component='main' maxWidth='xs'>
                <div>
                    <Typography component='h1' variant='h5'>
                        Orchid's Identity
                    </Typography>
                    <form action=''>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    placeholder='Orchids Genera'
                                    label='orchidGenera'
                                    onChange={handleChange('orchidGenera')}
                                    defaultValue={values.orchidGenera}
                                    fullWidth
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    placeholder='Orchid Species'
                                    label='orchidSpecies'
                                    onChange={handleChange('orchidSpecies')}
                                    defaultValue={values.orchidSpecies}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <br />
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
                    </form>
                </div>
            </Container>
        </UploaderHeader>
    )
}

export default OrchidName