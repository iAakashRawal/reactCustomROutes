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
    const [firstNameError, setFirstNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [dateError, setDateError] = useState()
    const [mobileError, setMobileError] = useState()
    const [resMobile, setResMobile] = useState()
    const [resMobiles, setResMobiles] = useState()
    const [resDate, setResDate] = useState()
    const [val, setVal] = useState()
    const [formCheck, setFormCheck] = useState(false)
    const errorMessage = "Please Enter"

    const divElement = useRef();


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
        setVal(value)

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
    }

    const createUserMethod = e => {
        e.preventDefault();
        // formValidation()
        if (formValidation()) {
            // toast.error("Hellow")
        } else {
            // toast.error("nooooooo")
        }
    }

    const setFormChecks = (e) => {
        console.log("object", divElement.current)
        if (e === "1") {
            setFormCheck(false)
        } else {
            setFormCheck(true)
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
                        className={!formCheck ? "btn-success btn rounded-circle" : "btn rounded-circle btn-outline-success"}
                        onClick={() => { let e = "1"; setFormChecks(e) }}
                    >
                        1
                    </button>
                    <label className=''>__________</label>
                    <button
                        type="button"
                        className={formCheck ? "btn-success btn rounded-circle" : "btn rounded-circle btn-outline-success"}
                        onClick={() => { let e = "2"; setFormChecks(e) }}

                    >
                        2
                    </button>
                </div>

                {
                    !formCheck ? (
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
                                        <select name='cd' className='form-control' onChange={e => mobileCheck(e)}>
                                            <option value={`6`}>{val}</option>
                                            {Countries?.map((elem, ks) => {
                                                return (
                                                    <>
                                                        <option key={ks} value={elem.code}>{`${elem.code}`}</option>
                                                    </>
                                                )
                                            })}
                                        </select>
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
                            <div>


                                <button
                                    type="button"
                                    className="btn btn-outline-success mt-5 mb-5 w-50"
                                    onClick={e => createUserMethod(e)}
                                >
                                    <i className="fa-duotone fa-address-book"></i>
                                    Create User
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
                        : (

                            <Row className='p-5 pt-0'>
                                <Col xs={12}>
                                    <Label>Degree</Label>
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

                                    <Label>Address</Label>
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

                                <Label>Permanent Address</Label>
                                <Col xs={12}>
                                    <Input
                                        name="dob"
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
                                        name="dob"
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

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success mt-5 mb-5 w-50"
                                        onClick={e => createUserMethod(e)}
                                    >
                                        <i className="fa-duotone fa-address-book"></i>
                                        Create User
                                    </button>
                                </div>

                            </Row>
                        )
                }
            </Form >
        </div >
    )
}

export default Registration
