import React, { useRef, useState } from 'react'
import { Form, Col, FormFeedback, Input, Label, Row } from 'reactstrap'
import parsePhoneNumber from 'libphonenumber-js'
import { Countries } from './Data/Countries'

const Registration = () => {
    const [user, setUser] = useState({
        firstName: "",
        Email: "",
        dob: "",
        mobile: "",
        cd: ""
    })
    const [Step1, setStep1] = useState(true)
    const [Step2, setStep2] = useState(false)
    const [Step3, setStep3] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [emailError, setEmailError] = useState()
    const [dateError, setDateError] = useState()
    const [cdError, setcdError] = useState()
    const [mobileError, setMobileError] = useState()
    const [resMobile, setResMobile] = useState()
    const [resMobiles, setResMobiles] = useState()
    const [resDate, setResDate] = useState()
    const [val, setVal] = useState()    
    const errorMessage = "Please Enter"
    const getUsersTest = localStorage.getItem("UsersTest")
    const divElement = useRef();

    console.log("user▬", JSON.parse(getUsersTest))
    const phoneNumber = user?.mobile !== undefined ? parsePhoneNumber(user?.mobile, val) : parsePhoneNumber("9131412340", val)
    console.log("phoneNumber", phoneNumber)
    // console.log(phoneNumber.metadata.countries)

    // if (phoneNumber) {
    //     // phoneNumber.country === 'RU'
    //     // phoneNumber.number === '+78005553535'
    //     // phoneNumber.isValid() === true
    //     // // Note: `.getType()` requires `/max` metadata: see below for an explanation.
    //     // phoneNumber.getType() === 'TOLL_FREE'
    // }

    const formValidation = () => {
        if (!user?.firstName) {
            setFirstNameError(errorMessage + " FirstName")
        } if (!user?.Email) {
            setEmailError(errorMessage + " Email")
        } if (!user?.dob) {
            setDateError(errorMessage + "Date of birth")
        } if (!user?.cd) {
            setcdError("Country")
        } if (!user?.mobile) {
            setMobileError(errorMessage + " mobile")
        } if (user?.firstName && user?.Email && user?.mobile)
            return true;
    }
    const handleChange = e => {
        const { name, value } = e.target

        if (name === "dob") {
            const select = new Date(value)
            const today = new Date()
            let month_diff = today - select.getTime();
            let age_dt = new Date(month_diff);
            let year = age_dt.getUTCFullYear();
            let age = Math.abs(year - 1970);

            // console.log("▬", age)
            if (age <= 10) {
                setResDate("Valid for +10")
            } else {
                setResDate("")
            }
        }
        clearErrorHandler()
        e.preventDefault()
        // user?.mobile.length <=10 ? setUser({ ...user, [name]: value }) : setResMobile("Plese Enter 10 Digit Mobile")
        // if (name === "mobile") {
        // } else {
        // }
        setUser({ ...user, [name]: value })

    }
    const mobileCheck = (e) => {
        const { name, value } = e.target
        clearErrorHandler()
        e.preventDefault()
        setUser({ ...user, [name]: value })

        if (name === "cd") {
            setVal(value)
        } else {
            setVal("Select Country")
        }
        user.mobile ? setResMobile(value) : setResMobile("")
        if (resMobile !== undefined) {
            resMobile.length > 9 ? setResMobiles("Plese Enter 10 Digit Mobile") : setResMobiles("")
        }
        // console.log("ResDate", resMobile.length + 1)

        // const phoneNumber = parsePhoneNumber(value, 'IN')
        // console.log("phoneNumber", phoneNumber)
    }
    const clearErrorHandler = () => {
        setFirstNameError("")
        setEmailError("")
        setDateError("")
        setMobileError("")
        setcdError("")
    }

    const createUserMethod = (e, c) => {
        e.preventDefault();
        console.log("objecte", c)

        if (c === "nexttt" || formValidation()) {
            setStep1(false)
            setStep2(true)
        } if (c === "backtf") {            
            setStep1(true)
            setStep2(false)
        } if (c === "backts") {            
            setStep2(true)
            setStep3(false)
        }if (c === "nextttr") {            
            setStep2(false)
            setStep3(true)
        } if (c === "create" && formValidation()) {
            localStorage.setItem(["UsersTest", JSON.stringify([getUsersTest, user])])
        }

        // if (formValidation()) {
        //     // toast.error("Hellow")
        // } else {
        //     // toast.error("nooooooo")
        // }
    }

    const setFormChecks = (formCheckEvent) => {
        console.log("object", divElement.current)
        if (formCheckEvent === "1") {
            setStep2(false)
            setStep3(false)
            setStep1(true)
        } if (formCheckEvent === "2") {
            setStep2(true)
            setStep3(false)
            setStep1(false)
        } if (formCheckEvent === "3") {
            setStep2(false)
            setStep3(true)
            setStep1(false)
        }
    }

    // user?.firstName && user?.Email && user?.mobile ? setFormCheck(true) : ""
    return (
        <div className='d-flex justify-content-center'>
            <Form className='shadow p-4 w-50 '>
                <h1 className='text-center mb-5'>Registration</h1>
                <div className='p-5 pt-0  d-flex justify-content-center'>
                    <button
                        type="button"
                        className={Step1 ? "btn-info btn rounded-circle" : "btn rounded-circle btn-outline-info"}
                        onClick={() => { let e = "1"; setFormChecks(e) }}
                    >
                        1
                    </button>
                    <label className='text-info'>__________</label>
                    <button
                        type="button"
                        className={Step2 ? "btn-info btn rounded-circle" : "btn rounded-circle btn-outline-info"}
                        onClick={() => { let e = "2"; setFormChecks(e) }}

                    >
                        2
                    </button>
                    <label className='text-info'>__________</label>
                    <button
                        type="button"
                        className={Step3 ? "btn-info btn rounded-circle" : "btn rounded-circle btn-outline-info"}
                        onClick={() => { let e = "3"; setFormChecks(e) }}

                    >
                        3
                    </button>
                </div>

                {
                    Step1 ? (
                        <Row className='p-5 pt-0'>
                            <Col xs={12}>
                                <Label>firstName</Label>
                                <Input
                                    name="firstName"
                                    type="text"
                                    className="form-control"
                                    // onFocus={clearErrorHandler}
                                    onChange={e => handleChange(e)}
                                    invalid={firstNameError ? true : false}
                                />
                                {
                                    firstNameError ? (
                                        <FormFeedback type="invalid">
                                            {firstNameError}
                                        </FormFeedback>
                                    ) : null
                                }

                            </Col>
                            <Col xs={12}>
                                <Label>Email</Label>
                                <Input
                                    name="Email"
                                    type="email"
                                    className="form-control"
                                    // onFocus={clearErrorHandler}
                                    onChange={e => handleChange(e)}
                                    invalid={emailError ? true : false}
                                />
                                {
                                    emailError ? (
                                        <FormFeedback type="invalid">
                                            {emailError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </Col>

                            <Label>Date of birth</Label>
                            <Col xs={12}>
                                <Input
                                    name="dob"
                                    type="date"
                                    className="form-control"
                                    // onFocus={clearErrorHandler}
                                    onChange={e => handleChange(e)}
                                    invalid={dateError ? true : (resDate ? true : false)}
                                />
                                {
                                    dateError ? (
                                        <FormFeedback type="invalid">
                                            {dateError}
                                        </FormFeedback>
                                    ) :
                                        <FormFeedback type="invalid">
                                            {resDate}
                                        </FormFeedback>
                                }

                            </Col>

                            <Label>Mobile</Label>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={2} className="pe-1">
                                        <select
                                            name='cd'
                                            onChange={e => mobileCheck(e)}
                                            className={
                                                !mobileError
                                                    ? "form-control"
                                                    : "form-control border border-danger"
                                            }
                                        >
                                            <option value={`6`}>{val}</option>
                                            {Countries?.map((elem, ks) => {
                                                return (
                                                    <>
                                                        <option key={ks} value={elem.code}>{`${elem.code}`}</option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                        {cdError ? (
                                            <div className="errorDiv text-danger">{cdError}</div>
                                        ) : null}
                                    </Col>
                                    <Col xs={10} className="p-0">
                                        <Input
                                            name="mobile"
                                            type="text"
                                            className="form-control"
                                            // onFocus={clearErrorHandler}
                                            onChange={e => mobileCheck(e)}
                                            invalid={mobileError ? true : resMobiles ? true : false}
                                        />
                                        {
                                            mobileError ? (
                                                <FormFeedback type="invalid">
                                                    {mobileError}
                                                </FormFeedback>
                                            ) : null
                                        }
                                        {
                                            resMobiles ? (
                                                <FormFeedback type="invalid">
                                                    {resMobiles}
                                                </FormFeedback>
                                            ) : null
                                        }
                                    </Col>
                                </Row>

                            </Col>
                            <div className=''>
                                <button
                                    type="button"
                                    className="float-end btn btn-outline-info mt-5 mb-5 w-25"
                                    onClick={e => createUserMethod(e, "nexttt")}
                                >
                                    <i className="fa-duotone fa-address-book"></i>
                                    Next
                                </button>
                            </div>
                            {/* <pre>
                                <code>
                                {JSON.stringify(
                                    {
                                        user
                                    },
                                    null,
                                    2
                                )}
                                </code>
                            </pre> */}
                        </Row>
                    )
                        : Step2 ? (
                            <Row className='p-5 pt-0'>
                                <Col xs={12}>
                                    <Label>Degree</Label>
                                    <Input
                                        name="Degree"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                        invalid={firstNameError ? true : false}
                                    />
                                    {
                                        firstNameError ? (
                                            <FormFeedback type="invalid">
                                                {firstNameError}
                                            </FormFeedback>
                                        ) : null
                                    }

                                    <Label>Address</Label>
                                    <Input
                                        name="Address"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                        invalid={emailError ? true : false}
                                    />
                                    {
                                        emailError ? (
                                            <FormFeedback type="invalid">
                                                {emailError}
                                            </FormFeedback>
                                        ) : null
                                    }
                                </Col>

                                <Label>Permanent Address</Label>
                                <Col xs={12}>
                                    <Input
                                        name="pAddress"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                        invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {
                                        dateError ? (
                                            <FormFeedback type="invalid">
                                                {dateError}
                                            </FormFeedback>
                                        ) :
                                            <FormFeedback type="invalid">
                                                {resDate}
                                            </FormFeedback>
                                    }

                                </Col>
                                <Label>Qualifications</Label>
                                <Col xs={12}>
                                    <Input
                                        name="Qualifications"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                    // invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {/* {
                                    dateError ? (
                                        <FormFeedback type="invalid">
                                            {dateError}
                                        </FormFeedback>
                                    ) :
                                        <FormFeedback type="invalid">
                                            {resDate}
                                        </FormFeedback>
                                } */}


                                </Col>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info mt-5 ms-2 mb-5 float-end w-25"
                                        onClick={e => createUserMethod(e, "nextttr")}
                                    >
                                        <i className="fa-duotone fa-address-book"></i>
                                        Next
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info  mt-5 mb-5 float-end"
                                        onClick={e => createUserMethod(e, "backtf")}
                                    >
                                        <i className="fa-duotone fa-address-book"></i>
                                        back
                                    </button>
                                </div>

                            </Row>
                        ) : Step3 ? (
                            <Row className='p-5 pt-0'>
                                <Label>City</Label>
                                <Col xs={12}>
                                    <Input
                                        name="pAddress"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                        invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {
                                        dateError ? (
                                            <FormFeedback type="invalid">
                                                {dateError}
                                            </FormFeedback>
                                        ) :
                                            <FormFeedback type="invalid">
                                                {resDate}
                                            </FormFeedback>
                                    }

                                </Col>
                                <Label>District</Label>
                                <Col xs={12}>
                                    <Input
                                        name="Qualifications"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                    // invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {/* {
                                    dateError ? (
                                        <FormFeedback type="invalid">
                                            {dateError}
                                        </FormFeedback>
                                    ) :
                                        <FormFeedback type="invalid">
                                            {resDate}
                                        </FormFeedback>
                                } */}


                                </Col>

                                <Label>Capital</Label>
                                <Col xs={12}>
                                    <Input
                                        name="Qualifications"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                    // invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {/* {
                                    dateError ? (
                                        <FormFeedback type="invalid">
                                            {dateError}
                                        </FormFeedback>
                                    ) :
                                        <FormFeedback type="invalid">
                                            {resDate}
                                        </FormFeedback>
                                } */}


                                </Col>

                                <Label>Village</Label>
                                <Col xs={12}>
                                    <Input
                                        name="Qualifications"
                                        type="text"
                                        className="form-control"
                                        // onFocus={clearErrorHandler}
                                        onChange={e => handleChange(e)}
                                    // invalid={dateError ? true : (resDate ? true : false)}
                                    />
                                    {/* {
                                    dateError ? (
                                        <FormFeedback type="invalid">
                                            {dateError}
                                        </FormFeedback>
                                    ) :
                                        <FormFeedback type="invalid">
                                            {resDate}
                                        </FormFeedback>
                                } */}


                                </Col>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-info mt-5 ms-2 mb-5 float-end w-25"
                                        onClick={e => createUserMethod(e, "create")}
                                    >
                                        <i className="fa-duotone fa-address-book"></i>
                                        Create User
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info  mt-5 mb-5 float-end"
                                        onClick={e => createUserMethod(e, "backts")}
                                    >
                                        <i className="fa-duotone fa-address-book"></i>
                                        back
                                    </button>
                                </div>

                            </Row>
                        ) : <h1>Empty</h1>
                }
            </Form >
        </div >
    )
}

export default Registration
