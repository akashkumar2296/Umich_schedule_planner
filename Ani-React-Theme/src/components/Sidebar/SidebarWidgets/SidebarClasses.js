import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage } from 'react-intl';
import s from './SidebarWidgets.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

// class FilterableClassesTable extends Component {
//   render() {
//     return (
//       <FilterableTable
//         namespace="Classes"
//         initialSort="name"
//         data={classes}
//         fields={fields}
//         noRecordsMessage="There are no people to display"
//         noFilteredRecordsMessage="No people match your filters!"
//         pagersVisible={false}
//         className="panel panel-success"
//         headerVisible={false}
//       />
//     );
//   }
// }


// let fields = [
//   { name: 'subject', displayName: "Subject"},
//   { name: 'course_num', displayName: "Course #"},
//   { name: 'credits', displayName: "Credits"}
// ];

const classes = [
  {id: 'item-0', academic_group: 'Engineering', subject: 'EECS', course_num: '280', course_name: 'Prog & Data Struct', credits:'4'},
  {id: 'item-1', academic_group: 'Engineering', subject: 'EECS', course_num: '281', course_name: 'Data Struct & Algor', credits:'4'},
  {id: 'item-2', academic_group: 'Engineering', subject: 'EECS', course_num: '101', course_name: '', credits: '4'},
  {id: 'item-3', academic_group: 'Engineering', subject: 'EECS', course_num: '183', course_name: '', credits: '4'},
  {id: 'item-4', academic_group: 'Engineering', subject: 'EECS', course_num: '203', course_name: '', credits: '4'},
  {id: 'item-5', academic_group: 'Engineering', subject: 'EECS', course_num: '215', course_name: '', credits: '4'},
  {id: 'item-6', academic_group: 'Engineering', subject: 'EECS', course_num: '216', course_name: '', credits: '4'},
  {id: 'item-7', academic_group: 'Engineering', subject: 'EECS', course_num: '230', course_name: '', credits: '4'},
  {id: 'item-8', academic_group: 'Engineering', subject: 'EECS', course_num: '250', course_name: '', credits: '4'},
  {id: 'item-9', academic_group: 'Engineering', subject: 'EECS', course_num: '270', course_name: '', credits: '4'},
  {id: 'item-12', academic_group: 'Engineering', subject: 'EECS', course_num: '282', course_name: '', credits: '4'},
  {id: 'item-13', academic_group: 'Engineering', subject: 'EECS', course_num: '283', course_name: '', credits: '4'},
  {id: 'item-14', academic_group: 'Engineering', subject: 'EECS', course_num: '285', course_name: '', credits: '4'},
  {id: 'item-15', academic_group: 'Engineering', subject: 'EECS', course_num: '301', course_name: '', credits: '4'},
  {id: 'item-16', academic_group: 'Engineering', subject: 'EECS', course_num: '311', course_name: '', credits: '4'},
  {id: 'item-17', academic_group: 'Engineering', subject: 'EECS', course_num: '312', course_name: '', credits: '4'},
  {id: 'item-18', academic_group: 'Engineering', subject: 'EECS', course_num: '314', course_name: '', credits: '4'},
  {id: 'item-19', academic_group: 'Engineering', subject: 'EECS', course_num: '320', course_name: '', credits: '4'},
  {id: 'item-20', academic_group: 'Engineering', subject: 'EECS', course_num: '330', course_name: '', credits: '4'},
  {id: 'item-21', academic_group: 'Engineering', subject: 'EECS', course_num: '334', course_name: '', credits: '4'},
  {id: 'item-22', academic_group: 'Engineering', subject: 'EECS', course_num: '351', course_name: '', credits: '4'},
  {id: 'item-23', academic_group: 'Engineering', subject: 'EECS', course_num: '370', course_name: '', credits: '4'},
  {id: 'item-24', academic_group: 'Engineering', subject: 'EECS', course_num: '373', course_name: '', credits: '4'},
  {id: 'item-18', academic_group: 'Engineering', subject: 'EECS', course_num: '376', course_name: '', credits: '4'},
  {id: 'item-19', academic_group: 'Engineering', subject: 'EECS', course_num: '381', course_name: '', credits: '4'},
  {id: 'item-20', academic_group: 'Engineering', subject: 'EECS', course_num: '382', course_name: '', credits: '4'},
  {id: 'item-21', academic_group: 'Engineering', subject: 'EECS', course_num: '388', course_name: '', credits: '4'},
  {id: 'item-22', academic_group: 'Engineering', subject: 'EECS', course_num: '398', course_name: '', credits: '4'},
  {id: 'item-23', academic_group: 'Engineering', subject: 'EECS', course_num: '399', course_name: '', credits: '4'},
  {id: 'item-24', academic_group: 'Engineering', subject: 'EECS', course_num: '402', course_name: '', credits: '4'}
];


// // fake data generator
// const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
//   id: `item-${k}`,
//   content: `item ${k}`
// }));

// a little function to help us with reordering the result

const grid = 5;

const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 1px 0`,
  
  // change background colour if dragging
  background: isDragging ? 'white' : 'white',
  
  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 0,
  width: '100%'
});
      
class FilterableClassesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: classes
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  
  onDragEnd (result) {
    // dropped outside the list
    if(!result.destination) {
       return; 
    }
    
    this.setState({
      items
    });
  }
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
     return (
      <div className={s.classList}>
        <Droppable droppableId="courses">
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map(item => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableStyle,
                          snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                        <div className="row">
                          <div className="col-xs-6">
                            {item.subject}
                          </div>
                          <div className="col-xs-3">
                            {item.course_num}
                          </div>
                          <div className="col-xs-3">
                            {item.credits}
                          </div>
                        </div>
                      </div>
                      {provided.placeholder}
                    </div>
                   )}
                </Draggable>
               ))}
              {provided.placeholder}
            </div>
           )}
        </Droppable>
      </div>
     );
  }
}

export default withStyles(s)(FilterableClassesTable);

