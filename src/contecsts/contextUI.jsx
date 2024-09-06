import React, { createContext, useState, useEffect } from "react";
import { API_Key, API_Movie_details } from "../constants.js";

export const ModalContext = createContext();

export const MovieModal = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieModalInfo, setMovieModalInfo] = useState([]);
  const [isHidedForm, setisHidedForm] = useState(false);

  function showModal(e, filmInfo) {
    if (!e.target.closest(".like")) {
      fetch(API_Movie_details + filmInfo, {
        headers: {
          "Content-Type": "application.json",
          "X-API-KEY": API_Key,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMovieModalInfo(data);
          document.body.style.overflow = "hidden";
          setModalOpen(true);
        });
    } else return;
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".modal__card") && !e.target.closest(".movie")) {
        setModalOpen(false);
        document.body.style.overflow = "auto";
      }
    });
  }, [modalOpen]);

  return (
    <ModalContext.Provider
      value={{
        movieModalInfo,
        modalOpen,
        setMovieModalInfo,
        setModalOpen,
        showModal,
        closeModal,
        isHidedForm,
        setisHidedForm,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
