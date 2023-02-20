import React, { useState, useEffect } from "react";
// import "./mcFormStyles.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

// import { useGHStContext } from "../../../utils/ContextProvider";

const CustomForm = ({ status, message, onValidated }) => {
  //   const { modalOpen, setModalOpen } = useGHStContext();

  const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      // firstName &&
      // lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        // MERGE1: firstName,
        // MERGE2: lastName,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    // setFirstName("");
    // setLastName("");
    setEmail("");
  };

  return (
    <form
      className="mc__form subscribe-box grid-cols-1 md:flex border-solid border-2 bg-transparent border-teal-500 rounded-md w-80 h-80 md:w-11/12 md:mr-12 md:h-32 mt-6 md:mt-16 ml-8 md:ml-14 mb-16"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h3 className="mc__title font-open font-normal text-2xl text-slate-700 ml-8 mt-4">
          {status === "success" ? "Success!" : "Subscribe!"}
        </h3>
        <p className="font-open font-thin text-normal text-slate-700 ml-8 mr-3 pt-2 md:-mr-24 lg:pt-2 lg:mr-0 md:mt-2">
          Receive selected items and information monthly
        </p>
      </div>
      <div className="mt-3 ml-6">
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-64 h-16 ml-0 md:w-80 md:h-18 lg:ml-8 mt-6 md:mt-3 rounded-md">
          <InputField
            className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-64 h-12 ml-0 md:w-80 md:h-18 lg:ml-8 mt-6 md:mt-3 rounded-md"
            label=""
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="Email Address"
            isRequired
          />
        </div>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending font-open text-sm text-teal-500 ml-8">
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error font-open text-sm text-red-500 ml-8"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success font-open text-base text-teal-500 ml-8"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status !== "success" ? (
        <div className="mc__field-container mt-6 ml-32">
          {/* <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-36 h-6">
            <InputField
              className="border-solid bg-transparent font-open text-normal text-sm text-slate-400 border-slate-400 w-36 h-6 mt-4"
              label=""
              onChangeHandler={setFirstName}
              type="text"
              value={firstName}
              placeholder="First Name"
              isRequired
            />
          // </div> */}
          {/* <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-36 h-6">
            <InputField
              className=" border-2  font-open text-normal text-sm text-slate-400 border-slate-400 w-36 h-6  mt-4"
              label=""
              onChangeHandler={setLastName}
              type="text"
              value={lastName}
              placeholder="Last Name"
              isRequired
            />
          </div> */}
        </div>
      ) : null}
      {status === "success" ? (
        <button
        // onClick={() => setModalOpen(false)}
        //   className="g__justify-self-center"
        >
          Close
        </button>
      ) : (
        <button className="bg-teal-500 text-slate-100 hover:bg-white hover:text-teal-500 font-open font-normal rounded-md text-sm w-60 h-10 mt-6 md:mt-10 ml-8 md:ml-0">
          <InputField
            className=""
            label="Submit"
            type="submit"
            formValues={[email]}
          />
        </button>
      )}
    </form>
  );
};

const MailchimpFormContainer = (props) => {
  const postURL =
    "https://kauaiteaceremony.us11.list-manage.com/subscribe/post?u=$ac64455e32955d050a08f0203&=$1f9ec6ec68";

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postURL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
