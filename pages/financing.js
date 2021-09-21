import { useState } from "react";

export default function FinanceForm() {
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
    fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipcode: "",
      })
    );
  };
  return (
    <form
      className="relative flex-1 h-full flex flex-col border-2 border-gray-200 rounded-lg px-10 py-5 text-left bg-gray-100 transition m-auto max-w-3xl overflow-y-scroll"
      onSubmit={formSubmit}
    >
      <div className='uppercase text-xl mb-8 font-normal'>apply for financing</div>
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
  );
}
