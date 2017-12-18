import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { IntlProvider, addLocaleData } from 'react-intl';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Search } from 'full-text-search';
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
var fullTextSearch = require('full-text-search');
var search = new fullTextSearch({
  index_amount: 15,
  minimum_chars: 3
});
// import localForage from 'localforage';


addLocaleData([...en, ...hi, ...ur, ...de]);



const langMessage = {
  'en': englishMessages,
  'hi': hindiMessages,
  'de': dutchMessages,
  'ur': urduMessages,
}

// const classes = [
//   {id: '19', academic_group: 'Engineering', subject: 'EECS', course_num: '280', course_name: 'Prog & Data Structures', credits: 4},
//   {id: '20', academic_group: 'Engineering', subject: 'EECS', course_num: '281', course_name: 'Data Structures & Algorithms', credits: 4},
//   {id: '21', academic_group: 'Engineering', subject: 'EECS', course_num: '101', course_name: '', credits: 4},
//   {id: '22', academic_group: 'Engineering', subject: 'EECS', course_num: '183', course_name: '', credits: 4},
//   {id: '23', academic_group: 'Engineering', subject: 'EECS', course_num: '203', course_name: '', credits: 4},
//   {id: '24', academic_group: 'Engineering', subject: 'EECS', course_num: '215', course_name: '', credits: 4},
//   {id: '25', academic_group: 'Engineering', subject: 'EECS', course_num: '216', course_name: '', credits: 4},
//   {id: '26', academic_group: 'Engineering', subject: 'EECS', course_num: '230', course_name: '', credits: 4},
//   {id: '27', academic_group: 'Engineering', subject: 'EECS', course_num: '250', course_name: '', credits: 4},
//   {id: '28', academic_group: 'Engineering', subject: 'EECS', course_num: '270', course_name: '', credits: 4},
//   {id: '29', academic_group: 'Engineering', subject: 'EECS', course_num: '282', course_name: '', credits: 4},
//   {id: '30', academic_group: 'Engineering', subject: 'EECS', course_num: '283', course_name: '', credits: 4},
//   {id: '31', academic_group: 'Engineering', subject: 'EECS', course_num: '285', course_name: '', credits: 4},
//   {id: '32', academic_group: 'Engineering', subject: 'EECS', course_num: '301', course_name: '', credits: 4},
//   {id: '33', academic_group: 'Engineering', subject: 'EECS', course_num: '311', course_name: '', credits: 4},
//   {id: '34', academic_group: 'Engineering', subject: 'EECS', course_num: '312', course_name: '', credits: 4},
//   {id: '35', academic_group: 'Engineering', subject: 'EECS', course_num: '314', course_name: '', credits: 4},
//   {id: '36', academic_group: 'Engineering', subject: 'EECS', course_num: '320', course_name: '', credits: 4}
// ];

const ULCS = [
{id: '0', academic_group: 'ULCS', subject: 'EECS', course_num: '373', course_name: 'Design of Microprocessor Based Systems', credits: 4},
{id: '1', academic_group: 'ULCS', subject: 'EECS', course_num: '381', course_name: 'Object-Oriented and Advanced Programming', credits: 4},
{id: '2', academic_group: 'ULCS', subject: 'EECS', course_num: '388', course_name: 'Introduction to Computer Security', credits: 4},
{id: '3', academic_group: 'ULCS', subject: 'EECS', course_num: '427', course_name: 'VLSI Design I', credits: 4},
{id: '4', academic_group: 'ULCS', subject: 'EECS', course_num: '442', course_name: 'Computer Vision', credits: 4},
{id: '5', academic_group: 'ULCS', subject: 'EECS', course_num: '445', course_name: 'Introduction to Machine Learning', credits: 4},
{id: '6', academic_group: 'ULCS', subject: 'EECS', course_num: '467', course_name: 'Autonomous Robotics', credits: 4},
{id: '7', academic_group: 'ULCS', subject: 'EECS', course_num: '470', course_name: 'Computer Architecture', credits: 4},
{id: '8', academic_group: 'ULCS', subject: 'EECS', course_num: '475', course_name: 'Introduction to Cryptography', credits: 4},
{id: '9', academic_group: 'ULCS', subject: 'EECS', course_num: '477', course_name: 'Introduction to Algorithms', credits: 4},
{id: '10', academic_group: 'ULCS', subject: 'EECS', course_num: '478', course_name: 'Logic Circuit Synthesis and Optimization', credits: 4},
{id: '11', academic_group: 'ULCS', subject: 'EECS', course_num: '482', course_name: 'Introduction to Operating Systems', credits: 4},
{id: '12', academic_group: 'ULCS', subject: 'EECS', course_num: '483', course_name: 'Compiler Construction', credits: 4},
{id: '13', academic_group: 'ULCS', subject: 'EECS', course_num: '484', course_name: 'Database Management Systems', credits: 4},
{id: '14', academic_group: 'ULCS', subject: 'EECS', course_num: '485', course_name: 'Web Database and Information Systems', credits: 4},
{id: '15', academic_group: 'ULCS', subject: 'EECS', course_num: '486', course_name: 'Information Retrieval & Web Search', credits: 4},
{id: '16', academic_group: 'ULCS', subject: 'EECS', course_num: '487', course_name: 'Interactive Computer Graphics', credits: 4},
{id: '17', academic_group: 'ULCS', subject: 'EECS', course_num: '489', course_name: 'Computer Networks', credits: 4},
{id: '18', academic_group: 'ULCS', subject: 'EECS', course_num: '490', course_name: 'Programming Languages', credits: 4},
{id: '19', academic_group: 'ULCS', subject: 'EECS', course_num: '492', course_name: 'Introduction to Artificial Intelligence', credits: 4},
{id: '20', academic_group: 'ULCS', subject: 'EECS', course_num: '493', course_name: 'User Interface Development', credits: 4}
]

