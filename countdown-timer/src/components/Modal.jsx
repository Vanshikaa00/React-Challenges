import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef((props, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    },
    close() {
      if (dialogRef.current.open) {
        dialogRef.current.close();
      }
    },
  }));

  return (
    <dialog
      ref={dialogRef}
      className="p-6 rounded shadow-lg w-80 max-w-full text-center"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="text-xl mb-4">⏰ Timer complete!</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => dialogRef.current.close()}
      >
        Close
      </button>
    </dialog>
  );
});

export default Modal;
