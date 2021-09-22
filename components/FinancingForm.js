import { useForm, ValidationError } from "@formspree/react";

export default function FinanceForm() {
  const [state, handleSubmit] = useForm("mgerddov");
  if (state.succeeded) {
    return (
      <div className="flex flex-col border-4 rounded border-green-600 py-8 px-6 text-center font-bold text-lg mt-20 mx-4 md:mx-auto max-w-2xl">
        <p>
          One of our specialists from the finance department will contact you
          shortly with whats next for setting up your custom financing.
        </p>
        <div className="border-b-2 border-black w-32 mx-auto mt-0 mb-5">
          &nbsp;
        </div>
        <p>~ 
          Thank you for trusting{" "}
          <span className="font-extrabold">Exotic Auto Collection</span> with all your vehicle needs. ~
        </p>
      </div>
    );
  }

  return (
    <form
      className="relative flex-1 h-full flex flex-col border-2 border-gray-200 rounded-lg px-10 py-5 text-left bg-gray-100 transition m-auto max-w-3xl overflow-y-scroll"
      onSubmit={handleSubmit}
    >
      <div className="uppercase text-xl mb-8 font-normal">
        apply for financing
      </div>
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
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label>Phone*</label>
        <input
          type="text"
          name="phone"
          required
          placeholder="Phone"
          className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md w-full"
        />
      </div>
      {/* submit button */}
      <button
        type="submit"
        disabled={state.submitting}
        className=" mt-8 w-full bg-green-400 text-xl text-green-50 py-2 rounded-lg font-medium uppercase"
      >
        apply
      </button>
    </form>
  );
}
