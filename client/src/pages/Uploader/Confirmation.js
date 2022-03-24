import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader";

const Confirmation = ({ prevStep, nextStep, values }) => {
    console.log(values);
    const { firstName, lastName, orchidGenera, orchidSpecies, fragrant, careInfo, temp, lightIntensity, lightType, water, humidity, location } = values

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <Container  component="main" maxWidth="xs">
            <UploaderHeader />
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Orchid Genera" secondary={orchidGenera}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Orchid Species" secondary={orchidSpecies}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Basic Information" secondary={fragrant}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Care Information" secondary={careInfo} />
                        <ListItemText primary='Temperature' secondary={temp} />
                        <ListItemText primary='Light Intensity' secondary={lightIntensity} />
                        <ListItemText primary='Light Type' secondary={lightType} />
                        <ListItemText primary='Water' secondary={water} />
                        <ListItemText primary='Humidity' secondary={humidity} />
                        <ListItemText primary='Location' secondary={location} />
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
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                        >
                            Next
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            onClick={ Continue }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Confirm & Continue
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Confirmation