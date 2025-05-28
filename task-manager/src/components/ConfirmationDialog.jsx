import { forwardRef, useImperativeHandle, useRef } from "react";

const ConfirmationDialog = forwardRef(function ConfirmationDialog(
  { confirmDeletion },
  ref
) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        return dialogRef.current.showModal();
      },
      close() {
        return dialogRef.current.close();
      },
    };
  });

  function handleConfirm() {
    confirmDeletion(true);
    dialogRef.current.close();
  }

  function handleCancel() {
    dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef} className="p-6 rounded shadow-md">
      <p>Are you sure you want to delete this task?</p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleConfirm}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Yes
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-400 px-4 py-2 rounded"
        >
          No
        </button>
      </div>
    </dialog>
  );
});

export default ConfirmationDialog;
