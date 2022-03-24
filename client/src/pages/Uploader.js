import React, { Component } from "react";
import Name from "./Uploader/Name";
import OrchidName from "./Uploader/OrchidName";
import CareInfo from "./Uploader/CareInfo";
import Photos from "./Uploader/Photos";
import Success from "./Uploader/Success";
import Confirmation from "./Uploader/Confirmation";

import "../CSS Files/Uploader.css";

export default class Uploader extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    orchidGenera: "",
    orchidSpecies: "",
    fragrant: "",
    temp: "",
    lightIntensity: "",
    lightType: "",
    humidity: "",
    water: "",
    location: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const {
      firstName,
      lastName,
      orchidGenera,
      orchidSpecies,
      lightIntensity,
      lightType,
      fragrant,
      water,
      temp,
      humidity,
      location,
    } = this.state;

    const values = {
      firstName,
      lastName,
      orchidGenera,
      orchidSpecies,
      lightIntensity,
      lightType,
      fragrant,
      water,
      temp,
      humidity,
      location,
    };

    switch (step) {
      case 1:
        return (
          <Name
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <OrchidName
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <CareInfo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Photos
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 6:
        return <Success />;
      default:
    }
  }
}
