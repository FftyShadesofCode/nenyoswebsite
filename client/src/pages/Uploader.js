import React from "react";
import Folio from "folio-forms";
import { Form, Grid, Cell, CellItem, GridItem } from "folio-forms";
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
      <Folio>
        <div className='uploader-container'>
          <h3 className='header-one'>Orchids of NENYOS</h3>
          <h4 className='header-two'>In-Bloom Uploader</h4>
          <Form className='uploader-wrapper' onSubmit={this.submit}>
            <Grid>
              <GridItem row={1} col={1}>
                <Label>
                  {" "}
                  First Name
                  <Cell
                    valueKey='firstName'
                    type='text'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </Label>
              </GridItem>

              <GridItem row={1} col={2}>
                <Label>
                  Last Name
                  <Cell
                    valueKey='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </Label>
              </GridItem>

              <GridItem row={2} col={1}>
                <Label>
                  Orchid Genera
                  <Cell
                    valueKey='orchidGenera'
                    type='text'
                    placeholder='Orchid Genera'
                    value={this.state.orchidGenera}
                    onChange={this.handleChange}
                  />
                </Label>
              </GridItem>

              <GridItem row={2} col={2}>
                <Label>
                  Orchid Species
                  <Cell
                    valueKey='orchidSpecies'
                    type='text'
                    placeholder='Orchid Species'
                    value={this.state.orchidSpecies}
                    onChange={this.handleChange}
                  />
                </Label>
              </GridItem>

              <GridItem row={3} col={1}>
                <Label>
                  Is it Fragrant?
                  <Cell
                    valueKey='fragrance'
                    groupName='fragrant'
                    type='select'
                    placeholder='Is it Fragrant?'
                    value={this.state.fragrant}
                    onChange={this.handleChange}
                  >
                    <CellItem value='Yes'>Yes</CellItem>
                    <CellItem value='No'>No</CellItem>
                    <CellItem value='At Night'>At Night</CellItem>
                  </Cell>
                </Label>
              </GridItem>

              <GridItem row={3} col={2}>
                <Label>
                  How often do you water?
                  <Cell
                    valueKey='water'
                    groupName='water'
                    type='select'
                    placeholder='How often do you water?'
                    value={this.state.water}
                    onChange={this.handleChange}
                  >
                    <CellItem value='Daily'>Daily</CellItem>
                    <CellItem value='Twice Daily'>Twice Daily</CellItem>
                    <CellItem value='Once a Week'>Once a Week</CellItem>
                    <CellItem value='As Needed'>As Needed</CellItem>
                  </Cell>
                </Label>
              </GridItem>

              <GridItem row={3} col={3}>
                <Label>
                  How much light
                  <br />
                  do you give your orchid?
                  <Cell
                    valueKey='lightIntensity'
                    groupName='lightIntensity'
                    type='select'
                    placeholder='How much light do you give your orchid?'
                    value={this.state.lightIntensity}
                    onChange={this.handleChange}
                  >
                    <CellItem value='Low'>Low</CellItem>
                    <CellItem value='Medium'>Medium</CellItem>
                    <CellItem value='High'>High</CellItem>
                  </Cell>
                  <Cell
                    valueKey='lightType'
                    groupName='lightType'
                    type='select'
                    placeholder='How much light do you give your orchid?'
                    value={this.state.lightType}
                    onChange={this.handleChange}
                  >
                    <CellItem value='LED'>LED</CellItem>
                    <CellItem value='T5'>T5</CellItem>
                    <CellItem value='Natural Sun'>Natural Sun</CellItem>
                  </Cell>
                </Label>
              </GridItem>

              <GridItem row={4} col={1}>
                <Label>
                  At what temperature
                  <br />
                  do keep your orchid?
                  <Cell
                    valueKey='temp'
                    groupName='temp'
                    type='select'
                    placeholder='At what temperature do keep your orchid?'
                    value={this.state.temp}
                    onChange={this.handleChange}
                  >
                    <CellItem value='Low'>Low</CellItem>
                    <CellItem value='Medium'>Medium</CellItem>
                    <CellItem value='High'>High</CellItem>
                  </Cell>
                </Label>
              </GridItem>

              <GridItem row={4} col={2}>
                <Label>
                  What level of humidity do give your orchid?
                  <Cell
                    valueKey='humidity'
                    groupName='humidity'
                    type='select'
                    placeholder='What level of humidity do give your orchid?'
                    value={this.state.humidity}
                    onChange={this.handleChange}
                  >
                    <CellItem value='Low'>Low</CellItem>
                    <CellItem value='Medium'>Medium</CellItem>
                    <CellItem value='High'>High</CellItem>
                  </Cell>
                </Label>
              </GridItem>

              <GridItem row={5} col={2}>
                <Dropzone
                  value={this.state.images}
                  onChange={this.handleChange}
                />
              </GridItem>
            </Grid>
            <Button>Submit</Button>
          </Form>
        </div>
      </Folio>
    );
  }
}

export default Uploader;
