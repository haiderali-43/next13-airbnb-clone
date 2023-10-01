"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useSearchModal from "../../hooks/useSearchModal";
import { useSearchParams, useRouter } from "next/navigation";



const STEPS =[
    LOCATION = 0,
    DATE = 1,
    IMFO = 2
]




const SearchModal = () => {
  const searchModal = useSearchModal();
  const router = useRouter();
  const searchParams = useSearchParams();


  const [steps, setSteps ] = useState(STEPS.LOCATION)
  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      title="Filteres"
      actionLabel="Submit"
    />
  );
};

export default SearchModal;
