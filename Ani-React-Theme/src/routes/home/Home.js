import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Panel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import s from './Home.css';
import Stats from '../../components/common/Stats';
import TodoList from '../../components/common/TodoList';
import { Router, Route, browserHistory } from 'react-router';
import App from '../../components/App';
import {
  LineChart, Tooltip, XAxis, YAxis, CartesianGrid, Line as LineRechart, AreaChart, Area,
  BarChart, Bar, ResponsiveContainer } from '../../vendor/recharts';

import CustomPieChart from '../../components/CustomPieChart';


const title = 'Ani React';

function plotData() {
  const data = [];
  const offset = 0;
  let sineValue;
  let cosValue;
  for (let i = 0; i < 12; i += 0.8) {
    sineValue = Math.sin(i + offset);
    cosValue = Math.cos(i + offset);
    data.push({ name: i, sine: sineValue, cosine: cosValue });
    // data.push({ name: i, cosine: cosValue });
  }
  return data;
}
const lineChartData = plotData();


const areaData = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 1300, amt: 2100, value: 100 },
      { name: 'Page H', uv: 3490, pv: 3300, amt: 2100, value: 200 },
      { name: 'Page I', uv: 2490, pv: 2300, amt: 2100, value: 300 },
      { name: 'Page J', uv: 5490, pv: 2800, amt: 2100, value: 700 },
      { name: 'Page G', uv: 4490, pv: 3800, amt: 2100, value: 400 },
      { name: 'Page H', uv: 2490, pv: 1300, amt: 2100, value: 300 },
      { name: 'Page I', uv: 5490, pv: 4300, amt: 2100, value: 500 },
      { name: 'Page J', uv: 2490, pv: 3300, amt: 2100, value: 100 },
      { name: 'Page K', uv: 4490, pv: 2300, amt: 2100, value: 500 },
];


// const pieData01 = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//                   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];


class Home extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.context.setTitle(title);
  }
}


export default withStyles(s)(Home);
