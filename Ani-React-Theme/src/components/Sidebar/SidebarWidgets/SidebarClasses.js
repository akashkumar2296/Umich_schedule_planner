import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage } from 'react-intl';
import s from './SidebarWidgets.css';
import FilterableTable from 'react-filterable-table';

// class ClassAcademicGroup extends Component {

//   render() {
//     // const academic_group = this.props.academic_group;
//     return (
//       <div>
//         <th colSpan="2">
//           Hello
//         </th>
//       </div>
//     );
//   }
// }

// class ClassRow extends Component {
//   render() {
//     const subject = this.props.subject;
//     const course_num = this.props.course_num;
//     const course_name = this.props.course_name;
//     return (
//       <div>
//         <td>{subject}</td>
//         <td>{course_num}</td>
//         <td>{course_name}</td>
//       </div>
//     );
//   }
// }

// class ClassesTable extends Component {
//   render() {
//     const rows = [];
//     let LastAcademicGroup = null;

//     this.props.classes.forEach((course) => {
//       if (course.academic_group !== LastAcademicGroup) {
//         rows.push(
//           <ClassAcademicGroup
//             academic_group={course.academic_group}
//             />
//         );
//       }
//       rows.push(
//         <ClassAcademicGroup
//           course={course}
//           />
//       );
//       LastAcademicGroup = course.academic_group;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Course Number</th>
//             <th>Course Name</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends Component {
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//       </form>
//     );
//   }
// }

class FilterableClassesTable extends Component {
  render() {
    return (
      <FilterableTable
        namespace="Classes"
        initialSort="name"
        data={classes}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
        pagersVisible={false}
        className="panel panel-success"
        headerVisible={false}
      />
    );
  }
}

let fields = [
  { name: 'subject', displayName: "Subject"},
  { name: 'course_num', displayName: "Course #"},
  { name: 'credits', displayName: "Credits"}
];

let classes = [
  {academic_group: 'Engineering', subject: 'EECS', course_num: '280', course_name: 'Prog&Data Struct', credits:'4'},
  {academic_group: 'Engineering', subject: 'EECS', course_num: '281', course_name: 'Data Struct&Algor', credits:'4'}
];


export default withStyles(s)(FilterableClassesTable);

