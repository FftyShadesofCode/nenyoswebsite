import React, {Component} from 'react'
import TextInput from "../components/form/TextInput";
import DropDown from "../components/form/DropDown";

import '../CSS Files/Uploader.css'
import Dropzone from "../components/Dropzone";

export default class Uploader extends Component {

    state = {
        firstName: '',
        lastName: '',
        orchidGenera: '',
        orchidSpecies: '',
        fragrant: '',
        temp: '',
        lightIntensity: '',
        lightType: '',
        water: '',
        humidity: '',
        location: ''
    }

    handleChange = (key) => (value) => {
        this.setState({[key]: value})
    }

    handleDropdown = (value) => {
        this.setState({value})
    }

    render()
    {
        const {
            firstName,
            lastName,
            orchidGenera,
            orchidSpecies,
            fragrant,
            temp,
            lightIntensity,
            lightType,
            water,
            humidity,
            location
        } = this.state

        return (
            <div className='uploader-container'>
                <h3 className='header-one'>Orchids of</h3>
                <h4 className='header-two'>NENYOS</h4>
                <form>
                    <div className='uploader-name'>
                        <TextInput
                            value={firstName}
                            placeholder='First Name'
                            type='text'
                            label='First Name'
                            onChange={this.handleChange('firstName')}
                        />

                        <TextInput
                            value={lastName}
                            placeholder='Last Name'
                            type='text'
                            label='Last Name'
                            onChange={this.handleChange('lastName')}
                        />
                    </div>

                    <div className='uploader-orchid-name'>
                        <TextInput
                            value={orchidGenera}
                            placeholder='Orchid Genera'
                            type='text'
                            label='Orchid Genera'
                            onChange={this.handleChange('orchidGenera')}
                        />

                        <TextInput
                            value={orchidSpecies}
                            placeholder='Orchid Species'
                            type='text'
                            label='Orchid Species'
                            onChange={this.handleChange('orchidSpecies')}
                        />
                    </div>

                    <div className='care-info'>
                        <DropDown
                            data={[
                                {value: 'Yes', label: 'Yes'},
                                {value: 'No', label: 'No'},
                                {value: 'At Night', label: 'At Night'}
                            ]}
                            label='Is it Fragrant?'
                            value={fragrant}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'intermittently', label: 'Intermittent'},
                                {value: 'twice A day', label: 'Twice A Day'},
                                {value: 'once A day', label: 'Once A Day'},
                                {value: 'as needed', label: 'As Needed'},
                                {value: 'every other day', label: 'Every Other Day'}
                            ]}
                            label='How often do you water?'
                            value={water}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'Cool', label: `Cool (60°-70°F)`},
                                {value: 'Intermediate', label:  `Intermediate (70°-80°F)`},
                                {value: 'Warm', label: `Warm (80°-90°F)`}
                            ]}
                            label='At what temp do you keep it?'
                            value={temp}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'Shade', label: 'Shade'},
                                {value: 'Diffused Light', label:  'Diffused Light'},
                                {value: 'Indirect Light', label: 'Indirect Light'},
                                {value: 'Bright', label: 'Bright'}
                            ]}
                            label='How much light do you give it?'
                            value={lightIntensity}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'Natural Light', label: 'Natural Light'},
                                {value: 'LED lights', label:  'LEDs'},
                                {value: 'T5 lights', label: 'T5s'}
                            ]}
                            label='How much light do you give it?'
                            value={lightType}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'Low', label: `Low (40-50%)`},
                                {value: 'Intermediate', label:  `Medium (50-60%)`},
                                {value: 'High', label: `High (60-70%)`}
                            ]}
                            label='How much humidity do you give it?'
                            value={humidity}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                        <DropDown
                            data={[
                                {value: 'grow room', label: 'Grow Room'},
                                {value: 'fish tank/terrarium', label: 'In a Fish Tank/Aquarium'},
                                {value: 'sun room all year round', label:  'Sun Room All Year'},
                                {value: 'sun room, but only in the Winter', label:  'Sun Room in the Winter'},
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
                            ]}
                            label='How much humidity do you give it?'
                            value={location}
                            placeholder='Select One'
                            onChange={this.handleDropdown}
                        />

                    </div>
                    <Dropzone />
                </form>
                <div className='post-review-container'>
                    <h5>{orchidGenera} {orchidSpecies}</h5>
                    <h5>Grower: {firstName} {lastName}</h5>
                    <h5>I grow this in the {location}. I water it {water}, give it {temp}, {humidity}, with {lightIntensity} from {lightType}. </h5>
                </div>
            </div>
        )
    }
}