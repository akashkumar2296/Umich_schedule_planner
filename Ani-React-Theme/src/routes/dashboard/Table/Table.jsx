import React, { Component, PropTypes } from 'react';
import { Panel, Table, ProgressBar } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
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

const colorGenerator = ['#de6764', '#5bc0de', '#5cb85c', '#f0ad4e']

const cse_requirements = {
  requirements: [{
    req_id: 0,
    req_name: 'Core Requirements',
    credits_reqd: 4,
    credits_completed: 0,
    req_rows: [
    {
      sub_req_name: 'Engineering 100',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 100,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Engineering 101/151',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 4,
      courses: [
      {
        course_num: 101,
        course_subject: 'EECS'
      },
      {
        course_num: 151,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Chemistry 125',
      num_credits: 1,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 125,
        course_subject: 'CHEM'
      }
      ]
    },
    {
      sub_req_name: 'Chemistry 126',
      num_credits: 1,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 126,
        course_subject: 'CHEM'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Chemistry 130/210/211',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 130,
        course_subject: 'CHEM'
      },
      {
        course_num: 210,
        course_subject: 'CHEM'
      },
      {
        course_num: 211,
        course_subject: 'CHEM'
      },
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Physics 140',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 140,
        course_subject: 'PHYS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Physics 141',
      num_credits: 1,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 141,
        course_subject: 'PHYS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Physics 240',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 240,
        course_subject: 'PHYS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Physics 241',
      num_credits: 1,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 241,
        course_subject: 'PHYS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Math 115/120',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 115,
        course_subject: 'MATH'
      },
      {
        course_num: 120,
        course_subject: 'MATH'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Math 116/121',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 116,
        course_subject: 'MATH'
      },
      {
        course_num: 121,
        course_subject: 'MATH'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Math 214/217/417/419',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 214,
        course_subject: 'MATH'
      },
      {
        course_num: 217,
        course_subject: 'MATH'
      },
      {
        course_num: 417,
        course_subject: 'MATH'
      },
      {
        course_num: 419,
        course_subject: 'MATH'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Math 215/216',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 215,
        course_subject: 'MATH'
      },
      {
        course_num: 216,
        course_subject: 'MATH'
      }
      ],
      satisfied: false
    }
    ]
  },
  {
    req_id: 1,
    req_name: 'Program Core',
    credits_reqd: 4,
    credits_completed: 0,
    req_rows: [
    {
      sub_req_name: 'EECS 203',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 203,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'EECS 280',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 280,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
        {
      sub_req_name: 'EECS 281',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 281,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'EECS 370',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 370,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'EECS 376',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 376,
        course_subject: 'EECS'
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'STATS 250',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 250,
        course_subject: 'STATS'
      }
      ],
      satisfied: false
    }
    ]
  },
    {
    req_id: 2,
    req_name: 'Intellectual Breadth',
    credits_reqd: 16,
    credits_completed: 0,
    req_rows: [
    {
      sub_req_name: 'Humanities',
      num_credits: 16,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Upper Level Humanities',
      num_credits: 3,
      num_credits_satisfied: 0,
      course_num_req: 300,
      courses: [
      {
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Total Credits',
      num_credits: 16,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
      }
      ],
      satisfied: false
    }
  ]
  },
  {
    req_id: 3,
    req_name: 'Technical Electives',
    credits_reqd: 26,
    credits_completed: 0,
    req_rows: [
    {
      sub_req_name: 'Upper Level Technical Electives',
      num_credits: 16,
      num_credits_satisfied: 0,
      course_num_req: 300,
      courses: [
      {
      }
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Total Credits',
      num_credits: 26,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
      }
      ],
      satisfied: false
    }
    ]
  },
    {
    req_id: 4,
    req_name: 'Major Design Experience',
    credits_reqd: 26,
    credits_completed: 0,
    req_rows: [
    {
      sub_req_name: 'Major Design Experience Course',
      num_credits: 4,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 441,
        course_subject: 'EECS'
      },
      {
        course_num: 467,
        course_subject: 'EECS'
      },
      {
        course_num: 470,
        course_subject: 'EECS'
      },
      {
        course_num: 481,
        course_subject: 'EECS'
      },
      {
        course_num: 494,
        course_subject: 'EECS'
      },
      ],
      satisfied: false
    },
    {
      sub_req_name: 'Adv TchCom for EE/CE',
      num_credits: 2,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 496,
        course_subject: 'TCHLCMN'
      }
      ]
    },
    {
      sub_req_name: 'Major Design Experience Professionalism',
      num_credits: 2,
      num_credits_satisfied: 0,
      course_num_req: 0,
      courses: [
      {
        course_num: 496,
        course_subject: 'EECS'
      }
      ]
    }
    ]
  }
]
};

