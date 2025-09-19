import { CONTACTS } from '../data/contacts';

export function ContactMenu() {
  return (
    <ul className="contacts-list">
      {CONTACTS.map((contact) => (
        <li className="contact-item" key={contact.title}>
          <div className="icon-box">{contact.icon}</div>
          <div className="contact-info">
            <p className="contact-title">{contact.title}</p>
            {contact.value}
          </div>
        </li>
      ))}
    </ul>
  );
};