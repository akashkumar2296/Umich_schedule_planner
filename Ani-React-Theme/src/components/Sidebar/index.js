import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
var GeminiScrollbar = require('react-gemini-scrollbar');
import s from './Sidebar.css';
import SidebarWidgets from './SidebarWidgets';
import MenuBar from './MenuBar/MenuBar';

class Sidebar extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <aside className={s.sidebar}>
        <div className={'sidenav-outer ' + s.sidenavOuter}>
          <MenuBar />
          <SidebarWidgets onDragEnd={this.props.onDragEnd} search_classes={this.props.search_classes}/>
        </div>
      </aside>
    );
  }
}

export default withStyles(s)(Sidebar);