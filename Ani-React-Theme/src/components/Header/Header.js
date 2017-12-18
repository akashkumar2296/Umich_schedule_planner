/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Dropdown from 'react-dropdown'
import { FormattedMessage } from 'react-intl';
import { Panel, ProgressBar, Button } from 'react-bootstrap';
// import localForage from 'localforage';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Link from '../Link';
import s from './Header.css';
import history from '../../core/history';
// import Translate from '../common/Translate';
import $ from 'jquery';

const options = [
  'Core Requirements', 'Humanities', 'Technical Electives', 'Major Design Experience'
]
const defaultOption = options[0]

class TopNav extends Component{
  static contextTypes = {
    setLang: PropTypes.func.isRequired,
    logname: PropTypes.string,
    program: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      rtlClass: true,
    }
    this.rightToLeft = this.rightToLeft.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchInput: ''
    })
  }

  submitSearch(event){
    console.log(event.target.value);
    this.props.enterSearch(event.target.value);
    this.setState({
      searchInput: event.target.value
    }, () => {
      console.log("New state in ASYNC callback:", this.state.searchInput);
    });
  }



  // componentWillMount() {
  //   console.log(this.context);
  //   // this.context.setTitle(title);
  // }

  // render() {
  //   return (
  //     <ProgressBar max={200} now={this.state.value1} label={`${this.state.value1}/200`} />
  //   );
  // }

  render() {

    return (
      <nav className={"navbar navbar-fixed-top " + s.topNavbar} role="navigation">
        <div className={"navbar-header text-center " + s.navbarHeader}>
          <form className={"navbar-form " + s.navbarForm + " navbar-left"} role="search">
            <span className={"glyphicon glyphicon-search " + s.glyphiconStyle}  />
            <div className="form-group">
              <input type="text" className={"form-control " + s.formControl}
              value={this.state.searchInput}
              placeholder="Search Classes" onChange={this.submitSearch} />
            </div>
          </form>
        </div>
        <div className="row">
          <div className={s.navBarProgram}>
            {this.props.program}
          </div>
          <div className={s.navBarName}>
            {this.props.logname}
          </div>
        </div>
      </nav>
    );
  }

  rightToLeft() {
    this.setState({'rtlClass': !this.state.rtlClass});
    if (this.state.rtlClass) {
      $('body').addClass('rtl');
    } else {
      $('body').removeClass('rtl');
    }
  }

  changeLanguage(e) {
    // add code related to language change through app store
    window.localStorage.setItem("language123", e);
    this.context.setLang(e);
    // localForage.setItem('lang', e)
    //   .then((success) => {
    //     console.log('local storage is set', success);
    //     this.context.setLang(e);
    //   })
    //   .catch((err) => {
    //     console.log('error while storing lang', err);
    //   })
  }

  showMenu()
  {
    $('.dashboard-page').toggleClass('push-right');
  }
}


export default withStyles(s)(TopNav);
