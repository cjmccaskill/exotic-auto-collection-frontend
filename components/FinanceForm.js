import { useState } from "react";
import Modal from "react-modal";

// Bind modal to your appElement
Modal.setAppElement("#__next");

export default function FinanceForm() {
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
        className="py-1 px-4 text-gray-200 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500"
      >
        Financing
      </button>

      {/* Modal itself that will pop open */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Finance Form Modal"
        className="absolute inset-0 md:top-20 md:right-20 md:bottom-20 md:left-20 lg:top-32 lg:right-52 lg:bottom-44 lg:left-52 bg-white border-gray-100 shadow-2xl p-10 rounded-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-gray-500"
        >
          Close X
        </button>

        <div className="flex flex-col h-full">
          <h2 className="flex-shrink text-xl md:text-2xl font-bold mb-7 uppercase text-gray-700">
            apply for financing
          </h2>
          <UploadForm closeMe={closeModal} />
        </div>
      </Modal>
    </>
  );
}

function UploadForm(props) {
  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipcode: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/{your-form-endpoint}", {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery(
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zipcode: "",
        },
        props.closeMe()
      )
    );
  };
  return (
      <form
        className="relative flex-1 h-full flex flex-col border-2 border-gray-200 rounded-lg px-10 py-5 text-left bg-gray-100 transition m-auto sm:mx-20 xl:mx-44 overflow-y-scroll"
        onSubmit={formSubmit}
      >
        <div className="text-lg font-semibold border-b-2 border-gray-300 mb-4">
          Let&apos;s get started{" "}
          <span className="text-xs font-extralight">* Required Fields</span>
        </div>
        <div>
          <label>First Name*</label>
          <input
            type="text"
            name="name"
            required
            placeholder="First Name"
            className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Last Name*</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Last Name"
            className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            required
            placeholder="Phone"
            className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Zip Code*</label>
          <input
            type="text"
            name="zipcode"
            required
            placeholder="Zip Code"
            className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        {/* submit button */}
        <button
          type="submit"
          className=" mt-8 w-full bg-green-400 text-xl text-green-50 py-2 rounded-lg font-medium uppercase"
        >
          apply
        </button>
      </form>
    // </div>
  );
}