const FTE = [
{id: '21', academic_group: 'FTE', subject: 'AEROSP', course_num: '215', course_name: 'Introduction to Solid Mechanics and Aerospace Structures', credits: 4},
{id: '22', academic_group: 'FTE', subject: 'AEROSP', course_num: '225', course_name: 'Introduction to Gas Dynamics', credits: 4},
{id: '23', academic_group: 'FTE', subject: 'AEROSP', course_num: '305', course_name: 'Aerospace Engineering Laboratory I', credits: 4}, 
{id: '24', academic_group: 'FTE', subject: 'AEROSP', course_num: '315', course_name: 'Aerospace Structure', credits: 4}, 
{id: '25', academic_group: 'FTE', subject: 'AEROSP', course_num: '325', course_name: 'Aerodynamics', credits: 4}, 
{id: '26', academic_group: 'FTE', subject: 'AEROSP', course_num: '335', course_name: 'Aerospace Propulsn', credits: 4}, 
{id: '27', academic_group: 'FTE', subject: 'AEROSP', course_num: '348', course_name: 'Aircraft Dynamics and Control', credits: 3}, 
{id: '28', academic_group: 'FTE', subject: 'AEROSP', course_num: '405', course_name: 'Aero Eng Lab II', credits: 4}, 
{id: '29', academic_group: 'FTE', subject: 'AEROSP', course_num: '416', course_name: 'Theory of Plates and Shells', credits: 3}, 
{id: '30', academic_group: 'FTE', subject: 'AEROSP', course_num: '423', course_name: 'Computational Methods for Aerospace Engineering', credits: 3}, 
{id: '31', academic_group: 'FTE', subject: 'AEROSP', course_num: '483', course_name: 'Aerosp System Design', credits: 4}, 
{id: '32', academic_group: 'FTE', subject: 'AEROSP', course_num: '510', course_name: 'Finite Elem Method I', credits: 3}, 
{id: '33', academic_group: 'FTE', subject: 'AEROSP', course_num: '518', course_name: 'Thry Elastic Stab I', credits: 3}, 
{id: '34', academic_group: 'FTE', subject: 'AEROSP', course_num: '525', course_name: 'Intr Turbulent Flow', credits: 3}, 
{id: '35', academic_group: 'FTE', subject: 'AEROSP', course_num: '530', course_name: 'Gas-Turbine Propulsion\r\n\r\nAdvanced analysis of turbojet engines', credits: 3}, 
{id: '36', academic_group: 'FTE', subject: 'AEROSP', course_num: '532', course_name: 'Molecular Gad Dynamics:\r\n\r\nAnalysis of basic goals gas properties at the molecular level.  Kinetic theory', credits: 3}, 
{id: '37', academic_group: 'FTE', subject: 'AEROSP', course_num: '543', course_name: 'Structural Dynamics', credits: 3}, 
{id: '38', academic_group: 'FTE', subject: 'AEROSP', course_num: '550', course_name: 'Linear Systems Theory', credits: 4}, 
{id: '39', academic_group: 'FTE', subject: 'AEROSP', course_num: '551', course_name: 'Nl Sys&Con', credits: 3}, 
{id: '40', academic_group: 'FTE', subject: 'AEROSP', course_num: '583', course_name: 'Management of Space Systems Design', credits: 4}, 
{id: '41', academic_group: 'FTE', subject: 'AEROSP', course_num: '585', course_name: 'Aerospace Engineering Seminar', credits: '1'}, 
{id: '42', academic_group: 'FTE', subject: 'AEROSP', course_num: '588', course_name: 'Multidisciplinary Design Optimization', credits: 3},
{id: '43', academic_group: 'FTE', subject: 'ASTRO', course_num: '404', course_name: 'Galaxies and the Universe', credits: 3},
{id: '44', academic_group: 'FTE', subject: 'BIOINF/BIOPHYS', course_num: '463', course_name: 'Mathematical Modeling in Biology', credits: 3},
{id: '45', academic_group: 'FTE', subject: 'BIOLOGY', course_num: '305', course_name: 'Genetics', credits: 3},
{id: '46', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '221', course_name: 'Biophysical Chemistry and Thermodynamics', credits: 4},
{id: '47', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '231', course_name: 'Introduction to Biomechanics', credits: 4},
{id: '48', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '321', course_name: 'Bioreaction Engineering and Design', credits: 3}, 
{id: '49', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '332', course_name: 'Introduction to Biosolids Mechanics', credits: 4}, 
{id: '50', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '350', course_name: 'Introduction to Biomedical Engineering Design', credits: 3}]
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '418', course_name: 'Quantitative Cell Biology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '450', course_name: 'Biomedical Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '452', course_name: 'Biomedical Engineering Design, Part II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '458', course_name: 'Biomedical Instrumentation and Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '476', course_name: 'Biofluid Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '479', course_name: 'Biotransport', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '481', course_name: 'Prin Rad Imag', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '500', course_name: 'Biomedical Engineering Seminar', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '503', course_name: 'Statistical Methods for Biomedical Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '504', course_name: 'Cellular Biotechnology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '510', course_name: 'Med Imag Lab', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '517', course_name: 'Neural Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '534', course_name: 'Occup Biomec', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '580', course_name: 'Comp Rad Imag', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '582', course_name: 'Medical Radiological Health Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '584', course_name: 'Advances in Tissue Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'BIOMEDE', course_num: '588', course_name: 'Global Quality Systems and Regulatory Innovation', credits: '2'},
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '230', course_name: 'Material and Energy Balances', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '330', course_name: 'Chemical and Engineering Thermodynamics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '341', course_name: 'Fluid Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '344', course_name: 'Reaction Engr Des', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '360', course_name: 'Chemical Engineering Laboratory I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '431', course_name: 'Engineering Statistics and Problem Solving', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '460', course_name: 'Chemical Engineering Laboratory II', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '485', course_name: 'Chemical Engineering Process Economics', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '487', course_name: 'Process Simulation and Design', credits: '5'}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '489', course_name: 'Chemical Product Design II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '496', course_name: 'Special Topics in Chemical Engineering', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '497', course_name: 'Special Topics in Chemical Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '512', course_name: 'Polymer Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '517', course_name: 'Biopharmaceutical Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '528', course_name: 'Reactor Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '542', course_name: 'Int Transport Pheno', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '584', course_name: 'Advances in Tissue Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHE', course_num: '588', course_name: 'Global Quality Systems and Regulatory Innovation', credits: '2'},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '210', course_name: 'Structure and Reactivity I', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '211', course_name: 'Investigations in Chemistry', credits: 1},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '215', course_name: 'Structure and Reactivity II', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '216', course_name: 'Synthesis and Characterization of Organic Compounds', credits: 2},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '230', course_name: 'Physical Chemical Principles and Applications', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '241', course_name: 'Introduction to Chemical Analysis', credits: 2},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '242', course_name: 'Introduction to Chemical Analysis Lab', credits: 2},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '260', course_name: 'Chemical Principles', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '398', course_name: 'Undergraduate Research in Biochemistry', credits: '1 - 4'}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '399', course_name: 'Undergraduate Research', credits: '1 - 4'}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '417', course_name: 'Dynamical Processes in Biophysics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '498', course_name: 'Undergraduate Honors Thesis in Biochemistry', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '499', course_name: 'Undergraduate Thesis', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '502', course_name: 'Chemical Biology II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '515', course_name: 'Organometallic Chemistry', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '521', course_name: 'Principles of Biophysical Chemistry', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '528', course_name: 'Biology and Chemistry of Enzymes', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '596', course_name: 'Introduction to Graduate Research for MS', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '597', course_name: 'Introduction to Graduate Research', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '598', course_name: 'Integrated Graduate Education and Research Training Program (IGERT) Research Rotation', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CHEM', course_num: '599', course_name: 'Chemistry Biology Interface (CBI) Training Program Research Rotation', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '211', course_name: 'Statics and Dynamics', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '212', course_name: 'Solid and Structural Mechanics', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '230', course_name: 'Thermodynamics and the Environment', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '265', course_name: 'Sustainable Engineering Principles', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '303', course_name: 'Comp Methods', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '307', course_name: 'Sustainable Cities', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '325', course_name: 'Fluid Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '345', course_name: 'Geotechnical Engineering', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '351', course_name: 'Civ Engr Material', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '366', course_name: 'Environmental Engineering Laboratory', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '375', course_name: 'Sensors, Circuits, and Signals', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '402', course_name: 'Prof Issues&Des', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '415', course_name: 'Design of Reinforced Concrete Structures', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '431', course_name: 'Constr Contracting', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '435', course_name: 'Building Information Modeling (BIM)', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '465', course_name: 'Environmental Process Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '481', course_name: 'Aquatic Chemistry', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '512', course_name: 'Nonlinear Analysis of Structures', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '513', course_name: 'Plastic Anl-Design', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '514', course_name: 'Prestressd Concrete', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '517', course_name: 'Reliability of Structures', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '526', course_name: 'Des Hydraulic System', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '530', course_name: 'Constr Practice Sem', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '534', course_name: 'Construction Engineering, Equipment, and Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '535', course_name: 'Excavate Tunnel', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '540', course_name: 'Advanced Soil Mechanics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '546', course_name: 'Slopes, Dams and Retaining Structures', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '563', course_name: 'Air Quality Engineering Fundamentals', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '567', course_name: 'Energy Infrastructure Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '571', course_name: 'Linear Systems Theory', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '573', course_name: 'Data Analysis in CEE', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '574', course_name: 'Materials Selection for Sustainable Design', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '575', course_name: 'Sensing for Civil Infrastructure Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '580', course_name: 'Physicochem Process', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '581', course_name: 'Aquatic Chemistry', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '586', course_name: 'Indus Ecol', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CEE', course_num: '592', course_name: 'Bio Proc Envir Engr', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '321', course_name: 'Earth Systems Dynamics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '323', course_name: 'Earth System Analysis', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '350', course_name: 'Atmospheric Thermodynamics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '411', course_name: 'Cloud and Precipitation Processes', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '414', course_name: 'Weather Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '431', course_name: 'Radiowave Propagation and Link Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '463', course_name: 'Air Pollution Meteorology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'CLIMATE', course_num: '475', course_name: 'Earth System Interactions', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'SPACE', course_num: '583', course_name: 'Management of Space Systems Design', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'CMPLXSYS', course_num: '270', course_name: 'Agent Based Modeling', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'ECON', course_num: '409', course_name: 'Game Theory', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'ECON', course_num: '452', course_name: 'Intermediate Introduction to Statistics and Econometrics II', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '215', course_name: 'Investigation to Electronic Circuits', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '216', course_name: 'Introduction to Signals and Systems', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '230', course_name: 'Electromagetics I', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '250', course_name: 'Electronic Sensing Systems', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '270', course_name: 'Introduction to Logic Design', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '285', course_name: 'A Programming Language or Computer System', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '301', course_name: 'Probabilistic Methods in Engineering', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '311', course_name: 'Analog Circuits', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '312', course_name: 'Digital Integrated Circuits', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '314', course_name: 'Electrical Circuits, Systems and Applications', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '320', course_name: 'Introduction to Semiconductor Devices', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '330', course_name: 'Introduction to Antennas and Wireless Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '334', course_name: 'Principles of Optics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '351', course_name: 'Introduction to Digital Signal Processing', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '370', course_name: 'Introduction to Computer Organization', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '373', course_name: 'Introduction to Embedded System Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '376', course_name: 'Foundations of Computer Science', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '388', course_name: 'Introduction to Computer Security', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '419', course_name: 'Electric Machinery and Drives', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '425', course_name: 'Integ Microsys Lab', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '427', course_name: 'Very Large Scale Integrated Design I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '429', course_name: 'Semi Optoelec Dev', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '430', course_name: 'Radiowave Propagation and Link Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '438', course_name: 'Adv Lasers Lab', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '441', course_name: 'Mobile App Development for Entrepreneurs', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '442', course_name: 'Computer Vision', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '443', course_name: 'Senior ThesisL', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '445', course_name: 'Introduction to Machine Learning', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '452', course_name: 'Digital Signal Processing Design Laboratory', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '458', course_name: 'Biomedical Instrumentation and Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '460', course_name: 'Control Systems Analysis and Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '461', course_name: 'Embedded Control Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '464', course_name: 'Hands-on Robotics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '467', course_name: 'Autonomous Robotics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '470', course_name: 'Computer Architecture', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '475', course_name: 'Introduction to Cryptography', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '478', course_name: 'Logic Circuit Synthesis and Optimization', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '481', course_name: 'Software Engineering', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '482', course_name: 'Introduction to Operating Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '483', course_name: 'Compiler Construction', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '484', course_name: 'Database Management Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '485', course_name: 'Web Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '486', course_name: 'Information Retrieval and Web Search', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '492', course_name: 'Introduction to Artificial Intelligence', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '493', course_name: 'User Interface Development', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '494', course_name: 'Computer Game Design and Development', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '496', course_name: 'Major Design Experience-Professionalism', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '497', course_name: 'Major Design Projects', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '501', course_name: 'Probability and Random Processes', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '502', course_name: 'Stoch Processes', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '503', course_name: 'Intro Numerical Em', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '504', course_name: 'Foundations of Computer Vision', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '511', course_name: 'A/D Interfaces', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '515', course_name: 'Integ Microsystems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '519', course_name: 'Plasma Lab', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '521', course_name: 'Solid State Devices', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '522', course_name: 'Analog Integr Ckts', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '525', course_name: 'Adv Sol St Mw Cir', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '526', course_name: 'Plasmonics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '527', course_name: 'Layout Synthesis and Optimization', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '528', course_name: 'M-Elec Proc Tech', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '531', course_name: 'Antenna Thry&Des', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '539', course_name: 'Lasers', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '541', course_name: 'Applied Quantum Mechanics II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '545', course_name: 'Machine Learning', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '546', course_name: 'Ultrafast Optics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '548', course_name: 'Information Visualization', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '551', course_name: 'Matrix Methods for Signal Processing, Data Analysis and Machine Learning', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '556', course_name: 'Image Processing', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '557', course_name: 'Communication Networks', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '560', course_name: 'Linear Systems Theory', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '561', course_name: 'Design of Digital Control Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '562', course_name: 'Nl Sys&Con', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '564', course_name: 'Estimation, Filtering, and Detection', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '565', course_name: 'Linear Feedback Control Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '569', course_name: 'Production Systems Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '570', course_name: 'Parallel Computer Architecture', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '579', course_name: 'Digital Systems Testing', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '586', course_name: 'Design and Analysis of Algorithms', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '588', course_name: 'Computer and Network Security', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '591', course_name: 'Distributed Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '592', course_name: 'Foundations of Artificial Intelligence', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '596', course_name: 'M Eng Team Project', credits: '1 - 6'}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '598', course_name: 'Special Topics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'EECS', course_num: '599', course_name: 'Directed Study', credits: '1 - 4'},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '350', course_name: 'International Lab Experience for Engineers', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '355', course_name: 'Multidisciplinary Design I', credits: 1-4},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '403', course_name: 'Scientific Visualization', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '450', course_name: 'Multidisciplinary Design', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '455', course_name: 'Multidisciplinary Design II', credits: 2-5},
// {id: '', academic_group: 'FTE', subject: 'ENGR', course_num: '480', course_name: 'Global Synthesis Project', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'ENTR', course_num: '390 Sec. 013', course_name: 'TechLab MCity', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '202', course_name: 'Operations Modeling', credits: 2},
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '310', course_name: 'Introduction to Optimization Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '316', course_name: 'Introduction to Markov Processes', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '333', course_name: 'Ergonomics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '334', course_name: 'Ergonomics Lab', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '366', course_name: 'Linear Statistical Models', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '410', course_name: 'Advanced Optimization Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '416', course_name: 'Queueing Systems', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '419', course_name: 'Service Operations Management', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '424', course_name: 'Practicum in Production and Service', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '425', course_name: 'Lean Manufacturing and Services', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '436', course_name: 'Human Factors in Computer Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '438', course_name: 'Occupational Safety Management', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '441', course_name: 'Production and Inventory Control', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '449', course_name: 'Material Handling Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '453', course_name: 'Derivative Instruments', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '463', course_name: 'Measurement and Design of Work', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '465', course_name: 'Design of Experiments', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '466', course_name: 'Statistical Quality Control', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '474', course_name: 'Simulation', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '481', course_name: 'Practicum in Hospital Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '506', course_name: 'Stochastic Analysis for Finance', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '510', course_name: 'Linear Programming I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '511', course_name: 'Continuous Optimization Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '516', course_name: 'Stochastic Proc II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '534', course_name: 'Occup Biomec', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '543', course_name: 'Scheduling', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '547', course_name: 'Supply Chain Facilities', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '548', course_name: 'Integrated Product Development', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '551', course_name: 'Benchmarking, Productivity Analysis and Performance Measurement', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '563', course_name: 'Advanced Work Design: Volunteer Work', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '574', course_name: 'Simulation Design and Analysis', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'IOE', course_num: '593', course_name: 'Ergonomics Project', credits: '2 - 4'},
// {id: '', academic_group: 'FTE', subject: 'LING', course_num: '442', course_name: 'Computational Linguistics II', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '220', course_name: 'Introduction to Materials and Manufacturing', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '242', course_name: 'Physics of Materials', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '250', course_name: 'Principles of Engineering Materials', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '335', course_name: 'Kinetic and Transport in Materials Engineering', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '365', course_name: 'Materials Laboratory II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '440', course_name: 'Ceramic Materials', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '470', course_name: 'Physical Metallurgy', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '480', course_name: 'Materials and Engineering Design', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '485', course_name: 'Design Problems', credits: '1 - 4'}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '500', course_name: 'Mater Phys Chem', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '512', course_name: 'Polymer Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '514', course_name: 'Composite Materials', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '515', course_name: 'Mechanical Behavior of Solid Polymeric Materials', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '535', course_name: 'Kinetics, Phase Transformations and Transport', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATSCIE', course_num: '562', course_name: 'Electron Microspy I', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '211', course_name: 'Introduction to Solid Mechanics', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '235', course_name: 'Thermodynamics I', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '240', course_name: 'Introduction to Dynamics and Vibrations', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '250', course_name: 'Design and Manufacturing I', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '305', course_name: 'Introduction to Finite Elements in Mechanical Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '311', course_name: 'Strength-Materials', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '320', course_name: 'Fluid Mechanics I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '335', course_name: 'Heat Transfer', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '350', course_name: 'Design and Manufacturing II', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '360', course_name: 'Modeling, Analysis and Control of Dynamic Systems', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '382', course_name: 'Mechanical Behavior of Materials', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '390', course_name: 'RISE 3 - Research, Innovation, Service, Entrepreneurship', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '395', course_name: 'Laboratory I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '400', course_name: 'Mech Engr Analysis', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '401', course_name: 'Statistical Quality Control and Design', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '420', course_name: 'Fluid Mech II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '433', course_name: 'Advanced Energy Solutions', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '440', course_name: 'Dynamics&Vibrations', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '450', course_name: 'Design and Manufacturing III', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '452', course_name: 'Design for Mfg', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '476', course_name: 'Biofluid Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '482', course_name: 'Machining Processes', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '483', course_name: 'Manufacturing System Design', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '491', course_name: 'Independent Study', credits: '1 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '495', course_name: 'Lab I I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '499', course_name: 'Spec Topics in M E', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '515', course_name: 'Contact Mechanics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '521', course_name: 'Adv Fluid Mech II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '538', course_name: 'Adv IC Engines', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '543', course_name: 'Analyticl&Comp Dyn I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '555', course_name: 'Design Optim', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '561', course_name: 'Design of Digital Control Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '564', course_name: 'Linear Systems Theory', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '565', course_name: 'Battery Systems and Control', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '566', course_name: 'Modeling, Analysis, and Control of Hybrid Electric Vehicles', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '576', course_name: 'Fatigue Mech Des', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '584', course_name: 'Advanced Mechatronics for Manufacturing', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '587', course_name: 'Global Manufacturing', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '589', course_name: 'Sustainable Design of Technology Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '590', course_name: 'Study of Research in Selected Mechanical Engineering Topics', credits: '3 - 6'}, 
// {id: '', academic_group: 'FTE', subject: 'MECHENG', course_num: '599', course_name: 'Spec Topics in M E', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '215', course_name: 'Calculus III', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '216', course_name: 'Introduction to Differential Equations', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '316', course_name: 'Differential Equations', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '351', course_name: 'Principles of Analysis', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '354', course_name: 'Fourier Analysis and its Applications', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '371', course_name: 'Numerical Methods for Engineers and Scientists', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '396', course_name: 'Honors Analysis II', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '404', course_name: 'Intermediate Differential Equations and Dynamics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '412', course_name: 'Introduction to Modern Algebra', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '416', course_name: 'Theory of Algorithms', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '423', course_name: 'Mathematics of Finance', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '424', course_name: 'Compound Interest and Life Insurance', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '425', course_name: 'Introduction to Probability', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '433', course_name: 'Introduction to Differential Geometry', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '450', course_name: 'Advanced Mathematics for Engineers I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '451', course_name: 'Advanced Calculus I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '452', course_name: 'Advanced Calculus II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '454', course_name: 'Boundary Value Problems for Partial Differential Equations', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '462', course_name: 'Mathematical Models', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '465', course_name: 'Introduction to Combinatorics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '471', course_name: 'Introduction to Numerical Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '472', course_name: 'Numerical Methods with Financial Applications', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '475', course_name: 'Elementary Number Theory', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '487', course_name: 'Number Theory and Algebra for Secondary Teachers', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '494', course_name: 'Honors Algebra II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '498', course_name: 'Topics in Modern Mathematics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '499', course_name: 'Independent Reading', credits: '1 - 4'}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '501', course_name: 'Applied & Interdisciplinary Mathematics Student Seminar', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '506', course_name: 'Stochastic Analysis for Finance', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '521', course_name: 'Life Contingencies II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '524', course_name: 'Loss Models II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '525', course_name: 'Probability Theory', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '526', course_name: 'Discrete State Stochastic Processes', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '547', course_name: 'Probabilistic Modeling in Bioinformatics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '550', course_name: 'Introduction to Adaptive Systems', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '555', course_name: 'Introduction to Functions of a Complex Variable with Applications', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '557', course_name: 'Applied Asymptotic Analysis', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '561', course_name: 'Linear Programming I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '562', course_name: 'Continuous Optimization Methods', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '566', course_name: 'Combinatorial Theory', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '567', course_name: 'Introduction to Coding Theory', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '571', course_name: 'Numerical Linear Algebra', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '572', course_name: 'Numerical Methods for Differential Equations', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '574', course_name: 'Financial Mathematics II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '575', course_name: 'Introduction to Theory of Numbers I', credits: '1 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '582', course_name: 'Introduction to Set Theory', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '590', course_name: 'Introduction to Topology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '592', course_name: 'Introduction to Algebraic Topology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '594', course_name: 'Algebra II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'MATH', course_num: '597', course_name: 'Analysis II', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'MCDB', course_num: '306', course_name: 'Introductory Genetics Labratory', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'MCDB', course_num: '310', course_name: 'Introductory Biochemistry', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '260', course_name: 'Marine Systems Manufacturing', credits: 2},
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '270', course_name: 'Marine Design', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '321', course_name: 'Marine Hydro II', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '332', course_name: 'Marine Electrical Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '340', course_name: 'Marine Dynamics I', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '391', course_name: 'Marine Engineering Laboratory I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '416', course_name: 'Theory of Plates and Shells', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '424', course_name: 'Hydrofoils, Propellers and Turbines', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '431', course_name: 'Marine Engineering II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '440', course_name: 'Marine Dynamics II', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '461', course_name: 'Marine Structures Construction', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '475', course_name: 'Marine Design Team Project', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '510', course_name: 'Marine Struct Mech', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '570', course_name: 'Adv Marine Design', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NAVARCH', course_num: '580', course_name: 'Optimization and Management of Marine Systems', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '250', course_name: 'Fundamentals of Nuclear Engineering and Radiological Sciences', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '312', course_name: 'Elements of Nuclear Engineering and Radiological Sciences II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '315', course_name: 'Nuclear Instrumentation Laboratory', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '344', course_name: 'Fluid Mechanics for Nuclear Engineers', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '425', course_name: 'Appl of Radiation', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '442', course_name: 'Nucl Power Reactors', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '472', course_name: 'Fusion Reactor Technology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '481', course_name: 'Prin Rad Imag', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '515', course_name: 'Nuclear Measure Lab', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '524', course_name: 'Nuclear Fuels', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '547', course_name: 'Computational Fluid Dynamics of Nuclear Applications', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '551', course_name: 'Nucl Reac Kinetics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '554', course_name: 'Radiat Shield', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '555', course_name: 'Radiological Physics and Dosimetry', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '561', course_name: 'Nuc Core Des&Anal I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '572', course_name: 'Plasma and Controlled Fusion II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '573', course_name: 'Plasma Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '575', course_name: 'Plasma Lab', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '580', course_name: 'Comp Rad Imag', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '581', course_name: 'Radiation Therapy Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '582', course_name: 'Medical Radiological Health Engineering', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '586', course_name: 'Applied Radiological Measurements', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'NERS', course_num: '599', course_name: 'Masters Project', credits: '1 - 3'},
// {id: '', academic_group: 'FTE', subject: 'PAT', course_num: '452', course_name: 'Interactive Music Design II', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'PAT', course_num: '462', course_name: 'Digital Sound Synthesis', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'PHIL', course_num: '414', course_name: 'Mathematical Logic', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '340', course_name: 'Waves, Heat, and Light', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '351', course_name: 'Methods of Theoretical Physics I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '360', course_name: 'Honors Physics III', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '390', course_name: 'Introduction to Modern Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '391', course_name: 'Introduction to Modern Physics Lab', credits: '2'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '401', course_name: 'Intermediate Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '405', course_name: 'Intermediate Electricity and Magnetism', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '406', course_name: 'Statistical and Thermal Physics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '411', course_name: 'Introduction to Computational Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '415', course_name: 'Special Problems for Undergraduates', credits: '1 - 6'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '417', course_name: 'Dynamical Processes in Biophysics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '441', course_name: 'Advanced Laboratory I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '442', course_name: 'Advanced Laboratory II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '450', course_name: 'Laboratory Techniques in Biophysics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '453', course_name: 'Quantum Mechanics', credits: 4}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '457', course_name: 'Particle Physics and Cosmology', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '460', course_name: 'Quantum Mechanics II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '463', course_name: 'Introduction to Solid State Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '496', course_name: 'Senior Thesis, I', credits: '2 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '497', course_name: 'Senior Thesis II', credits: '2 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '498', course_name: 'Introduction to Research for Honors Students', credits: '2 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '499', course_name: 'Introduction to Research for Honors Students', credits: '2 - 3'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '501', course_name: 'First-Year Mini-Colloquium', credits: '1'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '506', course_name: 'Electricity and Magnetism II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '507', course_name: 'Theoretical Mechanics I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '512', course_name: 'Advanced Quantum Mechanics II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '515', course_name: 'Supervised Research', credits: '4 - 6'}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '520', course_name: 'Condensed Matter Physics', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '521', course_name: 'Elementary Particle Physics I', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '523', course_name: 'Quantum Field Theory II', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '525', course_name: 'Cosmology I - The Early Universe', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'PHYSICS', course_num: '542', course_name: 'Quantum Optics', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'SI', course_num: '301', course_name: 'Models of Social Information Processing', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'SI', course_num: '422', course_name: 'Needs Assessment and Usability Evaluation', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '401', course_name: 'Applied Statistical Methods II', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '403', course_name: 'Introduction to Quantitative Research Methods', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '406', course_name: 'Introduction to Statistical Computing', credits: 3}, 
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '413', course_name: 'Applied Regression Analysis', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '415', course_name: 'Data Mining and Statistical Learning', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '425', course_name: 'Introduction to Probability', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '426', course_name: 'Introduction to Theoretical Statistics', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '430', course_name: 'Applied Probability', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '470', course_name: 'Introduction to Design of Experiments', credits: 4},
// {id: '', academic_group: 'FTE', subject: 'STATS', course_num: '531', course_name: 'Analyisis of Time Series', credits: 'NA'},
// {id: '', academic_group: 'FTE', subject: 'TO (ROSS)', course_num: '414', course_name: 'Advanced Analytics', credits: 3},
// {id: '', academic_group: 'FTE', subject: 'TO (ROSS)', course_num: '605', course_name: 'Manufacturing and Supply Operations', credits: '1.5-3'}
// ]


