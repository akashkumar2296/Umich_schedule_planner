import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SidebarWidgets.css';
import FilterableClassesTable from './SidebarClasses';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

class SidebarWidgets extends Component { // eslint-disable-line
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={`sideWidgets ${s.sideWidgets}`}>
        <div className={`widgets-content ${s.widgetsContent}`}>
          <FilterableClassesTable search_classes={this.props.search_classes} />
          <div className={s.header}> Recommended Courses </div>
          <div className={s.recommended}>
            <FilterableClassesTable search_classes={this.props.recommended} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarWidgets);
