import React,{useState} from "react";
import {Center, Wrapper, Btn} from "./skins"


const MultiWizardForm = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '' 
    })
    const [step, setStep] = useState(1)
    const [errors, setErrors] = useState({
        email: "",
        mobile: "",
      });

    const updateField = (e) => {
        let value = e.target.value;
        let name = e.target.name
        setState({
            ...state,
            [name]: value
        })
        setErrors((prev) => ({
            ...prev,
            [name]: "", // clear individual error on change
          }));
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

    const back = () => {
        setStep(prev => prev - 1)

    }
    const next = () => {
        if (step === 2) {
          let newErrors = {};
      
          if (!validateEmail(state.email)) {
            newErrors.email = "Enter valid email";
          }
          if (state.mobile.length !== 10 || !/^\d+$/.test(state.mobile)) {
            newErrors.mobile = "Enter valid mobile number";
          }
      
          if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
          }
      
          setErrors({});
        }
      
        setStep((prev) => prev + 1);
      };
      
      const submitForm = () => {
        alert("Form submitted successfully!");
        console.log(state);
        setState({})
      };

    const {firstName, lastName, mobile, email} = state;

    const userDetails = () => {
        return(
            <>
                <div>
                    <div>First Name:  {firstName}</div>
                    <div>Last Name :  {lastName}</div>
                    <div>Email     :  {email}</div>
                    <div>Mobile    :  {mobile}</div>
                </div>
                <div>
                <button onClick={submitForm}>Submit</button>
                </div>
            </>
        )
    }
    return(
        <Center>
            <>
            {step === 1 && (
                <div>
                <h5>User Info</h5>
                <Wrapper>
                    <label>First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={updateField}
                    />
                </Wrapper>
                <Wrapper>
                    <label>Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={updateField}
                    />
                </Wrapper>
            </div>
            )}
            {step === 2 && (
                <div>
                <h5>Contact Info</h5>
                <Wrapper>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={updateField}
                    />
                    {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                </Wrapper>
                <Wrapper>
                    <label>Mobile</label>
                    <input 
                        type="text"
                        name="mobile"
                        value={mobile}
                        onChange={updateField}
                    />
                    {errors.mobile && <span style={{color: 'red'}}>{errors.mobile}</span>}
                </Wrapper>
            </div>
            )}
            <Btn>
                {step !== 1 && (<button onClick={back}>Back</button>)}
                {step !== 3 && (<button onClick={next}>Next</button>)} 
            </Btn>
            { step === 3 && (userDetails())}
            </>
        </Center>
    )
}

export default MultiWizardForm;