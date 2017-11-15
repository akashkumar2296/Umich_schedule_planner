import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { IntlProvider, addLocaleData } from 'react-intl';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import $ from 'jquery';
import s from './App.css';
import s2 from '../../routes/dashboard/Table/Table.css'
import style from '../../common/styles/bootstrap.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Table from '../../routes/dashboard/Table';
import appendReactDOM from 'append-react-dom';
import dutchMessages from '../../../languages/de.json';
import englishMessages from '../../../languages/en.json';
import hindiMessages from '../../../languages/hn.json';
import urduMessages from '../../../languages/ur.json';
import en from 'react-intl/locale-data/en';
import hi from 'react-intl/locale-data/hi';
import ur from 'react-intl/locale-data/ur';
import de from 'react-intl/locale-data/de';
import ReactDOM from 'react-dom';
import { Panel, ProgressBar, Button } from 'react-bootstrap';

// import localForage from 'localforage';


addLocaleData([...en, ...hi, ...ur, ...de]);

const langMessage = {
  'en': englishMessages,
  'hi': hindiMessages,
  'de': dutchMessages,
  'ur': urduMessages,
}

const classes = [
  // {id: '19', academic_group: 'Engineering', subject: 'EECS', course_num: '280', course_name: 'Prog & Data Structures', credits: 4},
  // {id: '20', academic_group: 'Engineering', subject: 'EECS', course_num: '281', course_name: 'Data Structures & Algorithms', credits: 4},
  // {id: '21', academic_group: 'Engineering', subject: 'EECS', course_num: '101', course_name: '', credits: 4},
  // {id: '22', academic_group: 'Engineering', subject: 'EECS', course_num: '183', course_name: '', credits: 4},
  // {id: '23', academic_group: 'Engineering', subject: 'EECS', course_num: '203', course_name: '', credits: 4},
  // {id: '24', academic_group: 'Engineering', subject: 'EECS', course_num: '215', course_name: '', credits: 4},
  // {id: '25', academic_group: 'Engineering', subject: 'EECS', course_num: '216', course_name: '', credits: 4},
  // {id: '26', academic_group: 'Engineering', subject: 'EECS', course_num: '230', course_name: '', credits: 4},
  // {id: '27', academic_group: 'Engineering', subject: 'EECS', course_num: '250', course_name: '', credits: 4},
  // {id: '28', academic_group: 'Engineering', subject: 'EECS', course_num: '270', course_name: '', credits: 4},
  // {id: '29', academic_group: 'Engineering', subject: 'EECS', course_num: '282', course_name: '', credits: 4},
  // {id: '30', academic_group: 'Engineering', subject: 'EECS', course_num: '283', course_name: '', credits: 4},
  // {id: '31', academic_group: 'Engineering', subject: 'EECS', course_num: '285', course_name: '', credits: 4},
  // {id: '32', academic_group: 'Engineering', subject: 'EECS', course_num: '301', course_name: '', credits: 4},
  // {id: '33', academic_group: 'Engineering', subject: 'EECS', course_num: '311', course_name: '', credits: 4},
  // {id: '34', academic_group: 'Engineering', subject: 'EECS', course_num: '312', course_name: '', credits: 4},
  // {id: '35', academic_group: 'Engineering', subject: 'EECS', course_num: '314', course_name: '', credits: 4},
  // {id: '36', academic_group: 'Engineering', subject: 'EECS', course_num: '320', course_name: '', credits: 4}
];

const core_requirements = [
  {id: '0', academic_group: 'Engineering', subject: 'EECS', course_num: '100', course_name: 'Intro Engineering', credits: 4},
  {id: '1', academic_group: 'Engineering', subject: 'EECS', course_num: '101', course_name: 'Intro Comp & Prog', credits: 4},
  {id: '2', academic_group: 'Chemistry', subject: 'CHEM', course_num: '125', course_name: 'Gen Chem Lab I', credits: 1},
  {id: '3', academic_group: 'Chemistry', subject: 'CHEM', course_num: '126', course_name: 'Gen Chem Lab II', credits: 1},
  {id: '4', academic_group: 'Chemistry', subject: 'CHEM', course_num: '130', course_name: 'Gen Chemistry', credits: 3},
  {id: '5', academic_group: 'Physics', subject: 'PHYS', course_num: '140', course_name: 'General Physics I', credits: 4},
  {id: '6', academic_group: 'Physics', subject: 'PHYS', course_num: '141', course_name: 'Elementary Lab I', credits: 1},
  {id: '7', academic_group: 'Mathematics', subject: 'MATH', course_num: '115', course_name: 'Calculus I', credits: 4},
  {id: '8', academic_group: 'Mathematics', subject: 'MATH', course_num: '116', course_name: 'Calculus II', credits: 4},
  {id: '9', academic_group: 'Mathematics', subject: 'MATH', course_num: '214', course_name: 'Applied Linear Algebra', credits: 4},
  {id: '10', academic_group: 'Mathematics', subject: 'MATH', course_num: '215', course_name: 'Calculus III', credits: 4},
  {id: '11', academic_group: 'Physics', subject: 'PHYS', course_num: '240', course_name: 'General Physics II', credits: 4},
  {id: '12', academic_group: 'Physics', subject: 'PHYS', course_num: '241', course_name: 'Elementary Lab II', credits: 1}
]

