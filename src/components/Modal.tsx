import React from "react";
import { Modal as ModalRNP, Portal, Text, Button } from "react-native-paper";
import { Dialog } from "@rneui/themed";
import useStore from "../store/rootStore";

const Modal = () => {
  const { modalVisible, closeModal, uiLibrarySelected } = useStore((state) => ({
    modalVisible: state.modalVisible,
    closeModal: state.closeModal,
    uiLibrarySelected: state.uiLibrarySelected,
  }));
  console.log("modalVisible", modalVisible);
  if (uiLibrarySelected === 1) {
    return (
      <Dialog isVisible={modalVisible} onBackdropPress={() => closeModal()}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
    );
  }
  return (
    <ModalRNP
      visible={modalVisible}
      onDismiss={() => closeModal()}
      contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
    >
      <Text>Example Modal. Click outside this area to dismiss.</Text>
    </ModalRNP>
  );
};

export default Modal;
