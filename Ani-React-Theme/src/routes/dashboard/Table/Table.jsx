import React, { Component, PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
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

class Tables extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="animate">
      <div className={s.requirements}>
        <div className="row">
          <div className="col-md-6">
          <Collapsible
            trigger={<Panel
              header={<span class="panel-title">Core Requirements</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body" open="true"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table table-hove>
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
              header={<span class="panel-title">Program Core</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body" open="true"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table table-hove>
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
              header={<span class="panel-title">Technical Electives</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body" open="true"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table table-hover>
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
              header={<span class="panel-title">Major Design Experience</span>}
              bsStyle="primary"></Panel>}
            classParentString = "" contentOuterClassName="panel-body" open="true"
            overflowWhenOpen="scroll" contentOuterClassName={s.scroller}>
              <Table table-hover>
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

        </div>


        <div className={s.semester}>
        <div className="row">
          <div className="col-md-3">
            <Panel
              header={<span>Winter 2018</span>}
              bsStyle="danger"
            >
              <Table primary>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
          <div className="col-md-3">
            <Panel
              header={<span>Fall 2018</span>}
              bsStyle="warning"
            >
              <Table primary>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
          <div className="col-md-3">
            <Panel
              header={<span>Winter 2019</span>}
              bsStyle="success"
            >
              <Table primary>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
          <div className="col-md-3">
            <Panel
              header={<span>Fall 2019</span>}
              bsStyle="info"
            >
              <Table primary>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Tables;
