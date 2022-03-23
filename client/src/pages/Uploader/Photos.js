import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader"
import { Container, Typography, Grid, Button } from '@material-ui/core'
import Dropzone from "../../components/Dropzone"

const Photos = () => {
    return (
        <UploaderHeader>
            <Container>
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
                    </form>
                </div>
            </Container>
        </UploaderHeader>
    )
}

export default Photos