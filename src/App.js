import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperience from './components/WorkExperience';
import GeneralOverview from './components/GeneralOverview';
import EduInfoOverview from './components/EduInfoOverview';
import WorkExpOverview from './components/WorkExpOverview';
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
      companyName: 'Enter name of Company',
      positionTitle: 'Enter Job Title',
      workDesc: 'Enter main role in this position',
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
    const { schoolName, studyTitle } = this.state;
    this.state.eduInfo.splice(0, 3);
    e.preventDefault();
    this.setState({
      eduInfo: this.state.eduInfo.concat(schoolName, studyTitle),
      eduDisplay: false,
      eduEditBtn: true,
    });
  }
  handleWorkClick = (e) => {
    const { companyName, positionTitle, workDesc } = this.state;
    this.state.workExp.splice(0, 3);
    e.preventDefault();
    this.setState({
      workExp: this.state.workExp.concat(companyName, positionTitle, workDesc),
      workDisplay: false,
      workEditBtn: true,
    });
  }
  handleGenEdit = (e) => {
    this.setState({
      genDisplay: true,
      genEditBtn: false,
    });
  };
  handleEduEdit = (e) => {
    this.setState({
      eduDisplay: true,
      eduEditBtn: false,
    });
  };
  handleWorkEdit = (e) => {
    this.setState({
      workDisplay: true,
      workEditBtn: false,
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
