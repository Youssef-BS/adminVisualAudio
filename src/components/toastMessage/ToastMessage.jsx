import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = ({ message, typeToast }) => {
  const showToast = () => {
    
    switch (typeToast) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'warning':
        toast.warn(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <div>
      {showToast()}
    </div>
  );
};

export default ToastMessage;
