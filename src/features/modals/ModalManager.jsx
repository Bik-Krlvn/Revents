import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const mapState = state => ({
  currentModal: state.modals
});

const modalLookUp = {
  TestModal,
  RegisterModal,
  LoginModal
};
const ModalManager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ShowModal = modalLookUp[modalType];
    renderedModal = <ShowModal {...modalProps} />;
    return renderedModal;
  }
  return <span>{renderedModal}</span>;
};

export default connect(mapState)(ModalManager);
