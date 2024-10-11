import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";

export default function Update() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen} color="primary">Open Modal</button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <input
                  autoFocus
                  placeholder="Enter your email"
                />
                <input
                  placeholder="Enter your password"
                  type="password"
                />
              </ModalBody>
              <ModalFooter>
                <button color="danger"  onClick={onClose}>
                  Close
                </button>
                <button color="primary" onClick={onClose}>
                  Sign in
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}