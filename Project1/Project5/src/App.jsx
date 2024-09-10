import "./App.css";
import Navbar from "./components/Navbar";
import { MdSearch } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./assets/config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContaxt from "./components/AddAndUpdateContaxt";
import useDisclosure from "./hooks/useDisclosure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const { open, isOpen, isClose } = useDisclosure();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <div className="max-w-[370px] m-4 ">
      <Navbar />
      <div className="flex relative items-center gap-1">
        <MdSearch className="absolute text-white text-3xl m-1" />
        <input
          onChange={filterContacts}
          className=" h-10 flex-grow bg-transparent border-white border-[1px] rounded-md text-white pl-9"
          type="text"
        />
        <AiFillPlusCircle onClick={isOpen} className="text-white text-3xl" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <div className="flex justify-center">
        <AddAndUpdateContaxt open={open} isClose={isClose} />
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
}

export default App;
