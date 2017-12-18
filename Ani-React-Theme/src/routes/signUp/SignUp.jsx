import React, { Component, PropTypes } from 'react';
import { Button, FormGroup, FormControl, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-dropdown'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignUp.css';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../components/Link';
import History from '../../core/history';
import flatAvatar from '../../common/images/flat-avatar.png';
import Dropzone from 'react-dropzone';




var files;
var request = require("superagent");
var FileInput = require('react-file-input');

const title = 'Sign Up';
const options = [
  'Computer Science Engineering'
]
const defaultOption = options[0]
class SignUp extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setLogname: PropTypes.func.isRequired,
    setProg: PropTypes.func.isRequired,
    setFile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProgram = this.handleProgram.bind(this);
    this.state = {logname: '', program: '', files: ''};
  }

  componentWillMount() {
    this.context.setTitle(title);
  }

  componentDidMount() {
    this.setState({
      logname: '',
      program: '',
      file: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

  handleChange(event) {
    this.context.setLogname(event.target.value);
    this.setState({
      logname: event.target.value
    }, () => {
      console.log("New state in ASYNC callback:", this.state.logname);
    });
  }

  handleProgram(event) {
    this.context.setProg(event.value);
    this.setState({
      program: event.value
    }, () => {
      console.log("New state in ASYNC callback:", this.state.program);
    });
  }

  handleInput(event) {
  
    console.log(event.target.files[0]);
    this.context.setFile(event.target.files[0]);
    this.setState({
      files: event.target.files[0]
    }, () => {
      console.log("New state in ASYNC callback:", this.state.program);
    });
        
  }

  render() {
    return (
      <div className={`animate ${s.signUp}`}>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
            <h1>University of Michigan Course Planner</h1>
            <form role="form" onSubmit={this.handleSubmit}>
              <div className={s.formContent}>
                <FormGroup>
                  <FormControl
                    id=""
                    type="text"
                    value={this.state.logname}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Full Name"
                    className={s.inputStyle}
                  />
                </FormGroup>
          
                <FormGroup>
                  <div className={s.dropdown}>
                    <Dropdown type="text" options={options} value={this.state.program} onChange={this.handleProgram.bind(this)} placeholder="Select your degree program" />
                  </div>
                </FormGroup>

                <FormControl
                    id=""
                    type="file"
                    value={this.state.files}
                    onChange={this.handleInput.bind(this)}
                    className={s.inputStyle}
                  />

              </div>
              <Link to="/dashboard/table">
                <Button
                  type="submit"
                  className={
                      `btn btn-white btn-outline btn-lg btn-rounded progress-login ${s.btn}`
                    }
                >
                  Register
                </Button>
              <span>&nbsp;&nbsp;</span>
              </Link>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SignUp);
