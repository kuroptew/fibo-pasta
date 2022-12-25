import styles from './Contacts.module.scss'

import ContactsMap from "../../../contactsMap/ContactsMap";
import Phone from "../../UI/phone/Phone";

const Contacts = () => {
  return (
    <main className={styles['contacts__wrapper']}>
      <ContactsMap/>
      <Phone number={'8 800 333-36-62'}/>
      <address className={styles['contacts__address']}>ул. Проспект Вернадского 86В</address>
      <span className={styles['contacts__info']}>Доставка и самовывоз 10:00 — 23:00</span>
    </main>
  );
};

export default Contacts;