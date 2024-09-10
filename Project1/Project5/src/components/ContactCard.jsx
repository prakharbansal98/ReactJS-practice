import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../assets/config/firebase";
import AddAndUpdateContaxt from "./AddAndUpdateContaxt";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { open, isOpen, isClose } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={contact.id}
      className="flex justify-between items-center bg-yellow p-2 rounded-md"
    >
      <div className="flex gap-2">
        <HiOutlineUserCircle className="text-4xl text-orange" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex">
        <RiEditCircleLine
          onClick={isOpen}
          className="text-2xl cursor-pointer"
        />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-2xl text-[#5F00D9]"
        />
        <AddAndUpdateContaxt
          contact={contact}
          isUpdate
          open={open}
          isClose={isClose}
        />
      </div>
    </div>
  );
};

export default ContactCard;
