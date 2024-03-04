import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  close:()=>void;
}
const Alert = ({ children, close }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        className="btn-close"
        data-bs-dismiss="alert-dismissible" onClick={close}
      ></button>
    </div>
  );
};

export default Alert;
