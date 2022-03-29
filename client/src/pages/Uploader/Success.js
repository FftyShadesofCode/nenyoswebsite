import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider, Typography} from "@mui/material";

import '../../CSS Files/Uploader.css'

const theme = createTheme();

const Success = () => {
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
                        <div>
                            <div>
                                <Typography style={{ color: 'white', textShadow: '1px 1px black' }} component='h1' variant='h5'>Orchid has Bloomed!</Typography>
                            </div>
                        </div>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Success