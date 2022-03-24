import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";

const theme = createTheme();

const Success = () => {
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
                        <div>
                            <div>
                                <h1>Orchid has Bloomed!</h1>
                            </div>
                        </div>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Success