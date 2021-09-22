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
        <p>
          ~ Thank you for trusting
          <span className="font-extrabold">Exotic Auto Collection</span> with
          all your vehicle needs. ~
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
        Let&apos;s get started
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
        <label>Phone</label>
        <input
          type="text"
          name="phone"
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
      <legend>Locale</legend>
      <div className="flex justify-between flex-wrap mt-2 sm:mt-0">
        <input type="text" name="city" placeholder="City" className="w-full sm:w-4/6 form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md"/>
        <select name="state" className="form-control cursor-pointer pl-2 mt-2 mb-2 text-sm h-8 rounded-md">
          <option value="Select" selected="" disabled="">
            State
          </option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <label>Note</label>
      <textarea
        rows="4"
        name="note"
        id="note"
        placeholder="Include any additional information"
        className="form-control cursor-pointer pl-2 mt-2 pt-1 mb-2 text-sm rounded-md w-full"
      ></textarea>
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