const program_core = [
{id: '51', academic_group: 'ProgramCore', subject: 'EECS', course_num: '203', course_name: 'Discrete Mathematics', credits: 4},
{id: '52', academic_group: 'ProgramCore', subject: 'EECS', course_num: '280', course_name: 'Programming and Data Structures', credits: 4},
{id: '53', academic_group: 'ProgramCore', subject: 'EECS', course_num: '281', course_name: 'Data Structures and Algorithms', credits: 4},
{id: '54', academic_group: 'ProgramCore', subject: 'EECS', course_num: '370', course_name: 'Intro to Computer Organization', credits: 4},
{id: '55', academic_group: 'ProgramCore', subject: 'EECS', course_num: '376', course_name: 'Foundations of Computer Science', credits: 4},
{id: '56', academic_group: 'ProgramCore', subject: 'STATS', course_num: '250', course_name: 'Introduction to Statistics and Data Analysis', credits: 4},
{id: '57', academic_group: 'ProgramCore', subject: 'TCHNCLCM', course_num: '300', course_name: 'Technical Communications', credits: 1}
]

const core_requirements = [
  {id: '58', academic_group: 'Engineering', subject: 'EECS', course_num: '100', course_name: 'Intro Engineering', credits: 4},
  {id: '59', academic_group: 'Engineering', subject: 'EECS', course_num: '101', course_name: 'Intro Comp & Prog', credits: 4},
  {id: '60', academic_group: 'Chemistry', subject: 'CHEM', course_num: '125', course_name: 'Gen Chem Lab I', credits: 1},
  {id: '61', academic_group: 'Chemistry', subject: 'CHEM', course_num: '126', course_name: 'Gen Chem Lab II', credits: 1},
  {id: '62', academic_group: 'Chemistry', subject: 'CHEM', course_num: '130', course_name: 'Gen Chemistry', credits: 3},
  {id: '63', academic_group: 'Physics', subject: 'PHYS', course_num: '140', course_name: 'General Physics I', credits: 4},
  {id: '64', academic_group: 'Physics', subject: 'PHYS', course_num: '141', course_name: 'Elementary Lab I', credits: 1},
  {id: '65', academic_group: 'Mathematics', subject: 'MATH', course_num: '115', course_name: 'Calculus I', credits: 4},
  {id: '66', academic_group: 'Mathematics', subject: 'MATH', course_num: '116', course_name: 'Calculus II', credits: 4},
  {id: '67', academic_group: 'Mathematics', subject: 'MATH', course_num: '214', course_name: 'Applied Linear Algebra', credits: 4},
  {id: '68', academic_group: 'Mathematics', subject: 'MATH', course_num: '215', course_name: 'Calculus III', credits: 4},
  {id: '69', academic_group: 'Physics', subject: 'PHYS', course_num: '240', course_name: 'General Physics II', credits: 4},
  {id: '70', academic_group: 'Physics', subject: 'PHYS', course_num: '241', course_name: 'Elementary Lab II', credits: 1}
]

