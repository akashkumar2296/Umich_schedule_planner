import React, { Component, PropTypes } from 'react';
import { Panel, Table, ProgressBar } from 'react-bootstrap';
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
const all_semesters = ['Winter', 'Spring', 'Summer', 'Fall'];
var year = 2018;
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
      logname: '',
      items: [{
        semesters: '',
        style: '',
        year: '',
      }],
      program_id: '',
      program_name: '',
      requirements: [{
        req_id: '',
        req_name: '',
        credits_reqd: 0,
        credits_completed: 0,
        req_rows: [{
          sub_req_id: '',
          sub_req_name: '',
          num_credits: 0,
          num_credits_satisfied: 0,
          satisfied: false,
        }]
      }]
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
          <div id={sem.id + 'heat'}>
          <ProgressBar max={18} now={0} label={'0/18'}/>
          </div>
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

  getSatisfied(completed) {
    if(completed) {
      return "s.checkmark";
    }
    return "s.xmark";
  }

  // getRequirements() {
  //   const requirements = this.state.requirements.map(req =>
  //     (
  //       <div className="col-md-6">
  //       <Collapsible
  //         trigger={<Panel
  //           header={<span className="panel-title">Core Requirements</span>}
  //           bsStyle="primary" onClick={this.getCore}
  //           ></Panel>}
  //         classParentString = "" contentOuterClassName="panel-body"
  //         overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
  //           <Table>
  //           <thead>
  //             <tr>
  //               <th>Class</th>
  //               <th>Credits</th>
  //               <th>Satisfied</th>
  //             </tr>
  //           </thead>
  //             <tbody>
  //               {req.req_rows.map(row => 
  //                 (
  //                   <tr>
  //                     <td>{row.sub_req_name}</td>
  //                     <td>{row.num_credits_satisfied}/{row.num_credits}</td>
  //                     <ul className={this.getSatisfied(row.satisfied)}
  //                       <li></li>
  //                     </ul>
  //                   </tr>
  //                 ),
  //               );}
  //             </tbody>
  //           </Table>
  //         </Collapsible>
  //       </div>
  //   );

  // return
  //   (
  //     <div className={s.requirements}>
  //       {requirements}
  //     </div>
  //   );
  // }

  getRequirements() {
    return(
      <div className={s.requirements}>
        <div className="row">
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title">Core Requirements</span>}
              bsStyle="primary" onClick={this.getCore}
              ></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Credits</th>
                  <th>Satisfied</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>{egr[0]['class']}</td>
                    <td>{egr[0]['credits']}</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  </tr>
                  <tr>
                    <td>{egr[1]['class']}</td>
                    <td>{egr[1]['credits']}</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  </tr>
                </tbody>

              <tbody>
                <tr>
                  <td>{chemistry[0]['class']}</td>
                  <td>{chemistry[0]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{chemistry[1]['class']}</td>
                  <td>{chemistry[1]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{chemistry[2]['class']}</td>
                  <td>{chemistry[2]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>{physics[0]['class']}</td>
                  <td>{physics[0]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{physics[1]['class']}</td>
                  <td>{physics[1]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{physics[2]['class']}</td>
                  <td>{physics[2]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{physics[3]['class']}</td>
                  <td>{physics[3]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
              </tbody>

              <br></br>

              <tbody>
                <tr>
                  <td>{math[0]['class']}</td>
                  <td>{math[0]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{math[1]['class']}</td>
                  <td>{math[1]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{math[2]['class']}</td>
                  <td>{math[2]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
                <tr>
                  <td>{math[3]['class']}</td>
                  <td>{math[3]['credits']}</td>
                  <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  
                </tr>
              </tbody>
              </Table>
            </Collapsible>
          </div>
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title">Intellectual Breadth</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Credits</th>
                  <th>Satisfied</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td> Humanities </td>
                    <td> 3 </td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                    
                  </tr>
                  <tr>
                    <td> Upper Level Humanities </td>
                    <td> 3 </td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                    
                  </tr>
                  <tr>
                    <td> Total Credits 16 </td>
                    <td> 16 </td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                    
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
                      <th>Credits</th>
                      <th>Satisfied</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Upper Level CS Technical Electives</td>
                    <td>16</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                    
                  </tr>
                  <tr>
                    <td>18 CS Units</td>
                    <td>18</td>
                    <ul className={s.xmark}>
                      <li></li>
                    </ul>
                    
                  </tr>
              
                  <tr>
                    <td>Flexible Technical Electives</td>
                    <td>10</td>
                    <ul className={s.xmark}>
                      <li></li>
                    </ul>
                    
                  </tr>
              </tbody>
              </Table>
            </Collapsible>
          </div>

        <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span className="panel-title">Major Design Experience</span>}
              bsStyle="primary" onClick={this.getMde}></Panel>}
            classParentString = "" contentOuterClassName="panel-body"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller} >
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Credits</th>
                  <th>Satisfied</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>MDE Course</td>
                    <td>{egr[0]['credits']}</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  </tr>
                  <tr>
                    <td>Adv TchCom for EE/CE</td>
                    <td>2</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  </tr>
                  <tr>
                    <td>Major Design Experience Professionalism</td>
                    <td>2</td>
                    <ul className={s.checkmark}>
                      <li></li>
                    </ul>
                  </tr>
                </tbody>
              </Table>
            </Collapsible>
          </div>
        </div>
        </div>
      );
  }

  render() {
    return (
      <div ref="root" className="animate">
        {this.getRequirements()}
        <div className={s.semester}>
          {this.getSemesters()}
        </div>
      </div>
    );
  }
}

export default Tables;
