import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false); 
    // state  --show modal and not show
    return (
      <>
        <button onClick={() => setShowModal(true)}>
          Show modal using a portal
        </button>
        {showModal && createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
      </>
    );
  }