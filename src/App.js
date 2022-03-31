import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperience from './components/WorkExperience';
import GeneralOverview from './components/GeneralOverview';
import EduInfoOverview from './components/EduInfoOverview';
import WorkExpOverview from './components/WorkExpOverview';
class App extends Component {
  constructor () {
    super();

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
    });
  }
  handleEduClick = (e) => {
    const { schoolName, studyTitle } = this.state;
    this.state.eduInfo.splice(0, 3);
    e.preventDefault();
    this.setState({
      eduInfo: this.state.eduInfo.concat(schoolName, studyTitle),
    });
  }
  handleWorkClick = (e) => {
    const { companyName, positionTitle, workDesc } = this.state;
    this.state.workExp.splice(0, 3);
    e.preventDefault();
    this.setState({
      workExp: this.state.workExp.concat(companyName, positionTitle, workDesc),
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
      } = this.state;
    return (
      <div>
        <GeneralInfo 
          name={name} 
          email={email}
          phoneNo={phoneNo} 
          handleName={this.handleNameChange.bind(this)}
          handleEmail={this.handleEmailChange.bind(this)}
          handleNumber={this.handleNumberChange.bind(this)}
          generalBtn={this.handleGeneralClick.bind(this)}
          />
        <GeneralOverview genArr={genInfo}/>
        <EducationInfo 
          schoolName={schoolName} 
          studyTitle={studyTitle}
          handleSchool={this.handleSchoolChange.bind(this)}
          handleTitle={this.handleTitleChange.bind(this)}
          eduBtn={this.handleEduClick.bind(this)}
          />
        <EduInfoOverview eduArr={eduInfo} />
        <WorkExperience
        companyName={companyName}
        positionTitle={positionTitle}
        workDesc={workDesc}
        handleCompanyName={this.handleCompanyName.bind(this)}
        handlePositionTitle={this.handlePositionTitle.bind(this)}
        handleWorkDesc={this.handleWorkDesc.bind(this)}
        workBtn={this.handleWorkClick.bind(this)}
         />
        <WorkExpOverview workArr={workExp} />
      </div>
    )
  }

}

export default App;
