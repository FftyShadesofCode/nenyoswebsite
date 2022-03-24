import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader"
import { Container, Typography, Grid, Button } from '@material-ui/core'
import Dropzone from "../../components/Dropzone"

const Photos = ({ prevStep, nextStep, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault()
        prevStep()
    }

    return (

            <Container component='main' maxWidth='xs'>
                <UploaderHeader />
                <div>
                    <Typography component='h1' variant='h5' >
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
    )
}

export default Photos