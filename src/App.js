import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperience from './components/WorkExperience';
import GeneralOverview from './components/GeneralOverview';
import EduInfoOverview from './components/EduInfoOverview';
import WorkExpOverview from './components/WorkExpOverview';
import { format, parse } from 'date-fns';
import './styles/App.css';
function App () {

  const [state, setState] = useState({
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
  });

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
      dateStudyFrom,
      dateStudyTo,
      workFrom,
      workTo,
      } = state;

  const handleNameChange = (e) => {
    setState(prevState => {
      return { ...prevState, name: e.target.value}
    })
  }
  const handleEmailChange = (e) => {
    setState(prevState => {
      return {...prevState, email: e.target.value}
    });
  }
  const handleNumberChange = (e) => {
    setState(prevState => {
      return {...prevState, phoneNo: e.target.value}
    });
  }
  const handleSchoolChange = (e) => {
    setState(prevState => {
      return {...prevState, schoolName: e.target.value}
    });
  }
  const handleTitleChange = (e) => {
    setState(prevState => {
      return {...prevState, studyTitle: e.target.value}
    });
  }
  const handleCompanyName = (e) => {
    setState(prevState => {
      return {...prevState, companyName: e.target.value}
    });
  }
  const handlePositionTitle = (e) => {
    setState(prevState => {
      return {...prevState, positionTitle: e.target.value}
    });
  }
  const handleWorkDesc = (e) => {
    setState(prevState => {
      return {...prevState, workDesc: e.target.value}
    });
  }
  const handleGeneralClick = (e) => {

    genInfo.splice(0, 3);
    e.preventDefault();
    setState(prevState => {
      return {
        ...prevState,
        genInfo: genInfo.concat(name, email, phoneNo),
        genDisplay: false,
        genEditBtn: true,
      }

    });
  }
  const handleEduClick = (e) => {
    eduInfo.splice(0, 4);
    e.preventDefault();
    setState(prevState => {
      return {
        ...prevState, 
        eduInfo: eduInfo.concat(schoolName, studyTitle, dateStudyFrom, dateStudyTo),
        eduDisplay: false,
        eduEditBtn: true}
    });
  }
  const handleWorkClick = (e) => {
    workExp.splice(0, 5);
    e.preventDefault();
    setState(prevState => {
      return {
        ...prevState,
        workExp: workExp.concat(companyName, positionTitle, workDesc, workFrom, workTo),
        workDisplay: false,
        workEditBtn: true,
      }
    });
  }
  const handleGenEdit = () => {
    setState(prevState => {
      return {
        ...prevState,
        genDisplay: true,
        genEditBtn: false,
      }
    });
  };
  const handleEduEdit = () => {
    setState(prevState => {
      return {
        ...prevState,
        eduDisplay: true,
        eduEditBtn: false,
      }
    });
  };
  const handleWorkEdit = () => {
    setState(prevState => {
      return {
        ...prevState,
        workDisplay: true,
        workEditBtn: false,
      }
    });
  }
  const updateStudyFrom = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    setState(prevState => {
      return {
        ...prevState,
        dateStudyFrom: formatDate,
      }
    });
  }
  const updateStudyTo = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    setState(prevState => {
      return {
        ...prevState,
        dateStudyTo: formatDate,
      }
    });
  }
  const updateWorkFrom = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    setState(prevState => {
      return {
        ...prevState,
        workFrom: formatDate,
      }
    });
  }
  const updateWorkTo = (e) => {
    let date = e.target.value;
    let parseDate = parse(date, 'yyyy-MM-dd', new Date());
    let formatDate = format(parseDate, 'MM/dd/yyyy');
    setState(prevState => {
      return {
        ...prevState,
        workTo: formatDate,
      }
    });
  }
    return (
      <div className="container">
        <h1>CV Generator</h1>
        <h2>General Info</h2>
        <GeneralInfo 
          name={name} 
          email={email}
          phoneNo={phoneNo}
          display={genDisplay} 
          handleName={handleNameChange}
          handleEmail={handleEmailChange}
          handleNumber={handleNumberChange}
          generalBtn={handleGeneralClick}
          />
        <GeneralOverview 
          genArr={genInfo}
          editDisplay={genEditBtn}
          editFields={handleGenEdit}
          />
        <h2>Educational Experience</h2>
        <EducationInfo 
          schoolName={schoolName} 
          studyTitle={studyTitle}
          display={eduDisplay}
          handleSchool={handleSchoolChange}
          handleTitle={handleTitleChange}
          updateStudyFrom={updateStudyFrom}
          updateStudyTo={updateStudyTo}
          eduBtn={handleEduClick}
          />
        <EduInfoOverview
          eduArr={eduInfo} 
          editFields={handleEduEdit}
          editDisplay={eduEditBtn}
          />
        <h2>Work Experience</h2>
        <WorkExperience
        companyName={companyName}
        positionTitle={positionTitle}
        workDesc={workDesc}
        display={workDisplay}
        handleCompanyName={handleCompanyName}
        handlePositionTitle={handlePositionTitle}
        handleWorkDesc={handleWorkDesc}
        updateWorkFrom={updateWorkFrom}
        updateWorkTo={updateWorkTo}
        workBtn={handleWorkClick}
         />
        <WorkExpOverview 
          workArr={workExp} 
          editFields={handleWorkEdit}
          editDisplay={workEditBtn}
          />
      </div>
    )
}

export default App;
