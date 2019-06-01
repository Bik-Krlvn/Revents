import createReducer from "../../app/common/utils/reducerUtils";
import { OPEN_MODAL, CLOSE_MODAL } from "./ModalConstant";

const initialState = null;

export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

export const closeModal = () => {
  return null;
};

export default createReducer(initialState, {
  [OPEN_MODAL]: openModal,
  [CLOSE_MODAL]: closeModal
});
