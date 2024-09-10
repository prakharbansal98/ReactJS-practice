import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../assets/config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const AddAndUpdateContaxt = ({ open, isClose, isUpdate, contact }) => {
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      isClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const addContacts = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      isClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal open={open} isClose={isClose}>
        <Formik
          validationSchema={contactValidationSchema}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContacts(values);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col m-1 gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-8 border rounded-md" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col m-1 gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="h-8 border rounded-md"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="border bg-orange p-1 self-end">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContaxt;