class Tables extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setCore: PropTypes.func.isRequired,
    setMde: PropTypes.func.isRequired,
    setTech: PropTypes.func.isRequired,
    setProgram: PropTypes.func.isRequired,
    //setIntel: PropTypes.func.isRequired,
  };

  //Load the classes corresponding to each requirement category
  loadClasses(req){
    console.log(this);
    if(req.req_name == "Core Requirements"){
      this.context.setCore();
    }
    else if(req.req_name == "Technical Electives"){
      this.context.setTech();
    }
    else if(req.req_name == "Program Core"){
      this.context.setProgram();
    }
    // else if(req.req_name == "Intellectual Breadth"){
    //   this.context.setIntel();
    // }
    else if(req.req_name == "Major Design Experience"){
      this.context.setMde();
    }
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
      program_id: '',
      program_name: '',
      requirements: cse_requirements.requirements
    }
    this.loadClasses = this.loadClasses.bind(this);
    this.createSemesters = this.createSemesters.bind(this);
    this.getSemesters = this.getSemesters.bind(this);
    this.getRequirements = this.getRequirements.bind(this);
    // this.getCore = this.getCore.bind(this);
    // this.getMde = this.getMde.bind(this);
    // this.getProgramCore = this.getProgramCore.bind(this);
    // this.getTech = this.getTech.bind(this);
  }

  createSemesters() {
    var semester_items = [];
    var semester_id = 0;
    for (var i = 0; i < num_semesters; i++) {
      if (!((i+1)%4)) {
        year++;
      }
      var semester_name = all_semesters[i%4] + ' ' + year
      var panel_style = panel_styles[i%4];
      var id = 'droppable' + semester_id;
      console.log(panel_style);
      semester_id++;
      semester_items.push({
        semesters: semester_name,
        style: panel_style,
        year: year,
        id: id,
      });
    }
      this.setState({
        items: semester_items,
      });
  }

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
            <Table>
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

  getSatisfied(num_credits_satisfied, num_credits) {
    if(num_credits_satisfied >= num_credits) {
      return (
        <ul className={s.checkmark}>
          <li></li>
        </ul>
      );
    }
    return(
      <ul className={s.xmark}>
        <li></li>
      </ul>
    );
  }

  getRequirements() {
    // if(this.state.input_courses){
    //   const ret_val = this.state.requirements.map((req, index1) =>
    //     (
    //       <div className="col-md-6">
    //       <Collapsible open="true"
    //         trigger={<Panel
    //           header={<span className="panel-title">{req.req_name}</span>}
    //           bsStyle="primary"
    //           ></Panel>}
    //         classParentString = "" contentOuterClassName="panel-body"
    //         overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
    //           <Table>
    //           <thead>
    //             <tr>
    //               <th>Class</th>
    //               <th>Credits you've completed</th>
    //               <th>Satisfied?</th>
    //             </tr>
    //           </thead>
    //             <tbody>
    //               {req.req_rows.map((row, index2) =>
    //                 (
    //                   <tr>
    //                     <td>{row.sub_req_name}</td>
    //                     <td><input type="text" value={row.num_credits_satisfied} onChange={this.inputCredits(index1,index2)} />/{row.num_credits}</td>
    //                     {this.getSatisfied(row.num_credits_satisfied, row.num_credits)}
    //                   </tr>
    //                 ),
    //               )}
    //             </tbody>
    //           </Table>
    //         </Collapsible>
    //       </div>
    //     ),
    //   );
    //   return (
    //     <div className="row">
    //       {ret_val}
    //     </div>
    //   );
    // }
    const ret_val = this.state.requirements.map(req =>
      (
        <div className="col-md-6">
        <Collapsible
          onOpen = {this.loadClasses.bind(this, req)}
          trigger={<Panel
            header={<span className="panel-title">{req.req_name}</span>}
            bsStyle="primary"
            ></Panel>}
          classParentString = "" contentOuterClassName="panel-body"
          overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
            <Table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Completed/Required Credits</th>
                <th>Satisfied</th>
              </tr>
            </thead>
              <tbody>
                {req.req_rows.map(row =>
                  (
                    <tr>
                      <td>{row.sub_req_name}</td>
                      <td>{row.num_credits_satisfied}/{row.num_credits}</td>
                        {this.getSatisfied(row.num_credits_satisfied, row.num_credits)}
                    </tr>
                  ),
                )}
              </tbody>
            </Table>
          </Collapsible>
        </div>
      ),
    );
    return (
      <div className="row">
        {ret_val}
      </div>
    );
    }

  // getRequirements() {
  //   return(
  //     <div className={s.requirements}>
  //       <div className="row">
  //         <div className="col-md-6">
  //         <Collapsible
  //           trigger={<Panel
  //             header={<span className="panel-title">Core Requirements</span>}
  //             bsStyle="primary" onClick={this.getCore}
  //             ></Panel>}
  //           classParentString = "" contentOuterClassName="panel-body"
  //           overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
  //             <Table>
  //             <thead>
  //               <tr>
  //                 <th>Class</th>
  //                 <th>Credits</th>
  //                 <th>Satisfied</th>
  //               </tr>
  //             </thead>
  //               <tbody>
  //                 <tr>
  //                   <td>{egr[0]['class']}</td>
  //                   <td>{egr[0]['credits']}</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
  //                 </tr>
  //                 <tr>
  //                   <td>{egr[1]['class']}</td>
  //                   <td>{egr[1]['credits']}</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
  //                 </tr>
  //               </tbody>

  //             <tbody>
  //               <tr>
  //                 <td>{chemistry[0]['class']}</td>
  //                 <td>{chemistry[0]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{chemistry[1]['class']}</td>
  //                 <td>{chemistry[1]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{chemistry[2]['class']}</td>
  //                 <td>{chemistry[2]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //             </tbody>

  //             <tbody>
  //               <tr>
  //                 <td>{physics[0]['class']}</td>
  //                 <td>{physics[0]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{physics[1]['class']}</td>
  //                 <td>{physics[1]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{physics[2]['class']}</td>
  //                 <td>{physics[2]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{physics[3]['class']}</td>
  //                 <td>{physics[3]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //             </tbody>

  //             <br></br>

  //             <tbody>
  //               <tr>
  //                 <td>{math[0]['class']}</td>
  //                 <td>{math[0]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{math[1]['class']}</td>
  //                 <td>{math[1]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{math[2]['class']}</td>
  //                 <td>{math[2]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //               <tr>
  //                 <td>{math[3]['class']}</td>
  //                 <td>{math[3]['credits']}</td>
  //                 <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                  
  //               </tr>
  //             </tbody>
  //             </Table>
  //           </Collapsible>
  //         </div>
  //         <div className="col-md-6">
  //         <Collapsible
  //           trigger={<Panel
  //             header={<span className="panel-title">Intellectual Breadth</span>}
  //             bsStyle="primary"></Panel>}
  //           classParentString = "" contentOuterClassName="panel-body"
  //           overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
  //             <Table>
  //             <thead>
  //               <tr>
  //                 <th>Class</th>
  //                 <th>Credits</th>
  //                 <th>Satisfied</th>
  //               </tr>
  //             </thead>
  //               <tbody>
  //                 <tr>
  //                   <td> Humanities </td>
  //                   <td> 3 </td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
  //                 <tr>
  //                   <td> Upper Level Humanities </td>
  //                   <td> 3 </td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
  //                 <tr>
  //                   <td> Total Credits 16 </td>
  //                   <td> 16 </td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
  //               </tbody>
  //             </Table>
  //           </Collapsible>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="col-md-6">
  //         <Collapsible
  //           trigger={<Panel
  //             header={<span className="panel-title">Technical Electives</span>}
  //             bsStyle="primary"></Panel>}
  //           classParentString = "" contentOuterClassName="panel-body"
  //           overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
  //             <Table>
  //                 <thead>
  //                   <tr>
  //                     <th>Class</th>
  //                     <th>Credits</th>
  //                     <th>Satisfied</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                 <tr>
  //                   <td>Upper Level CS Technical Electives</td>
  //                   <td>16</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
  //                 <tr>
  //                   <td>18 CS Units</td>
  //                   <td>18</td>
  //                   <ul className={s.xmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
              
  //                 <tr>
  //                   <td>Flexible Technical Electives</td>
  //                   <td>10</td>
  //                   <ul className={s.xmark}>
  //                     <li></li>
  //                   </ul>
                    
  //                 </tr>
  //             </tbody>
  //             </Table>
  //           </Collapsible>
  //         </div>

  //       <div className="col-md-6">
  //         <Collapsible
  //           trigger={<Panel
  //             header={<span className="panel-title">Major Design Experience</span>}
  //             bsStyle="primary" onClick={this.getMde}></Panel>}
  //           classParentString = "" contentOuterClassName="panel-body"
  //           overflowWhenOpen="scroll" contentOuterClassName={s.scroller} >
  //             <Table>
  //             <thead>
  //               <tr>
  //                 <th>Class</th>
  //                 <th>Credits</th>
  //                 <th>Satisfied</th>
  //               </tr>
  //             </thead>
  //               <tbody>
  //                 <tr>
  //                   <td>MDE Course</td>
  //                   <td>{egr[0]['credits']}</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
  //                 </tr>
  //                 <tr>
  //                   <td>Adv TchCom for EE/CE</td>
  //                   <td>2</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
  //                 </tr>
  //                 <tr>
  //                   <td>Major Design Experience Professionalism</td>
  //                   <td>2</td>
  //                   <ul className={s.checkmark}>
  //                     <li></li>
  //                   </ul>
  //                 </tr>
  //               </tbody>
  //             </Table>
  //           </Collapsible>
  //         </div>
  //       </div>
  //       </div>
  //     );
  // }

  render() {
    return (
      <div ref="root" className="animate">
        <div>
          {this.getRequirements()}
        </div>
        <div className={s.semester}>
          {this.getSemesters()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Tables);
