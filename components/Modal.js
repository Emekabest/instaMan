import {
  Button,
  Modal as ModalUI,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function Modal(props) {
  console.log(props);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{props.openButtonText}</Button>

      <ModalUI isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>{props.children}</ModalBody>

          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalContent>
      </ModalUI>
    </>
  );
}

export default Modal;
