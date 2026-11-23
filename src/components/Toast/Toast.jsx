import React from 'react';
import './Toast.css';
import { FiCheckCircle } from 'react-icons/fi';

export default function Toast({ show, message }) {
  return (
    <div className={`toast-notice ${show ? 'show' : ''}`} role="status" aria-live="polite">
      <FiCheckCircle size={15} style={{ marginRight: 8, verticalAlign: 'middle', display: 'inline-block' }} />
      <span>{message}</span>
    </div>
  );
}
