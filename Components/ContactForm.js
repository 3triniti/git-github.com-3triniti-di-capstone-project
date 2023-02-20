import React, { useState } from "react";
// import './contactFormStyles.scss';
import InputField from "./InputField";

const ContactForm = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [estimatedGuestCount, setEstimatedGuestCount] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [message2, setMessage2] = useState("");

  const coolFunctionHandler = (e) => {};
  return (
    <form
      className="mc__form place-content-center"
      onSubmit={(e) => coolFunctionHandler(e)}
    >
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Name*
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setName}
            type="text"
            value={name}
            placeholder=""
            isRequired
            name="name"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        How did you hear about us?
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-96 h-30 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setMessage}
            type="textarea2"
            value={message}
            placeholder=""
            name="message"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Phone*
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setPhoneNumber}
            type="text"
            value={phoneNumber}
            placeholder=""
            isRequired
            name="phoneNumber"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Event Date
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setEventDate}
            type="text"
            value={eventDate}
            placeholder=""
            name="eventDate"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Estimated Guest Count
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setEstimatedGuestCount}
            type="text"
            value={estimatedGuestCount}
            placeholder=""
            name="estimatedGuestCount"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Email*
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder=""
            isRequired
            name="email"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Event Type*
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setEventType}
            type="text"
            value={eventType}
            placeholder=""
            isRequired
            name="eventType"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Event Location
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-16 mt-1 rounded-xl mb-8">
          <InputField
            label=""
            onChangeHandler={setEventLocation}
            type="text"
            value={eventLocation}
            placeholder=""
            name="eventLocation"
          />
        </div>
      </div>
      <div className="ml-8 lg:ml-96 text-normal text-sm text-slate-500">
        Message
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-black border-teal-100 w-72 md:w-1/2 h-96 mt-1 rounded-xl mb-8">
          <InputField
            className="w-2/3 h-96"
            label=""
            onChangeHandler={setMessage2}
            type="textarea"
            value={message2}
            placeholder=""
            name="message2"
          />
        </div>
      </div>
      <button className=" bg-teal-500 text-slate-100 hover:bg-white hover:text-teal-500 font-open font-normal rounded-xl text-sm w-48 ml-8 md:ml-96 h-10 mt-6 mb-12">
        <div className="">
          <InputField
            label="submit"
            type="submit"
            formValues={[email, name, phoneNumber, eventType]}
          />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
