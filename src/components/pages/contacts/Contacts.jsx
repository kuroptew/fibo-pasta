import styles from './Contacts.module.scss'

import ContactsMap from "../../../contactsMap/ContactsMap";
import Phone from "../../UI/phone/Phone";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Contacts = () => {
  return (
    <>
      <Header/>
      <main className={styles['contacts__wrapper']}>
        <ContactsMap/>
        <Phone number={'8 800 333-36-62'}/>
        <address className={styles['contacts__address']}>ул. Проспект Вернадского 86В</address>
        <span className={styles['contacts__info']}>Доставка и самовывоз 10:00 — 23:00</span>
      </main>
      <Footer/>
    </>
  );
};

export default Contacts;