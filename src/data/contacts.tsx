import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from 'react-icons/io5';

export const CONTACTS = [
  {
    icon: <IoMailOutline />,
    title: "Email",
    value: <a href="mailto:juniormiguel08062@gmail.com" className="contact-link">juniormiguel08062@gmail.com</a>
  },
  {
    icon: <IoPhonePortraitOutline />,
    title: "Phone",
    value: <a href="tel:+584120247180" className="contact-link">+58 (412) 024-7180</a>
  },
  {
    icon: <IoCalendarOutline />,
    title: "Birthday",
    value: <time dateTime="1999-06-08">June 08, 1999</time>
  },
  {
    icon: <IoLocationOutline />,
    title: "Location",
    value: <address>Charallave, Miranda, Venezuela</address>
  }
];