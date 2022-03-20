import React, {useState} from 'react'
import { Form } from '../components/form/form'
import Dropzone from "../components/Dropzone"
import cuid from "cuid"

import '../CSS Files/Uploader.css'
import axios from "axios";
import FieldBlock from "../components/form/FieldBlock";

export function Uploader() {
  // const state = {
  //   name: {
  //     firstName: '',
  //     lastName: ''
  //   },
  //   orchid: {
  //     orchidGenera: '',
  //     orchidSpecies: '',
  //     basicInformation: {
  //       fragrant: '',
  //       careInformation: {
  //         water: '',
  //         light: {
  //           lightIntensity: '',
  //           lightType: '',
  //         },
  //         temp: '',
  //         humidity: '',
  //       },
  //       images: '',
  //     }
  //   }
  // }

  const [fields, setFields] = useState({
    firstName: {value: '', isInvalid: false, msg: ''},
    lastName: {value: '', isInvalid: false, msg: ''},
    orchidGenera: {value: '', isInvalid: false, msg: ''},
    orchidSpecies: {value: '', isInvalid: false, msg: ''}
  })

  async function success(res) {
    console.log(res)
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [orchidGenera, setOrchidGenera] = useState('')
  const [orchidSpecies, setOrchidSpecies] = useState('')

  const form = new Form('/uploader', fields, setFields, success)

    return (
        <div className='uploader-container'>
          <h3 className='header-one'>Orchids of NENYOS</h3>
          <h4 className='header-two'>Uploader</h4>
          <div className='uploader-wrapper'>
            <form >
              <div className='input-container'>
                <div className='name'>
                  <FieldBlock id='lastName' value={fields.lastName.value} onChange={form.handleInputChanges} label='Last Name' isInvalid={fields.lastName.isInvalid} feedback={fields.lastName.msg} />

                  <FieldBlock id='firstName' value={fields.firstName.value} onChange={form.handleInputChanges} label='First Name' isInvalid={fields.firstName.isInvalid} feedback={fields.firstName.msg} />
                </div>

                <div className='orchid-name'>
                  <FieldBlock id='orchidGenera' value={fields.orchidGenera.value} onChange={form.handleInputChanges} label='Orchid Genera' isInvalid={fields.orchidGenera.isInvalid} feedback={fields.orchidGenera.msg} />

                  <FieldBlock id='orchidSpecies' value={fields.orchidSpecies.value} onChange={form.handleInputChanges} label='Orchid Species' isInvalid={fields.orchidSpecies.isInvalid} feedback={fields.orchidSpecies.msg} />
                </div>

                <div className='care-container'>
                  <div className='care-information'>

                  </div>
                </div>
                <Dropzone />
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
            <div className='uploader-return'>
              <h5>Orchid Name: {fields.orchidGenera.value} {fields.orchidSpecies.value}</h5>
              <h5>Grower: {fields.firstName.value} {fields.lastName.value}</h5>
            </div>
          </div>
        </div>
    )
}

export default Uploader