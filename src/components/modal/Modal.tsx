"use client";

import React, { useContext, useState } from 'react';
import { ModalContext } from '@/context/GrowModalContext'
import { Modal, Box } from '@mui/material';
import styles from "./page.module.scss";

const ModalBox = () => {
  const { state, dispatch } = useContext(ModalContext);
  const [firstName, setFirstName] = useState(" ");
  const modalOpen = state.modalOpen;
  let open = modalOpen;
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = () => dispatch({ type: "CHANGE_MODAL" });


  return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box className={styles.form}>
          <form className={styles.contactForm}>
            <div className={styles.contactFormColumnRight}>
              <h2 className={styles.contactFormHeader}>We&apos;d love to hear from you!</h2>
              <div className={styles.underline} />
              <div className={styles.mainForm}>
                <div className={styles.mainFormName}>
                  <div className={styles.inputBoxWrapper}>
                    <label className={styles.inputLabel} htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className={styles.inputBox}
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputBoxWrapper}>
                    <label className={styles.inputLabel} htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className={styles.inputBox}
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.inputBoxWrapper}>
                  <label className={styles.inputLabel} htmlFor="email">Email</label>
                  <input
                    type='email'
                    className={styles.inputBox}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBoxWrapper}>
                  <label className={styles.inputLabel} htmlFor="textArea">How can we help you</label>
                  <textarea
                    className={styles.textArea}
                    id="textArea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type='submit' className={styles.submitBtn}>Submit</button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
  )
}

export default ModalBox