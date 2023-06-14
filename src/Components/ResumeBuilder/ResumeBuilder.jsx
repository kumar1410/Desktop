import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResumeBuilder.css';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    let isValid = true;

    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (address === "") {
      setAddressError("Address is required");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (phone === "") {
      setPhoneError("Phone is required");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Proceed with form submission if all fields are valid
    if (isValid) {
      // Perform form submission logic here
      console.log("Form submitted successfully");
    }
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  return (
    <div className="container">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
           {nameError && <span className="error-message">{nameError}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          {addressError && <span className="error-message">{addressError}</span>}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {phoneError && <span className="error-message">{phoneError}</span>}
        </div>
        <div className="form-group">
          <label>Education:</label>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].institute = e.target.value;
                  setEducation(updatedEducation);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].year = e.target.value;
                  setEducation(updatedEducation);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].degree = e.target.value;
                  setEducation(updatedEducation);
                }}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>
        <div className="form-group">
          <label>Experience:</label>
          {experience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].company = e.target.value;
                  setExperience(updatedExperience);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                value={exp.year}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].year = e.target.value;
                  setExperience(updatedExperience);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Designation"
                value={exp.designation}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].designation = e.target.value;
                  setExperience(updatedExperience);
                }}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <TagsInput value={skills} onChange={setSkills} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder