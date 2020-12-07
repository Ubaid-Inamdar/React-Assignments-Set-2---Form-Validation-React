import React from "react";
import "../styles/App.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      userName: "",
      errorMessage: ""
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNoChange = (event) => {
    this.setState({ phNo: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeValue = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleSubmit = () => {
    const alphanumeric = " /^[0-9a-zA-Z ]+$/;";
    const numbers = "/^d+$/";
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.gender === "" ||
      this.state.phNo === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }
    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!this.state.phNo.match(numbers)) {
      this.setState({
        errorMessage: " Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (!this.state.password.length < 6) {
      this.setState({
        errorMessage: " Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }

    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      userName: user,
      errorMessage: ""
    });
  };
  render() {
    return (
      <>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.userName && <div>Hello {this.state.userName} </div>}
        Name:
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter the name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        Email:
        <input
          data-testid="email"
          type="text"
          name="email"
          placeholder="Enter Email id@ xyz.com"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <br />
        Gender Selection:
        <select
          data-testid="gender"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChangeValue}
        >
          <option value="male" default>
            Male
          </option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <br />
        Phone No:
        <input
          data-testid="phoneNumber"
          type="text"
          name="phNo"
          placeholder="Enter Phone Number"
          value={this.state.number}
          onChange={this.handlePhoneNoChange}
        />
        <br />
        Password:
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </>
    );
  }
}