const mde_requirements = [
  {id: '13', academic_group: 'Engineering', subject: 'EECS', course_num: '441', course_name: 'Mbl App Dev Entrprnr', credits: 4},
  {id: '14', academic_group: 'Engineering', subject: 'EECS', course_num: '467', course_name: 'Autonomous Robotics Laboratory', credits: 4},
  {id: '15', academic_group: 'Engineering', subject: 'EECS', course_num: '470', course_name: 'Comp Architecture', credits: 4},
  {id: '16', academic_group: 'Engineering', subject: 'EECS', course_num: '481', course_name: 'Software Engineering', credits: 4},
  {id: '17', academic_group: 'Engineering', subject: 'EECS', course_num: '494', course_name: 'Game Design and Implementation', credits: 4},
  {id: '18', academic_group: 'Engineering', subject: 'EECS', course_num: '497', course_name: 'Major Design Projects', credits: 4},
  {id: '19', academic_group: 'Technical Communication', subject: 'TCHLCMN', course_num: '496', course_name: 'Adv TchCom for EE/CE', credits: 2},
  {id: '20', academic_group: 'Engineering', subject: 'EECS', course_num: '496', course_name: 'Major Design Experience Professionalism', credits: 2}
]

const colorGenerator = ['#de6764', '#5bc0de', '#5cb85c', '#f0ad4e']

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  result.splice(startIndex, 1);
  // const [removed] = result.splice(startIndex, 1);

  return result;
};

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

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
      setLang: PropTypes.func,
      setCore: PropTypes.func,
      setMde: PropTypes.func
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
    setLang: PropTypes.func,
    setCore: PropTypes.func,
    setMde: PropTypes.func
  };

  constructor(props) {
    super(props);
    // console.log('local lang in app js', localForage.getItem('lang',(err, value) => {
    //   console.log('value of lang 123', value);
    // }));
    this.state = {
      lang: 'en',
      message: englishMessages,
      search_classes: [{
        id: '',
        academic_group: '',
        subject: '',
        course_num: '',
        course_name: '',
        credits: 0
      }],
      added_classes: [{}],
      credits_completed: 0,
      credits_required: 128,
      credits_by_semester: [0,0,0,0]
    };


    this.onDragEnd = this.onDragEnd.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updateCredits = this.updateCredits.bind(this);
    this.get_added_classes = this.get_added_classes.bind(this);
    this.remove_course = this.remove_course.bind(this);
    this.get_heat_bar = this.get_heat_bar.bind(this);
  }



  updateCredits(course_credits){
    course_credits += this.state.credits_completed;
    this.setState({
      credits_completed: course_credits
    });
  }

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
      setLang: lang => {
        let textMessage = langMessage[lang];
        this.setState({
          lang,
          message: textMessage,
        });
      },
      setCore: core => {
        console.log("HELLO");
        this.setState({
          search_classes: core_requirements
        });
      },
      setMde: mde => {
        console.log("updating mde");
        console.log(mde_requirements);
        this.setState({
          search_classes: mde_requirements
        });
      }
    };
  }

  componentWillMount() {
    // console.log("fdsfsd", $(window));
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
    insertCss(style);
    // localForage.getItem('lang', (err, value) => {
    //   if (value) {
    //     // console.log('lang messagesssssssss', langMessage[value]);
    //     this.setState({
    //       lang: value,
    //       message: langMessage[value],
    //     });
    //   }
    // })
  }

  componentDidMount() {
    // console.log("local storage", window.localStorage.getItem("language123"));
    window.scrollTo(0,0);
    let setLang = window.localStorage.getItem("language123");
    if (!setLang) {
        setLang = 'en';
    }
    this.setState({
      lang: setLang,
      message: langMessage[setLang],
      search_classes: classes,
      credits_completed: 0,
      credits_required: 128
    });
  }

  componentWillUpdate() {

    let ele =  document.querySelector('section');
    if (ele) {
      ele.scrollTop = 0;
    }
  }

  componentWillUnmount() {
    this.removeCss();
  }

  updateView (semester_id, course_id){
    const course = this.state.search_classes[course_id];
    course.semester_id = semester_id;
    this.setState({
      added_classes: this.state.added_classes.concat(course)
    });
  }

  remove_course(course, index) {
    const newState = this.state.added_classes;
    const search_classes = this.state.search_classes;
    var credits_by_semester = this.state.credits_by_semester;
    credits_by_semester[index] -= course.credits;
    newState.splice(newState.indexOf(course), 1);
    search_classes.splice(index, 0, course);
    console.log(search_classes);
    console.log("credits_by_semester", credits_by_semester);
    this.setState({
      search_classes: search_classes,
      added_classes: newState,
      credits_by_semester: credits_by_semester
    });

    this.updateCredits(-course.credits);

    var id = course.semester_id;

    this.get_heat_bar(course.semester_id);
    const element = (<div className="row"> {this.get_added_classes(id)} </div>);
    ReactDOM.render(
        element,
        document.getElementById(id)
     );
    console.log("Removed");
  }

  get_added_classes(id, index){
    const classes = this.state.added_classes.reduce((acc, course) => {
      if (id == course.semester_id){
        acc.push(<div className={s2.semester_rows}> {course.course_name}
          <div className={s2.remove_course}> <a href="#" onClick={this.remove_course.bind(this, course, index)} aria-label="Remove class">&times;</a></div> </div>);
      }
      return acc;
    }, []);
    return classes;
  }

  get_heat_bar(id){
    var heat_id = (id + 'heat');
    var acc = 0;
    var num_credits = this.state.added_classes.reduce((acc, course) => {
      if (id == course.semester_id){
        acc += course.credits;
        console.log(typeof(course.credits));
      }
      return acc;
    }, 0);
    console.log(typeof(num_credits));
    console.log("get_heat_bar", num_credits);
    var heat_bar = (<ProgressBar max={18} now={num_credits} />);
    ReactDOM.render(
        heat_bar,
        document.getElementById(heat_id)
    );
  }

  onDragEnd (result) {
    // Dropped into the semester tables
    console.log(result);
    if(!result.destination || result.destination.droppableId === 'courses') {
       return;
    }
    else{
      this.setState({ credits_completed: this.state.credits_completed + this.state.search_classes[result.source.index].credits })
      this.updateView(result.destination.droppableId, result.source.index);

      var index = result.destination.droppableId.replace( /^\D+/g, '');
      console.log("index", index);
      var id = result.destination.droppableId;

      console.log("credits:", this.state.credits_by_semester[index]);

      const search_classes = reorder(
        this.state.search_classes,
        result.source.index,
        result.destination.index
      );

      var credits_by_semester = this.state.credits_by_semester;
      credits_by_semester[index] += this.state.search_classes[result.source.index].credits;

      if(credits_by_semester[index] > 18){
        return;
      }

      const element = (<div className="row"> {this.get_added_classes(id, result.source.index)} </div>);
      this.get_heat_bar(id);

      console.log("Credits:", credits_by_semester);
      this.setState({
        search_classes: search_classes,
        credits_by_semester: credits_by_semester
      });
      ReactDOM.render(
        element,
        document.getElementById(id)
     );
    }
  }


  render() {
    // console.log('inside render', this.state);
    console.log('Children');
    console.log(this.props.children);
    return (!this.props.error && this.props.header) ? (
            <IntlProvider locale={this.state.lang} messages={this.state.message}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div className={`dashboard-page ${s.dashboardPage}`}>
                  <Header updateCredits={this.updateCredits} credits_completed={this.state.credits_completed}
                    credits_required={this.state.credits_required} />
                  <Sidebar onDragEnd={this.onDragEnd} search_classes={this.state.search_classes}/>
                  <section id={s.bodyContainer} className={s.uiView}>
                    {this.props.children}
                  </section>
              </div>
            </DragDropContext>
          </IntlProvider>
    ) :(
        this.props.children
    );
  }
}

// export default withStyles(s)(App);
export default App;


// <ReactCSSTransitionGroup
//   transitionName="ani"
//   transitionAppear={true}
//   transitionAppearTimeout={500}
//   transitionEnter={false}
//   transitionLeave={false}
//   >
//   <section id={s.bodyContainer} className={s.uiView}>
//     {this.props.children}
//   </section>
// </ReactCSSTransitionGroup>
