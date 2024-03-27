import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { getContacts, getStatusFilter } from "../../redux/selectors";

const getVisibleContact = (contacts, statusFilter) => {
  console.log(statusFilter);
  console.log(contacts);
  if (statusFilter == "all") {
    return contacts;
  } else {
    return contacts.filter((contact) =>
      contact.username.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContact = getVisibleContact(contacts, statusFilter);
  console.log(visibleContact);
  return (
    <>
      {contacts.length ? (
        <ul className={css.contacts}>
          {visibleContact.map((contact) => (
            <li className={css.contact_item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <span className={css.contacts_none}>Contacts not found</span>
      )}
    </>
  );
}
