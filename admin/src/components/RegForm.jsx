import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import Property from "./pages/Property";
import Agreements from "./pages/Agreements";
import Payments from "./pages/Payments"
import SideBar from "./SideBar";

function Registration() {
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    brandName: "",
    companyName: "",
    ownerName: "",
    ownerEmail: "",
    ownerMobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    industry: "",
    picture: "",
    video:"",
    gst:"",

  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Personal
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Business
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <Container>
            <Property
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Container>
            <Agreements
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    case 5:
      return (
        <div className="App">
          <Container>
            <Payments
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );

    // default case to show nothing
    default:
      return null;
  }
}

export default Registration;
