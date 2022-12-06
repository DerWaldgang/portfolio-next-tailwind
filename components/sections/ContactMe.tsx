import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import IconsLayout from "../layouts/IconsLayout";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string,
  email: string,
  message: string,
  subject: string,
}



const ContactMe = (props: Props) => {

  const {register, handleSubmit} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if(formData.message === '' || formData.email  === '' || formData.name  === '' || formData.subject  === '') return
    window.location.href = `mailto:bekamakhaev@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. ${formData.email}`
  }

 // СДЕЛАТЬ АДАПТИВ
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

      <h3 className="absolute top-[98px] sm:top-7 uppercase tracking-[10px] text-gray-500 text-3xl font-thin">
        Contact
      </h3>

      <div className="flex absolute top-[150px] lg:static lg:top-0 flex-col space-y-8">
        <h4 className="text-3xl sm:text-4xl font-semibold text-center">Any  <span className="decoration-[#F7AB0A] underline font-light">offers</span> ? Open to <span className="decoration-[#F7AB0A] underline font-light">talk</span>.</h4>

        <div className="flex flex-col md:flex-row items-center space-x-2 justify-center">

            <IconsLayout text={"+7 999 803 97 56"}><PhoneIcon/></IconsLayout>
            <IconsLayout text={"bekamakhaev@gmail.com"}><EnvelopeIcon/></IconsLayout>
            <IconsLayout text={"Kazakhstan"}><MapPinIcon/></IconsLayout>

        </div>

        <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2 w-fit mx-auto px-5 sm:px-0">

            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                <input {...register('email')}  placeholder="Email" className="contactInput" type="email" />
            </div>

                <input {...register('subject')}  placeholder="Subject" className="contactInput" type="text" />
                <textarea {...register('message')}  placeholder="Message" className="contactInput" />
                <button className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black 
                font-bold text-lg  hover:text-white">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default ContactMe;
