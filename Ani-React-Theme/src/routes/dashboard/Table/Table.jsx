import React, { Component, PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';

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

  componentWillMount() {
    // console.log(this.context);
    this.context.setTitle(title);
  }

  render() {
    return (
      <div className="animate">
        <div className="row">
          <div className="col-md-6">
            <Panel
              header={<span>Pre-Requisites</span>}
              bsStyle="primary" 
              >
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
            </Panel>
          </div>
          <div className="col-md-6" class="hidden">
            <Panel
              header={<span>Bordered Table</span>}
              bsStyle="default"
            >
              <Table bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr>
                    <td>Andy</td>
                    <td>andygmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr>
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" class="hidden">
            <Panel
              header={<span>Striped Table</span>}
              bsStyle="info"
            >
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr>
                    <td>Andy</td>
                    <td>andygmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr>
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
          <div className="col-md-6" class="hidden">
            <Panel
              header={<span>Hover Table</span>}
              bsStyle="success"
            >
              <Table hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr>
                    <td>Andy</td>
                    <td>andygmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr>
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
        </div>

        <div className="row" class="hidden">
          <div className="col-md-6">
            <Panel
              header={<span>Condensed Table</span>}
              bsStyle="danger"
            >
              <Table condensed>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr>
                    <td>Andy</td>
                    <td>andygmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr>
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
          <div className="col-md-6">
            <Panel
              header={<span>Condensed, Bordered, Striped Table</span>}
              bsStyle="warning"
            >
              <Table condensed bordered striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr>
                    <td>Andy</td>
                    <td>andygmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr>
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
        </div>

        <div className="row" class="hidden">
          <div className="col-sm-12">
            <Panel
              header={<span>Coloured Table</span>}
              bsStyle="default"
            >
              <Table bordered className="white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="success">
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>London, UK</td>
                  </tr>
                  <tr className="info">
                    <td>Andy</td>
                    <td>andy@gmail.com</td>
                    <td>Merseyside, UK</td>
                  </tr>
                  <tr className="warning">
                    <td>Frank</td>
                    <td>frank@gmail.com</td>
                    <td>Southampton, UK</td>
                  </tr>
                  <tr className="danger">
                    <td>Rickie</td>
                    <td>rickie@gmail.com</td>
                    <td>Burnley, UK</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </div>
        </div>

      </div>
    );
  }
}

export default Tables;
