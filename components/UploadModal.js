import { useState } from "react";
import Modal from "react-modal";
import { useDropzone } from "react-dropzone";

// Bind modal to your appElement
Modal.setAppElement("#__next");

export default function UploadModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open the modal
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      {/* The button that will open modal */}
      <button
        onClick={openModal}
        className="py-1.5 px-4 bg-white text-gray-700 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800"
      >
        Sell Your Auto
      </button>
      {/* Modal itself that will pop open */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="absolute inset-0 bg-white border-gray-100 shadow-2xl m-20 mt-48 mb-48 md:m-48 p-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-gray-500"
        >
          Close X
        </button>
        <div className="flex flex-col h-5/6">
          <h2 className="flex-shrink  text-2xl md:text-4xl font-extrabold mb-7">
            Upload Your Auto To Sale
          </h2>
          {/* Dropzone goes inside here */}
          <UploadDropzone />
        </div>
      </Modal>
    </>
  );
}

function UploadDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} {/* - {file.size} bytes */}
    </li>
  ));

  return (
    <>
      {/* this is the dropzone */}
      <div
        {...getRootProps({
          className:
            "flex-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-100 cursor-pointer hover:bg-green-100 hover:border-green-500 hover:text-green-800 transition mb-5",
        })}
      >
        <input {...getInputProps()} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {/* list all the files */}
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </>
  );
}
