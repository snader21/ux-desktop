import React, { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";
import Toast from "../../components/Toast/Toast";

const ToastContext = React.createContext(
  (text: string, variation?: string, timeout = 2000) => {}
);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatchToast = useCallback(
    (text: string, type?: string, timeout = 2000) => {
      toast(
        <Toast
          text={text}
          onClose={() => toast.dismiss("toast" + text)}
          variation={type}
        />,
        {
          position: "top-right",
          closeButton: false,
          className: styles["custom-toast"],
          hideProgressBar: true,
          autoClose: timeout,
          toastId: "toast" + text,
        }
      );
    },
    []
  );

  return (
    <ToastContext.Provider value={dispatchToast}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const useDispatchToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastDispatch must be used within a ToastProvider∫");
  }
  return context;
};

export { ToastProvider, useDispatchToast };
