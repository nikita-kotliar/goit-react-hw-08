import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.contact_div}>
        <IoPerson className={css.icon} />
        <p className={css.p}>{contact.username}</p>
        <BsFillTelephoneFill className={css.icon} />
        <p className={css.p}>{contact.tel}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
