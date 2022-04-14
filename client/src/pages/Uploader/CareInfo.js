import React from 'react'
import {UploaderHeader} from "../../components/Uploader/UploaderHeader"
import { Container, Typography, Grid, Button } from '@material-ui/core'
import CreatableSelect from 'react-select/creatable'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import makeAnimated from 'react-select/animated'

import '../../CSS Files/pages/Uploader.css'

const CareInfo = ({ prevStep, nextStep, handleChange, values }) => {

    const optionsFragrant = [
        {value: 'Yes', label: 'Yes'},
        {value: 'No', label: 'No'},
        {value: 'At Night', label: 'At Night'}
    ]
    const optionsTemp = [
        {value: 'Cool', label: `Cool (60°-70°F)`},
        {value: 'Intermediate', label: `Intermediate (70°-80°F)`},
        {value: 'Warm', label: `Warm (80°-90°F)`}
    ]
    const optionsLightIntensity = [
        {value: 'Shade', label: 'Shade'},
        {value: 'Diffused Light', label: 'Diffused Light'},
        {value: 'Indirect Light', label: 'Indirect Light'},
        {value: 'Bright', label: 'Bright'}
    ]
    const optionsLightType = [
        {value: 'Natural Light', label: 'Natural Light'},
        {value: 'LED lights', label: 'LEDs'},
        {value: 'T5 lights', label: 'T5s'}
    ]
    const optionsWater = [
        {value: 'intermittently', label: 'Intermittent'},
        {value: 'twice A day', label: 'Twice A Day'},
        {value: 'once A day', label: 'Once A Day'},
        {value: 'as needed', label: 'As Needed'},
        {value: 'every other day', label: 'Every Other Day'}
    ]
    const optionsHumidity = [
        {value: 'Low', label: `Low (40-50%)`},
        {value: 'Intermediate', label: `Medium (50-60%)`},
        {value: 'High', label: `High (60-70%)`}
    ]
    const optionsLocation = [
        {value: 'grow room', label: 'Grow Room'},
        {value: 'fish tank/terrarium', label: 'In a Fish Tank/Aquarium'},
        {value: 'sun room all year round', label: 'Sun Room All Year'},
        {value: 'sun room, but only in the Winter', label: 'Sun Room in the Winter'},
        {value: 'outside in the Summer', label: 'Outside in the Summer'},
        {value: 'greenhouse all Year', label: 'GreenHouse All Year'},
        {value: 'greenhouse for the Winter months, only', label: 'Greenhouse in the Winter'},
        {value: 'in a South facing window', label: 'South Facing Window'},
        {value: 'in a SouthEast facing window', label: 'SouthEast Facing Window'},
        {value: 'in a East facing window', label: 'East Facing Window'},
        {value: 'in a NorthEast facing window', label: 'NorthEast Facing Window'},
        {value: 'in a North facing window', label: 'North Facing Window'},
        {value: 'in a NorthWest facing window', label: 'NorthWest Facing Window'},
        {value: 'in a West facing window', label: 'West Facing Window'},
        {value: 'in a SouthWest facing window', label: 'SouthWest Facing Window'}
    ]

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
                        <Grid>
                            <Typography style={{ color: 'white', textShadow: '1px 1px black' }} component='h1' variant='h5' >
                                Orchid Information
                            </Typography>
                            <Grid component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor='fragrant'>Is it Fragrant?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsFragrant}
                                            defaultValue={values.fragrant}
                                            autoFocus={true}
                                            name='fragrant'
                                            isSearchable
                                        />

                                        <label htmlFor='temp'>What temperature do you keep it in?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsTemp}
                                            defaultValue={values.temp}
                                            autoFocus={true}
                                            name='temp'
                                            isSearchable
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor='lightIntensity'>How much light do you give it?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsLightIntensity}
                                            defaultValue={values.lightIntensity}
                                            autoFocus={true}
                                            name='lightIntensity'
                                            isSearchable
                                        />

                                        <label htmlFor='lightType'>What type of light do you give it?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsLightType}
                                            defaultValue={values.lightType}
                                            autoFocus={true}
                                            name='lightType'
                                            isSearchable
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor='water'>How often do you water?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsWater}
                                            defaultValue={values.water}
                                            autoFocus={true}
                                            name='water'
                                            isSearchable
                                        />

                                        <label htmlFor='humidity'>How much humidity do you give it?</label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsHumidity}
                                            defaultValue={values.humidity}
                                            autoFocus={true}
                                            name='humidity'
                                            isSearchable
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor='location'>Where do you grow it?
                                            <span style={{ fontSize: '12px' }} ><em> (Can choose more than one)</em></span>
                                        </label>
                                        <CreatableSelect
                                            className="col-12 px-lg-5 m-auto"
                                            styles = { customStyles }
                                            onChange={handleChange}
                                            options={optionsLocation}
                                            defaultValue={values.location}
                                            components={makeAnimated()}
                                            autoFocus={true}
                                            name='location'
                                            isSearchable
                                            isMulti
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
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default CareInfo