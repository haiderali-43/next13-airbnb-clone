'use client'
import useRentModal from "@/hooks/useRentModal";
import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <div>
      <Modal
        title="Airbnb your home!"
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
      />
    </div>
  );
};

export default RentModal;