const mde_requirements = [
  {id: '71', academic_group: 'Engineering', subject: 'EECS', course_num: '441', course_name: 'Mbl App Dev Entrprnr', credits: 4},
  {id: '72', academic_group: 'Engineering', subject: 'EECS', course_num: '467', course_name: 'Autonomous Robotics Laboratory', credits: 4},
  {id: '73', academic_group: 'Engineering', subject: 'EECS', course_num: '470', course_name: 'Comp Architecture', credits: 4},
  {id: '74', academic_group: 'Engineering', subject: 'EECS', course_num: '481', course_name: 'Software Engineering', credits: 4},
  {id: '75', academic_group: 'Engineering', subject: 'EECS', course_num: '494', course_name: 'Game Design and Implementation', credits: 4},
  {id: '76', academic_group: 'Engineering', subject: 'EECS', course_num: '497', course_name: 'Major Design Projects', credits: 4},
  {id: '77', academic_group: 'Technical Communication', subject: 'TCHLCMN', course_num: '496', course_name: 'Adv TchCom for EE/CE', credits: 2},
  {id: '78', academic_group: 'Engineering', subject: 'EECS', course_num: '496', course_name: 'Major Design Experience Professionalism', credits: 2}
]

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

// Add files to search
const all_courses = ULCS.concat(FTE).concat(program_core).concat(core_requirements).concat(mde_requirements);
// search.add(FTE);
// search.add(program_core);
// search.add(core_requirements);
// search.add(mde_requirements);

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
      setProgram: PropTypes.func,
      setMde: PropTypes.func,
      setHum: PropTypes.func,
      setTech: PropTypes.func,
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
    setProgram: PropTypes.func,
    setMde: PropTypes.func,
    setHum: PropTypes.func,
    setTech: PropTypes.func,
    setLogname: PropTypes.func,
    setProg: PropTypes.func,
  };



  constructor(props) {
    super(props);
    // console.log('local lang in app js', localForage.getItem('lang',(err, value) => {
    //   console.log('value of lang 123', value);
    // }));
    this.state = {
      lang: 'en',
      logname: '',
      grad_month: '',
      grad_year: '',
      program: '',
      message: englishMessages,
      added_classes: [{}],
      credits_completed: 0,
      credits_required: 128,
      credits_by_semester: [0,0,0,0],
   	  requirements: cse_requirements.requirements
    };
    const all_courses = ULCS.concat(FTE).concat(program_core).concat(core_requirements).concat(mde_requirements);
    console.log("ALL COURSES");
    console.log(all_courses);
    for(var i = 0; i < all_courses.length; i++){
      search.add(all_courses[i]);
    }
    console.log("SEARCH COURSES");
    console.log(search);
    console.log(search.search("ULCS"));


    this.onDragEnd = this.onDragEnd.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updateCredits = this.updateCredits.bind(this);
    this.get_added_classes = this.get_added_classes.bind(this);
    this.remove_course = this.remove_course.bind(this);
    this.get_heat_bar = this.get_heat_bar.bind(this);
    this.updateRequirement = this.updateRequirement.bind(this);
    //this.getSatisfied = this.getSatisfied.bind(this);
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
      },
      setProgram: progcore => {
        this.setState({
          search_classes: program_core
        });
      },
      setTech: tech => {
        this.setState({
          search_classes: ULCS.concat(FTE)
        });
      },
      setLogname: logname => {
        this.setState({
          logname: logname
        });
      },
      setProg: prog => {
        this.setState({
          program: prog
        });
      }
      }
    };

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

  updateRequirement(added_course){
  	console.log("ADDED COURSE");
  	for(var i = 0; i < this.state.requirements.length; i++){
		for(var j = 0; j < this.state.requirements[i].req_rows.length; j++){
			for(var k = 0; k < this.state.requirements[i].req_rows[j].courses.length; k++){
				if(this.state.requirements[i].req_rows[j].courses[k].course_num == added_course.course_num && 
					this.state.requirements[i].req_rows[j].courses[k].course_subject == added_course.subject){
					console.log(this.state.requirements[i].req_rows[j].courses[k]);
					// if(added_course.credits + this.state.requirements[i].req_rows[j].courses[k].num_credits_satisfied >= this.state.requirements[i].req_rows[j].courses[k].num_credits){
						const element = (<div>{this.getSatisfied.bind(this.state.requirements[i].req_rows[j].courses[k].num_credits, this.state.requirements[i].req_rows[j].courses[k].num_credits)}</div>);
						document.getElementById(this.state.requirements[i].req_rows[j].sub_req_name).querySelector('li').classList.add('green')
						return;
					// }
				}
			}
		}
  	}
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

  updateView (semester_id, course_id){
  	console.log("COURSE:");
    const course = this.state.search_classes[course_id];
  	console.log(course);
    course.semester_id = semester_id;
    this.setState({
      added_classes: this.state.added_classes.concat(course)
    });
    this.updateRequirement(course);
  }

  remove_course(course, index) {
    const newState = this.state.added_classes;
    const search_classes = this.state.search_classes;
    var credits_by_semester = this.state.credits_by_semester;

    console.log("BEFORE", credits_by_semester[index]);
    credits_by_semester[index] -= course.credits;
    console.log("AFTER", credits_by_semester[index]);
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
  enterSearch(search_val){
    console.log("search_val");
    console.log(search_val);
    console.log("search");
    console.log(search);
    var results = search.search(search_val);
    console.log("results");
    console.log(results);
    this.setState({
      search_classes: results
    }, () => {
      console.log("New state in ASYNC callback:", this.search_classes);
    });
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
    var heat_bar = (<ProgressBar max={18} now={num_credits} label={`${num_credits}/18`} />);
    ReactDOM.render(
        heat_bar,
        document.getElementById(heat_id)
    );
  }


  onDragEnd (result) {
    // Dropped into the semester tables
    console.log(result);
    var index = result.destination.droppableId.replace( /^\D+/g, '');
    var credits_by_semester = this.state.credits_by_semester;
    credits_by_semester[index] += this.state.search_classes[result.source.index].credits;

    console.log("credits_by_semester", credits_by_semester[index])
    if(credits_by_semester[index] > 18){
      return;
    }
    if(!result.destination || result.destination.droppableId === 'courses') {
       return;
    }
    else{
      this.setState({ credits_completed: this.state.credits_completed + this.state.search_classes[result.source.index].credits })
      this.updateView(result.destination.droppableId, result.source.index);

      console.log("index", index);
      var id = result.destination.droppableId;

      console.log("credits:", this.state.credits_by_semester[index]);

      const search_classes = reorder(
        this.state.search_classes,
        result.source.index,
        result.destination.index
      );

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
    console.log(this.state.logname);
    return (!this.props.error && this.props.header) ? (
            <IntlProvider locale={this.state.lang} messages={this.state.message}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div className={`dashboard-page ${s.dashboardPage}`}>
                  <Header logname={this.state.logname} program={this.state.program} enterSearch={this.enterSearch.bind(this)} />
                  }
                  }
                  <Sidebar onDragEnd={this.onDragEnd} search_classes={this.state.search_classes} />
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
