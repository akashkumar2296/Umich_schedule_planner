import React, { Component, PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';
import ReactDOM from 'react-dom';
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

const progCore = ['Computer Science', 'Probability and Statistics',
'Technical Communications']

const techElec = ['Upper Level CS', 'Flexible Technical Electives']

const mde_prog = ['Project Course', 'Computer Professionalism', 'Writing and Oracl Presentation'];

const compsci = [
{class: 'EECS 203', satisfied: 'Yes', credits:'4'},
{class: 'EECS 280', satisfied: 'Yes', credits:'4'},
{class: 'EECS 281', satisfied: 'Yes', credits:'4'},
{class: 'EECS 370', satisfied: 'Yes', credits:'4'},
{class: 'EECS 376', satisfied: 'Yes', credits:'4'},
{class: 'EECS 496', satisfied: 'Yes', credits:'4'}];

const probStats =
[{class: 'STATS 250', satisfied: 'Yes', credits:'4'}];

const techCom300 = [
{class: 'TCHNCLCM 300', satisfied: 'Yes', credits: '1'}];

const techElectives = [
{class: 'EECS 3XX', satisfied: 'Yes', credits:'4'},
{class: 'EECS 3XX', satisfied: 'Yes', credits:'4'},
{class: 'EECS 4XX', satisfied: 'Yes', credits:'4'},
{class: 'EECS 4XX', satisfied: 'Yes', credits:'4'},
{class: 'EECS 4XX', satisfied: 'Yes', credits:'4'}];

const mde = [
{class: 'EECS 497', satisfied: 'Yes', credits:'4'}];

const compProf = [
{class: 'EECS 496', satisfied: 'Yes', credits:'4'}];

const techCom497 = [
{class: 'TCHLCLCM 497', satisfied: 'Yes', credits:'2'}];


class TableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
      <tr>
      <td>{data.class}</td>
      <td>{data.satisfied}</td>
      <td>{data.credits}</td>
      </tr>
    );
    return (
      <tbody>{row}</tbody>
    );
  }
}

class Tabler extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TableRow data={this.props.data} />
    );
  }
}


class Tables extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.setTitle(title);
  }

  render() {
    return (
  

      <div className="animate">
      <select>
      <option value="volvo">freshman</option>
      <option value="saab">sophomore</option>
      <option value="opel">junior</option>
      <option value="audi">senior</option>
      </select>

      <select>
      <option value="volvo">Difficulty Level: 1</option>
      <option value="saab">Difficulty Level: 2</option>
      <option value="opel">Difficulty Level: 3</option>
      <option value="audi">Difficulty Level: 4</option>
      </select>
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
              <Tabler data={egr}/>
              <Tabler data={chemistry}/>
              <Tabler data={physics}/>
              <Tabler data={math}/>
              <Tabler data={Intellectual_Breadth}/>
              <Tabler data={General_electives}/>
              </Table>
            </Panel>
          </div>

          <div className="col-md-6">
            <Panel
              header={<span>CSE Program Requirements</span>}
              bsStyle="success" 
              >
              <Table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Satisfied</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <Tabler data={compsci}/>
              <Tabler data={probStats}/>
              <Tabler data={techCom300}/>
              <Tabler data={techElectives}/>
              <Tabler data={mde}/>
              <Tabler data={compProf}/>
              <Tabler data={techCom497}/>
              </Table>
            </Panel>
          </div>

        </div>
      </div>
      );
  }
}

export default Tables;
