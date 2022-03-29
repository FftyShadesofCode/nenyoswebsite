import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";
import {createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";

import '../../CSS Files/Uploader.css'

const Confirmation = ({ prevStep, nextStep, values }) => {
    console.log(values);
    const { firstName, lastName, orchidGenera, orchidSpecies, basicInfo, fragrant, careInfo, temp, lightIntensity, lightType, water, humidity, location } = values

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme} >
            <Container component='main' maxWidth='xl'>
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
                    <Container  component="main" maxWidth="xl">
                        <Grid component="form" noValidate sx={{ mt: 3 }}>
                            <Typography  style={{ color: 'white', textShadow: '1px 1px black' }} component='h1' variant='h5'>
                                Please Review Your Information
                            </Typography>
                            <List style={{ color: 'white', textShadow: '1px 1px black' }} >
                                <ListItem>
                                    <ListItemText primary="First Name:" secondary={firstName} >{values.firstName}</ListItemText>
                                    <ListItemText primary="Last Name:" secondary={lastName} >{values.lastName}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Orchid Genera:" secondary={orchidGenera} >{values.orchidGenera}</ListItemText>
                                    <ListItemText primary="Orchid Species:" secondary={orchidSpecies} >{values.orchidSpecies}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Basic Information:" secondary={basicInfo} />
                                    <ListItemText primary="Fragrant:" secondary={fragrant} >{values.fragrant}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Care Information:" secondary={careInfo} />
                                    <ListItemText primary='Temperature:' secondary={temp} >{values.temp}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='Light Intensity:' secondary={lightIntensity} >{values.lightIntensity}</ListItemText>
                                    <ListItemText primary='Light Type:' secondary={lightType} >{values.lightType}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='Water:' secondary={water} >{values.water}</ListItemText>
                                    <ListItemText primary='Humidity:' secondary={humidity} >{values.humidity}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='Location:' secondary={location} >{values.location}</ListItemText>
                                </ListItem>
                            </List>

                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={ Previous }
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Previous
                                    </Button>
                                </Grid>
                                <br />
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={ Continue }
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Confirm
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Confirmation