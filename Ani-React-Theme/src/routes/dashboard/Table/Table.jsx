import React, { Component, PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs';
import {
  LineChart, Tooltip, XAxis, YAxis, CartesianGrid, Line as LineRechart, AreaChart, Area,
  BarChart, ResponsiveContainer } from '../../../vendor/recharts';
import s from './Table.css';

const title = 'Table';
const preReq = ['Engineering', 'Chemistry', 'Physics', 'Math', 'Intellectual Breadth', 'General Electives'];

const egr = [
{class: 'Engineering 100', satisfied: 'Yes', credits:'4'},
{class: 'Engineering 101/151', satisfied: 'Yes', credits:'4'}];

const chemistry = [
{class: 'Chemistry 125', satisfied: 'Yes', credits:'4'},
{class: 'Chemistry 126', satisfied: 'Yes', credits:'4'},
{class: 'Chemistry 130/(210/211)', satisfied: 'Yes', credits:'4'}];

const physics = [
{class: 'Physics 140', satisfied: 'Yes', credits:'4'},
{class: 'Physics 141', satisfied: 'Yes', credits:'2'},
{class: 'Physics 240', satisfied: 'Yes', credits:'4'},
{class: 'Physics 241', satisfied: 'Yes', credits:'2'}];

const math = [
{class: 'Math 115/120', satisfied: 'Yes', credits:'4'},
{class: 'Math 116/121', satisfied: 'Yes', credits:'4'},
{class: 'Math 214/217/417/419', satisfied: 'Yes', credits:'4'},
{class: 'Math 215/216', satisfied: 'Yes', credits:'4'}];

const Intellectual_Breadth = [
{class: 'Humanities', satisfied: 'Yes', credits:'3'},
{class: 'Upper-Level Humanities', satisfied: 'Yes', credits:'3'},
{class: 'Intellectual Breadth', satisfied: 'Yes', credits:'10'}];

const General_electives = [
{class: 'General Electives', satisfied: 'Yes', credits:'15'}];

const panel_styles = ['danger', 'info', 'success', 'warning'];
const all_semesters = ['Fall', 'Winter', 'Spring', 'Summer'];
var year = 2017;
var num_semesters = 4;

const donutOptions = {
    // Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: true,

    // String - The colour of each segment stroke
  segmentStrokeColor: '#fff',

    // Number - The width of each segment stroke
  segmentStrokeWidth: 2,

    // Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts

    // Number - Amount of animation steps
  animationSteps: 100,

    // String - Animation easing effect
  animationEasing: 'easeOutBounce',

    // Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,

    // Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
  responsive: true,

    // String - A legend template
  legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% '
  + 'for (const i=0; i<segments.length; i++){%><li><span style='
  + '"background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%>'
  + '<%=segments[i].label%><%}%></li><%}%></ul>',

};

const pieData = [
  {
    value: 4,
    color: '#de6764',
    highlight: 'grey',
    label: 'Fall 2017'
  },
  {
    value: 4,
    color: '#5bc0de',
    highlight: 'grey',
    label: 'Winter 2018'
  },
  {
    value: 4,
    color: '#5cb85c',
    highlight: 'grey',
    label: 'Spring 2018'
  },
  {
    value: 4,
    color: '#f0ad4e',
    highlight: 'grey',
    label: 'Summer 2018'
  }
];

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

const colorGenerator = ['#de6764', '#5bc0de', '#5cb85c', '#f0ad4e']

class Tables extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setCore: PropTypes.func.isRequired,
    setMde: PropTypes.func.isRequired
  };

  getCore(){
    console.log("HEY");
    this.context.setCore();
  }

  getMde(){
    console.log("HEY");
    this.context.setMde();
  }

  componentDidMount() {
    this.createSemesters();
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [{
        semesters: '',
        style: '',
        year: '',
      }],
   }
    this.createSemesters = this.createSemesters.bind(this);
    this.getSemesters = this.getSemesters.bind(this);
    this.getCore = this.getCore.bind(this);
    this.getMde = this.getMde.bind(this);
  }

  createSemesters() {
    var semester_items = [];
    var pieData = [];
    var semester_id = 0;
    for (var i = 0; i < num_semesters; i++) {
      if (!((i+1)%4)) {
        year++;
      }
      var semester_name = all_semesters[i%4] + ' ' + year
      var panel_style = panel_styles[i%4];
      var id = 'droppable' + semester_id;
      semester_id++;
      semester_items.push({
        semesters: semester_name,
        style: panel_style,
        year: year,
        id: id,
      });
      // pieData.push({
      //   value: 0,
      //   color: colorGenerator[i],
      //   highlight: 'grey',
      //   label: semester_name
      // });
    }
    // localStorage.setItem("piedata", pieData);
    // console.log("piedata", localStorage.getItem("piedata")[0]);
    // console.log(pieData);
      this.setState({
        items: semester_items,
      }, function () { //FOR DEBUGGING STATE
            console.log(this.state.items);
      });
  }

  // loadEnrolled(semester_id) {
  //   var semester_rows = [];
  //   for(var i = 0; i < this.props.added_classes.length(); i++){
  //     if(this.props.added_classes[i].semester_id === semester_id){
  //       semester_rows.push(
  //         <tr>
  //           <td>{this.props.added_classes[i].course_name}</td>
  //           <td>{this.props.added_classes[i].course_num}</td>
  //           <td>{this.props.added_classes[i].credits}</td>
  //         </tr>
  //       );
  //     }
  //   }

  //     return ({semester_rows});
  // }

  getSemesters() {
    const semester_tables = this.state.items.map(sem =>
      (
        <div className="col-md-3">
          <div id={sem.id + 'heat'}>&nbsp;</div>
          <Panel
            header={<span>{sem.semesters}</span>}
            bsStyle={sem.style}
          >
            <Table primary>
              <tbody>
                <Droppable droppableId={sem.id}>{(provided,snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{ backgroundColor: snapshot.isDraggingOver ? 'lightgrey' : 'white' }}
                  >
                  <div className={s.semester_tables} id={sem.id}>
                    {provided.placeholder}

                  </div>
                  </div>
                )}
                </Droppable>
              </tbody>
            </Table>
          </Panel>
        </div>
      ),
    );
    return (
      <div className="row">
        {semester_tables}
      </div>
    );
  }

  render() {
    return (
      <div ref="root" className="animate">
      <div className={s.requirements}>
        <div className="row">
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title" onClick={this.getCore}>Core Requirements</span>}
              bsStyle="primary"
              ></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Satisfied</th>
                  <th>Credits</th>
                </tr>
              </thead>
                <thead>
                  <tr>
                    <th>{preReq[0]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{egr[0]['class']}</td>
                    <td>{egr[0]['satisfied']}</td>
                    <td>{egr[0]['credits']}</td>
                  </tr>
                  <tr>
                    <td>{egr[1]['class']}</td>
                    <td>{egr[1]['satisfied']}</td>
                    <td>{egr[1]['credits']}</td>
                  </tr>
                </tbody>
              
              <thead>
                <tr>
                  <th>{preReq[1]}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{chemistry[0]['class']}</td>
                  <td>{chemistry[0]['satisfied']}</td>
                  <td>{chemistry[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[1]['class']}</td>
                  <td>{chemistry[1]['satisfied']}</td>
                  <td>{chemistry[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[2]['class']}</td>
                  <td>{chemistry[2]['satisfied']}</td>
                  <td>{chemistry[2]['credits']}</td>
                </tr>
              </tbody>

            
              <thead>
              <tr>
              <th>{preReq[2]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{physics[0]['class']}</td>
                  <td>{physics[0]['satisfied']}</td>
                  <td>{physics[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[1]['class']}</td>
                  <td>{physics[1]['satisfied']}</td>
                  <td>{physics[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[2]['class']}</td>
                  <td>{physics[2]['satisfied']}</td>
                  <td>{physics[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[3]['class']}</td>
                  <td>{physics[3]['satisfied']}</td>
                  <td>{physics[3]['credits']}</td>
                </tr>
              </tbody>

              <br></br>
              
              <thead>
              <tr>
              <th>{preReq[3]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{math[0]['class']}</td>
                  <td>{math[0]['satisfied']}</td>
                  <td>{math[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[1]['class']}</td>
                  <td>{math[1]['satisfied']}</td>
                  <td>{math[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[2]['class']}</td>
                  <td>{math[2]['satisfied']}</td>
                  <td>{math[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[3]['class']}</td>
                  <td>{math[3]['satisfied']}</td>
                  <td>{math[3]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[4]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{Intellectual_Breadth[0]['class']}</td>
                  <td>{Intellectual_Breadth[0]['satisfied']}</td>
                  <td>{Intellectual_Breadth[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{Intellectual_Breadth[1]['class']}</td>
                  <td>{Intellectual_Breadth[1]['satisfied']}</td>
                  <td>{Intellectual_Breadth[1]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[5]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{General_electives[0]['class']}</td>
                  <td>{General_electives[0]['satisfied']}</td>
                  <td>{General_electives[0]['credits']}</td>
                </tr>
              </tbody>
              </Table>
            </Collapsible>
          </div>
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title">Humanities</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Satisfied</th>
                  <th>Credits</th>
                </tr>
              </thead>
                <thead>
                  <tr>
                    <th>{preReq[0]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{egr[0]['class']}</td>
                    <td>{egr[0]['satisfied']}</td>
                    <td>{egr[0]['credits']}</td>
                  </tr>
                  <tr>
                    <td>{egr[1]['class']}</td>
                    <td>{egr[1]['satisfied']}</td>
                    <td>{egr[1]['credits']}</td>
                  </tr>
                </tbody>
              
              <thead>
                <tr>
                  <th>{preReq[1]}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{chemistry[0]['class']}</td>
                  <td>{chemistry[0]['satisfied']}</td>
                  <td>{chemistry[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[1]['class']}</td>
                  <td>{chemistry[1]['satisfied']}</td>
                  <td>{chemistry[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[2]['class']}</td>
                  <td>{chemistry[2]['satisfied']}</td>
                  <td>{chemistry[2]['credits']}</td>
                </tr>
              </tbody>

            
              <thead>
              <tr>
              <th>{preReq[2]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{physics[0]['class']}</td>
                  <td>{physics[0]['satisfied']}</td>
                  <td>{physics[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[1]['class']}</td>
                  <td>{physics[1]['satisfied']}</td>
                  <td>{physics[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[2]['class']}</td>
                  <td>{physics[2]['satisfied']}</td>
                  <td>{physics[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[3]['class']}</td>
                  <td>{physics[3]['satisfied']}</td>
                  <td>{physics[3]['credits']}</td>
                </tr>
              </tbody>

              <br></br>
              
              <thead>
              <tr>
              <th>{preReq[3]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{math[0]['class']}</td>
                  <td>{math[0]['satisfied']}</td>
                  <td>{math[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[1]['class']}</td>
                  <td>{math[1]['satisfied']}</td>
                  <td>{math[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[2]['class']}</td>
                  <td>{math[2]['satisfied']}</td>
                  <td>{math[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[3]['class']}</td>
                  <td>{math[3]['satisfied']}</td>
                  <td>{math[3]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[4]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{Intellectual_Breadth[0]['class']}</td>
                  <td>{Intellectual_Breadth[0]['satisfied']}</td>
                  <td>{Intellectual_Breadth[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{Intellectual_Breadth[1]['class']}</td>
                  <td>{Intellectual_Breadth[1]['satisfied']}</td>
                  <td>{Intellectual_Breadth[1]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[5]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{General_electives[0]['class']}</td>
                  <td>{General_electives[0]['satisfied']}</td>
                  <td>{General_electives[0]['credits']}</td>
                </tr>
              </tbody>
              </Table>
            </Collapsible>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title">Technical Electives</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Satisfied</th>
                  <th>Credits</th>
                </tr>
              </thead>
                <thead>
                  <tr>
                    <th>{preReq[0]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{egr[0]['class']}</td>
                    <td>{egr[0]['satisfied']}</td>
                    <td>{egr[0]['credits']}</td>
                  </tr>
                  <tr>
                    <td>{egr[1]['class']}</td>
                    <td>{egr[1]['satisfied']}</td>
                    <td>{egr[1]['credits']}</td>
                  </tr>
                </tbody>
              
              <thead>
                <tr>
                  <th>{preReq[1]}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{chemistry[0]['class']}</td>
                  <td>{chemistry[0]['satisfied']}</td>
                  <td>{chemistry[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[1]['class']}</td>
                  <td>{chemistry[1]['satisfied']}</td>
                  <td>{chemistry[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{chemistry[2]['class']}</td>
                  <td>{chemistry[2]['satisfied']}</td>
                  <td>{chemistry[2]['credits']}</td>
                </tr>
              </tbody>

            
              <thead>
              <tr>
              <th>{preReq[2]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{physics[0]['class']}</td>
                  <td>{physics[0]['satisfied']}</td>
                  <td>{physics[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[1]['class']}</td>
                  <td>{physics[1]['satisfied']}</td>
                  <td>{physics[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[2]['class']}</td>
                  <td>{physics[2]['satisfied']}</td>
                  <td>{physics[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{physics[3]['class']}</td>
                  <td>{physics[3]['satisfied']}</td>
                  <td>{physics[3]['credits']}</td>
                </tr>
              </tbody>

              <br></br>
              
              <thead>
              <tr>
              <th>{preReq[3]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{math[0]['class']}</td>
                  <td>{math[0]['satisfied']}</td>
                  <td>{math[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[1]['class']}</td>
                  <td>{math[1]['satisfied']}</td>
                  <td>{math[1]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[2]['class']}</td>
                  <td>{math[2]['satisfied']}</td>
                  <td>{math[2]['credits']}</td>
                </tr>
                <tr>
                  <td>{math[3]['class']}</td>
                  <td>{math[3]['satisfied']}</td>
                  <td>{math[3]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[4]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{Intellectual_Breadth[0]['class']}</td>
                  <td>{Intellectual_Breadth[0]['satisfied']}</td>
                  <td>{Intellectual_Breadth[0]['credits']}</td>
                </tr>
                <tr>
                  <td>{Intellectual_Breadth[1]['class']}</td>
                  <td>{Intellectual_Breadth[1]['satisfied']}</td>
                  <td>{Intellectual_Breadth[1]['credits']}</td>
                </tr>
              </tbody>
              
              
              <thead>
              <tr>
              <th>{preReq[5]}</th>
              </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{General_electives[0]['class']}</td>
                  <td>{General_electives[0]['satisfied']}</td>
                  <td>{General_electives[0]['credits']}</td>
                </tr>
              </tbody>
              </Table>
            </Collapsible>
          </div>

        <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title" onClick={this.getMde}>Major Design Experience</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Satisfied</th>
                  <th>Credits</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>MDE Course</td>
                    <td>{egr[0]['satisfied']}</td>
                    <td>{egr[0]['credits']}</td>
                  </tr>
                  <tr>
                    <td>Adv TchCom for EE/CE</td>
                    <td>{egr[1]['satisfied']}</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Major Design Experience Professionalism</td>
                    <td>{egr[1]['satisfied']}</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </Table>
            </Collapsible>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Credit Distribution:
            <Doughnut data={pieData} options={donutOptions} />
          </div>
        </div>
        </div>
        <div className={s.semester}>
          {this.getSemesters()}
        </div>
      </div>
    );
  }
}

export default Tables;
