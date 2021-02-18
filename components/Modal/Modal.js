import PropTypes from "prop-types";
import {
  Modal as ModalUI,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function Modal({ children, renderOpenBtn, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => onOpen();
  const handleClose = () => onClose();

  return (
    <>
      {renderOpenBtn(handleOpen)}

      <ModalUI isOpen={isOpen} onClose={onClose} isCentered {...rest}>
        <ModalOverlay />

        <ModalContent bg="none">
          <ModalBody p={0}>{children(handleClose)}</ModalBody>
        </ModalContent>
      </ModalUI>
    </>
  );
}

Modal.propTypes = {
  /**
   * `function` with `handleClose` param, that @returns the content(element) of the Modal
   */
  children: PropTypes.func.isRequired,
  /**
   * `function` with `handleOpen` param, that @returns a button for opening the Modal
   */
  renderOpenBtn: PropTypes.func.isRequired,
};

export default Modal;
