import PropTypes from "prop-types";
import {
  Modal as ModalUI,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function Modal({ children, renderCloseBtn, renderOpenBtn }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => onOpen();
  const handleClose = () => onClose();

  return (
    <>
      {renderOpenBtn(handleOpen)}

      <ModalUI isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalBody p={0}>{children}</ModalBody>
          {renderCloseBtn(handleClose)}
        </ModalContent>
      </ModalUI>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * `function` with `handleClose` param, that @returns a button for closing the Modal
   */
  renderCloseBtn: PropTypes.func,
  /**
   * `function` with `handleOpen` param, that @returns a button for opening the Modal
   */
  renderOpenBtn: PropTypes.func.isRequired,
};

export default Modal;
