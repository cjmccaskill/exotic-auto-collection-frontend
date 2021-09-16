import { useState, useEffect } from "react";
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
        className="py-1 px-4 bg-white text-gray-700 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500"
      >
        Sell Your Auto
      </button>

      {/* Modal itself that will pop open */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Your Auto Modal"
        className="absolute inset-0 top-20 right-20 bottom-20 left-20 bg-white border-gray-100 shadow-2xl p-10 rounded-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-gray-500"
        >
          Close X
        </button>

        <div className="flex flex-col h-full">
          <h2 className="flex-shrink text-2xl md:text-4xl font-extrabold mb-7">
            Upload Your Vehicle To Sale
          </h2>
          {/* Dropzone goes inside here */}
          <UploadDropzone closeMe={closeModal} />
        </div>
      </Modal>
    </>
  );
}

function UploadDropzone(props) {
  const [files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop(acceptedFiles) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("data", "{}");
    formData.append("files.file", files[0], files[0].name);
    fetch("http://localhost:1337/autos", {
      method: "POST",
      body: formData,
    }).then(() => {
      props.closeMe();
    });
  }

  return (
    <form className="h-full flex flex-col" onSubmit={handleSubmit}>
      {/* this is the dropzone */}
      <div
        {...getRootProps({
          className:
            "relative flex-1 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg px-10 py-5 text-center bg-gray-100 cursor-pointer hover:bg-green-100 hover:border-green-500 hover:text-green-800 transition mb-5",
        })}
      >
        <input {...getInputProps()} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Drag 'n' drop some files here, or click to select files</p>
        <div className="absolute bottom-1">
          {files.map((file) => (
            <img
              src={file.preview}
              key={file.id}
              alt=""
              className="w-48 md:w-72 rounded-lg shadow-2xl"
            />
          ))}
        </div>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className=" mt-8 w-full bg-green-400 text-xl text-green-50 py-2 rounded-lg font-medium"
      >
        Upload
      </button>
    </form>
  );
}
