import { Checkbox } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  temp_address: Yup.string().required("Address is required"),

  temp_state: Yup.string().required("State is required"),

  temp_region: Yup.string().required("Region is required"),

  temp_city: Yup.string().required("City is required"),

  temp_country: Yup.string().required("Country is required"),

  temp_postal: Yup.string()
    .matches(/^[0-9]{6}$/, "Postal Code must be a 6-digit number")
    .required("Postal Code is required"),
});

const TempAddress = ({
  proffesionaback,
  PartnerID,
  perAddress,
  setPerAddress,
  currentValues,
  setCurrentValues,
  setAddressBack,
  setCurrentpage,
  addressback,
  setSelected,
  setToggle,
  checkBox,
  setCheckBox,
  empaddressdata,enable
}) => {
  const handleSubmit = (values) => {
    if(enable === true) {

    if (checkBox === true) {
      setPerAddress({
        address: values.temp_address,
        state: values.temp_state,
        region: values.temp_region,
        city: values.temp_city,
        country: values.temp_country,
        postalcode: values.temp_postal,
      });
      console.log(perAddress, "hellohf");
    }
    // else if (checkBox === false
      
    // ) {
    //   setPerAddress({
    //     address: "",
    //     state: "",
    //     region: "",
    //     city: "",
    //     country: "",
    //     postalcode: "",
    //   });
    // }
    if (checkBox === false && enable === true) {
      // Do nothing or any other action when the condition is true
    } else if(checkBox === false) {
      setPerAddress({
        address: "",
        state: "",
        region: "",
        city: "",
        country: "",
        postalcode: "",
      });
    }
    // checkBox === false && enable === true ? "" : setPerAddress({
    //   address: "",
    //   state: "",
    //   region: "",
    //   city: "",
    //   country: "",
    //   postalcode: "",
    // })

    setCurrentValues({
      address: values.temp_address,
      state: values.temp_state,
      region: values.temp_region,
      city: values.temp_city,
      country: values.temp_country,
      postalcode: values.temp_postal,
    });
  
  }
  else if (enable === false){

  }
  else {
  setCurrentValues({
    address: values.temp_address,
    state: values.temp_state,
    region: values.temp_region,
    city: values.temp_city,
    country: values.temp_country,
    postalcode: values.temp_postal,
  });
  if (checkBox === true) {
    setPerAddress({
      address: values.temp_address,
      state: values.temp_state,
      region: values.temp_region,
      city: values.temp_city,
      country: values.temp_country,
      postalcode: values.temp_postal,
    });
    console.log(perAddress, "hellohf");
  }
    else if (checkBox === false
      
    ) {
      setPerAddress({
        address: "",
        state: "",
        region: "",
        city: "",
        country: "",
        postalcode: "",
      });
    }
  }

    setSelected(2);
    console.log(values, perAddress, "vlvlvlvlvlvl");

    setToggle(true);
  };
  // const getpartnerData = useSelector((state) => state.crm.partner_data_byid);
  // console.log(getpartnerData, "hellohello hehs");
  console.log(currentValues.address, "currentvalues");


  return (
    <div>
      <div>
        {/* <Checkbox
          onChange={() => setCheckBox(!checkBox)}
          // onChange={(e) => {
          //   if (e.target.checked) {
          //     setFieldValue("temp_address", values.temp_address);
          //     setFieldValue("temp_country", values.temp_country);
          //     setFieldValue("temp_state", values.temp_state);
          //     setFieldValue("temp_city", values.temp_city);
          //     setFieldValue("temp_postal", values.temp_postal);
          //   } else {
          //     setFieldValue("temp_address", "");
          //     setFieldValue("temp_country", "");
          //     setFieldValue("temp_state", "");
          //     setFieldValue("temp_city", "");
          //     setFieldValue("temp_postal", "");
          //   }
          // }}

          className="text-[#1F4B7F] font-semibold text-[.9vw] mt-[.5vw]"
        >
          Temporary Address same as Permanent Address
        </Checkbox> */}
      </div>

      <Formik
        initialValues={{
          temp_address: currentValues.address || "",
          temp_state: currentValues.state || "",
          temp_region: currentValues.region || "",
          temp_city: currentValues.city || "",
          temp_country: currentValues.country || "",
          temp_postal: currentValues.postalcode || "",
        }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ handleSubmit, values }) => {
          console.log(values,"valuestesting");
          
          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 w-full gap-x-[2vw] pt-[1vw]">
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    Address
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="temp_address"
                    placeholder="Enter Temperory Address"
                    value={values.temp_address}

                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  />
                  <ErrorMessage
                    name="temp_address"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    State
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    as="select"
                    name="temp_state"
                    value={values.temp_state}
                    //   onChange={(e) => {
                    //     handleChange(e);
                    //     localStorage.setItem("status", e.target.value);
                    //   }}
                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  >
                    <option label="Select State" value="" className="" />
                    <option label="Tamilnadu" value="Tamilnadu" className="" />
                    <option label="Kerala" value="Kerala" className="" />
                    <option label="Andhra" value="Andhra" className="" />
                  </Field>
                  <ErrorMessage
                    name="temp_state"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 w-full gap-x-[2vw] pt-[1vw]">
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    Region
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    as="select"
                    name="temp_region"
                    value={values.temp_region}
                    //   onChange={(e) => {
                    //     handleChange(e);
                    //     localStorage.setItem("status", e.target.value);
                    //   }}
                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  >
                    <option label="Select Region" value="" className="" />
                    <option
                      label="Southern Region"
                      value="southerregion"
                      className=""
                    />
                    <option
                      label="Northern Region"
                      value="northernregion"
                      className=""
                    />
                    <option
                      label="Western Region"
                      value="westernregion"
                      className=""
                    />
                    <option
                      label="Eastern Region"
                      value="easternregion"
                      className=""
                    />
                    <option
                      label="North Eastern Region"
                      value="northeasternregion"
                      className=""
                    />
                  </Field>
                  <ErrorMessage
                    name="temp_region"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    City
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    as="select"
                    name="temp_city"
                    value={values.temp_city}
                    //   onChange={(e) => {
                    //     handleChange(e);
                    //     localStorage.setItem("status", e.target.value);
                    //   }}
                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  >
                    <option label="Select City" value="" className="" />
                    <option label="Tiruppur" value="Tiruppur" className="" />
                    <option label="Coimbatore" value="Coimbatore" className="" />
                    <option label="Chennai" value="Chennai" className="" />
                  </Field>
                  <ErrorMessage
                    name="temp_city"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 w-full gap-x-[2vw] pt-[1vw]">
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    Country
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    as="select"
                    name="temp_country"
                    value={values.temp_country}
                    //   onChange={(e) => {
                    //     handleChange(e);
                    //     localStorage.setItem("status", e.target.value);
                    //   }}
                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  >
                    <option label="Select Country" value="" className="" />
                    <option label="India" value="India" className="" />
                    <option label="America" value="America" className="" />
                    <option label="Australia" value="Australia" className="" />
                  </Field>
                  <ErrorMessage
                    name="temp_country"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
                <div className="col-span-1 relative">
                  <label className="text-[#1F4B7F] text-[1.1vw] ">
                    Postal Code
                    <span className="text-[1vw] text-red-600 pl-[0.2vw]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="temp_postal"
                    placeholder="Enter Postal Code"
                    value={values.temp_postal}
                    disabled={
                      PartnerID || proffesionaback
                        ? enable
                          ? false
                          : true
                        : false
                    }
                    className={`${PartnerID || proffesionaback
                      ? enable == false
                        ? " cursor-not-allowed"
                        : ""
                      : ""
                      } border-r-[0.3vw] mt-[0.2vw] border-l-[0.1vw] border-t-[0.1vw] border-b-[0.3vw] placeholder-blue border-[#1F487C] text-[#1F487C] text-[1vw] h-[3vw] w-[100%] rounded-[0.5vw] outline-none px-[1vw]`}
                  />
                  <ErrorMessage
                    name="temp_postal"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute bottom-[-1.2vw] left-[.3vw]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between  pb-[.5vw] pt-[1.5vw]">
                <div>
                  <h1 className="text-[#1F4B7F] text-[0.7vw] font-semibold">
                    *You must fill in all fields to be able to continue
                  </h1>
                </div>
                <div className="flex items-center gap-x-[0.7vw]">
                  <button
                    className="border-[#1F487C] w-[5vw] font-semibold text-[1vw] h-[2vw] rounded-full border-r-[0.2vw]  border-l-[0.1vw] border-t-[0.1vw] border-b-[0.2vw]"
                    onClick={() => {
                      setCurrentpage(1);
                      setAddressBack(true);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="bg-[#1F487C] font-semibold rounded-full w-[11vw] h-[2vw] text-[1vw] text-white"
                    type="submit"
                  //   onClick={() => setCurrentpage(3)}
                  >
                    {PartnerID || proffesionaback
                      ? enable
                        ? "Update & Continue"
                        : " Continue"
                      : "Save & Continue"}{" "}
                  </button>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
};

export default TempAddress;
