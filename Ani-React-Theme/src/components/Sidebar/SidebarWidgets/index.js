import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SidebarWidgets.css';
import FilterableClassesTable from './SidebarClasses';

class SidebarWidgets extends Component { // eslint-disable-line
  render() {
    return (
      <div className={`sideWidgets ${s.sideWidgets}`}>
        <div className={`widgets-content ${s.widgetsContent}`}>
          <FilterableClassesTable />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarWidgets);
