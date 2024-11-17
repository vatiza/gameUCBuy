import {
  Button,
  Code,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const OrderModal = ({ trackingId, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col font-arbo gap-1 text-blue-600">
              Order placed successfully
            </ModalHeader>
            <ModalBody>
              <p>
                Your order number is <Code color="success">{trackingId}</Code>.
                Please allow <span className="font-bold">15 to 30</span> minutes
                for us to complete your order. Thank you for your patience!
               
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
