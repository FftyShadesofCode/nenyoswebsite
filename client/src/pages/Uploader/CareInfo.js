import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader"
import { Container, Typography, Grid, Select, Button } from '@material-ui/core'

const CareInfo = ({ prevStep, nextStep, handleChange, values }) => {

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
            <Container>
                <div>
                    <Typography component='h1' variant='h5' >
                        Orchid Information
                    </Typography>
                    <form action=''>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >

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

export default CareInfo