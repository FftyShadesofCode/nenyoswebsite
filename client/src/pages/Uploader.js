import React from "react";
import { Form, Field } from "folo-forms";
import { Button, Label } from "reactstrap";
import Dropzone from "../components/Dropzone";
import cuid from "cuid";

import "../CSS Files/Uploader.css";
import axios from "axios";

class Uploader extends React.Component {
  state = {
    name: {
      firstName: "",
      lastName: "",
    },
    orchid: {
      orchidGenera: "",
      orchidSpecies: "",
      basicInformation: {
        fragrant: "",
        careInformation: {
          water: "",
          light: {
            lightIntensity: "",
            lightType: "",
          },
          temp: "",
          humidity: "",
        },
        images: "",
      },
    },
  };

  componentDidMount = () => {
    this.getOrchidPost();
  };

  getOrchidPost = () => {
    axios
      .get("/uploader")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("In-Bloom has been Uploaded!");
      })
      .catch(() => {
        alert("Error retrieving In-Bloom!");
      });
  };

  handleChange = (target) => {
    const { name, value } = target;

    this.state.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
      orchid: {
        orchidGenera: this.state.orchidGenera,
        orchidSpecies: this.state.orchidSpecies,
        basicInformation: {
          fragrant: this.state.fragrant,
          careInformation: {
            water: this.state.water,
            light: {
              lightIntensity: this.state.lightIntensity,
              lightType: this.state.lightType,
            },
            temp: this.state.temp,
            humidity: this.state.humidity,
          },
          images: this.state.images,
        },
      },
    };

    axios({
      url: "/uploader",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
        this.getOrchidPost();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      name: {
        firstName: "",
        lastName: "",
      },
      orchid: {
        orchidGenera: "",
        orchidSpecies: "",
        basicInformation: {
          fragrant: "",
          careInformation: {
            water: "",
            light: {
              lightIntensity: "",
              lightType: "",
            },
            temp: "",
            humidity: "",
          },
          images: "",
        },
      },
    });
  };

  render() {
    return (
      <div className='form-container'>
        <div className='uploader-container'>
          <h3 className='header-one'>Orchids of NENYOS</h3>
          <h4 className='header-two'>In-Bloom Uploader</h4>
          <Form className='uploader-wrapper' onSubmit={this.submit}>
              <div row={1} col={1}>
                <Label>
                  {" "}
                  First Name
                  <Field
                    valueKey='firstName'
                    type='text'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </Label>
              </div>

              <div row={1} col={2}>
                <Label>
                  Last Name
                  <Field
                    valueKey='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </Label>
              </div>

              <div row={2} col={1}>
                <Label>
                  Orchid Genera
                  <Field
                    valueKey='orchidGenera'
                    type='text'
                    placeholder='Orchid Genera'
                    value={this.state.orchidGenera}
                    onChange={this.handleChange}
                  />
                </Label>
              </div>

              <div row={2} col={2}>
                <Label>
                  Orchid Species
                  <Field
                    valueKey='orchidSpecies'
                    type='text'
                    placeholder='Orchid Species'
                    value={this.state.orchidSpecies}
                    onChange={this.handleChange}
                  />
                </Label>
              </div>

              <div row={3} col={1}>
                <Label>
                  Is it Fragrant?
                  <Field
                    valueKey='fragrance'
                    groupName='fragrant'
                    type='select'
                    placeholder='Is it Fragrant?'
                    value={this.state.fragrant}
                    onChange={this.handleChange}
                  >
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    <option value='At Night'>At Night</option>
                  </Field>
                </Label>
              </div>

              <div row={3} col={2}>
                <Label>
                  How often do you water?
                  <Field
                    valueKey='water'
                    groupName='water'
                    type='select'
                    placeholder='How often do you water?'
                    value={this.state.water}
                    onChange={this.handleChange}
                  >
                    <option value='Daily'>Daily</option>
                    <option value='Twice Daily'>Twice Daily</option>
                    <option value='Once a Week'>Once a Week</option>
                    <option value='As Needed'>As Needed</option>
                  </Field>
                </Label>
              </div>

              <div row={3} col={3}>
                <Label>
                  How much light
                  <br />
                  do you give your orchid?
                  <Field
                    valueKey='lightIntensity'
                    groupName='lightIntensity'
                    type='select'
                    placeholder='How much light do you give your orchid?'
                    value={this.state.lightIntensity}
                    onChange={this.handleChange}
                  >
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                  </Field>
                  <Field
                    valueKey='lightType'
                    groupName='lightType'
                    type='select'
                    placeholder='How much light do you give your orchid?'
                    value={this.state.lightType}
                    onChange={this.handleChange}
                  >
                    <option value='LED'>LED</option>
                    <option value='T5'>T5</option>
                    <option value='Natural Sun'>Natural Sun</option>
                  </Field>
                </Label>
              </div>

              <div row={4} col={1}>
                <Label>
                  At what temperature
                  <br />
                  do keep your orchid?
                  <Field
                    valueKey='temp'
                    groupName='temp'
                    type='select'
                    placeholder='At what temperature do keep your orchid?'
                    value={this.state.temp}
                    onChange={this.handleChange}
                  >
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                  </Field>
                </Label>
              </div>

              <div row={4} col={2}>
                <Label>
                  What level of humidity do give your orchid?
                  <Field
                    valueKey='humidity'
                    groupName='humidity'
                    type='select'
                    placeholder='What level of humidity do give your orchid?'
                    value={this.state.humidity}
                    onChange={this.handleChange}
                  >
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                  </Field>
                </Label>
              </div>

              <div row={5} col={2}>
                <Dropzone
                  value={this.state.images}
                  onChange={this.handleChange}
                />
              </div>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Uploader;
