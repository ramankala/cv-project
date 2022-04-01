import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperience from './components/WorkExperience';
import GeneralOverview from './components/GeneralOverview';
import EduInfoOverview from './components/EduInfoOverview';
import WorkExpOverview from './components/WorkExpOverview';
import { format, parse } from 'date-fns';
import './styles/App.css';
class App extends Component {
  constructor () {
    super();
    this.myRef = React.createRef();

    this.state = {
      name : 'Enter full name',
      email : 'Enter e-mail',
      phoneNo: '(xxx)-xxx-xxxx',
      schoolName: 'Enter name of school',
      studyTitle: 'Enter Degree/Field of Study',
      dateStudyFrom: null,
      dateStudyTo: null,
      companyName: 'Enter name of Company',
      positionTitle: 'Enter Job Title',
      workDesc: 'Enter main role in this position',
      workFrom: null,
      workTo: null,
      genInfo: [],
      workExp: [],
      eduInfo: [],
      genDisplay: true,
      eduDisplay: true,
      workDisplay: true,
      genEditBtn: false,
      eduEditBtn: false,
      workEditBtn: false,
    };
  }
  handleNameChange = (e) => {
    this.setState({
      name : e.target.value,
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  handleNumberChange = (e) => {
    this.setState({
      phoneNo: e.target.value,
    });
  }
  handleSchoolChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  }
  handleTitleChange = (e) => {
    this.setState({
      studyTitle: e.target.value,
    });
  }
  handleCompanyName = (e) => {
    this.setState({
      companyName: e.target.value,
    });
  }
  handlePositionTitle = (e) => {
    this.setState({
      positionTitle: e.target.value,
    });
  }
  handleWorkDesc = (e) => {
    this.setState({
      workDesc: e.target.value,
    });
  }
  handleGeneralClick = (e) => {
    const { name, email, phoneNo } = this.state;
    this.state.genInfo.splice(0, 3);
    e.preventDefault();
    this.setState({
      genInfo: this.state.genInfo.concat(name, email, phoneNo),
      genDisplay: false,
      genEditBtn: true,
    });
  }
  handleEduClick = (e) => {
    const { 
      schoolName, 
      studyTitle, 
      dateStudyFrom, 
      dateStudyTo 
    } = this.state;
    console.log(dateStudyFrom);
    this.state.eduInfo.splice(0, 4);
    e.preventDefault();
    this.setState({
      eduInfo: this.state.eduInfo.concat(schoolName, studyTitle, dateStudyFrom, dateStudyTo),
      eduDisplay: false,
      eduEditBtn: true,
    });
  }
  handleWorkClick = (e) => {
    const { 
      companyName, 
      positionTitle, 
      workDesc, 
      workFrom, 
      workTo 
    } = this.state;
    this.state.workExp.splice(0, 5);
    e.preventDefault();
    this.setState({
      workExp: this.state.workExp.concat(companyName, positionTitle, workDesc, workFrom, workTo),
      workDisplay: false,
      workEditBtn: true,
    });
  }
  handleGenEdit = () => {
    this.setState({
      genDisplay: true,
      genEditBtn: false,
    });
  };
  handleEduEdit = () => {
    this.setState({
      eduDisplay: true,
      eduEditBtn: false,
    });
  };
  handleWorkEdit = () => {
    this.setState({
      workDisplay: true,
      workEditBtn: false,
    });
  }
  updateStudyFrom = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    this.setState({
      dateStudyFrom: formatDate,
    });
  }
  updateStudyTo = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    this.setState({
      dateStudyTo: formatDate,
    });
  }
  updateWorkFrom = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    this.setState({
      workFrom: formatDate,
    });
  }
  updateWorkTo = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    this.setState({
      workTo: formatDate,
    });
  }

  render() {
    const { 
      name,
      email,
      phoneNo,
      schoolName,
      studyTitle,
      companyName,
      positionTitle,
      workDesc,
      genInfo,
      eduInfo,
      workExp,
      genDisplay,
      eduDisplay,
      workDisplay,
      genEditBtn,
      eduEditBtn,
      workEditBtn,
      } = this.state;
    return (
      <div className="container">
        <h1>CV Generator</h1>
        <h2>General Info</h2>
        <GeneralInfo 
          name={name} 
          email={email}
          phoneNo={phoneNo}
          display={genDisplay} 
          handleName={this.handleNameChange.bind(this)}
          handleEmail={this.handleEmailChange.bind(this)}
          handleNumber={this.handleNumberChange.bind(this)}
          generalBtn={this.handleGeneralClick.bind(this)}
          />
        <GeneralOverview 
          genArr={genInfo}
          editDisplay={genEditBtn}
          editFields={this.handleGenEdit.bind(this)}
          />
        <h2>Educational Experience</h2>
        <EducationInfo 
          schoolName={schoolName} 
          studyTitle={studyTitle}
          display={eduDisplay}
          handleSchool={this.handleSchoolChange.bind(this)}
          handleTitle={this.handleTitleChange.bind(this)}
          updateStudyFrom={this.updateStudyFrom.bind(this)}
          updateStudyTo={this.updateStudyTo.bind(this)}
          eduBtn={this.handleEduClick.bind(this)}
          />
        <EduInfoOverview
          eduArr={eduInfo} 
          editFields={this.handleEduEdit.bind(this)}
          editDisplay={eduEditBtn}
          />
        <h2>Work Experience</h2>
        <WorkExperience
        companyName={companyName}
        positionTitle={positionTitle}
        workDesc={workDesc}
        display={workDisplay}
        handleCompanyName={this.handleCompanyName.bind(this)}
        handlePositionTitle={this.handlePositionTitle.bind(this)}
        handleWorkDesc={this.handleWorkDesc.bind(this)}
        updateWorkFrom={this.updateWorkFrom.bind(this)}
        updateWorkTo={this.updateWorkTo.bind(this)}
        workBtn={this.handleWorkClick.bind(this)}
         />
        <WorkExpOverview 
          workArr={workExp} 
          editFields={this.handleWorkEdit.bind(this)}
          editDisplay={workEditBtn}
          />
      </div>
    )
  }

}

export default App;
