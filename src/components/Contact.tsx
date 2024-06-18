import { useState } from "react";
import FancyHeader from "./FancyHeader";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState<any>({});
  const onChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    setFormValues({
      ...formValues,
      access_key: "a0044f69-d8de-4b88-a635-314678b1537e",
    });
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const result = await res.json();
    if (result.success) {
      alert("Form submitted successfully!");
      setFormValues({});
    } else {
      alert(result.message);
    }

    setIsLoading(false);
  };
  return (
    <div id="buy_service" className="p-20">
      <FancyHeader text="BUY SERVICE" />

      <div className="relative flex justify-center items-center bg-sky-700 rounded text-white overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 bg-black/20 backdrop-blur flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <div className="absolute animate-spin bg-white/80 w-16 h-16 rounded-md"></div>
              <div className="absolute rounded-full bg-sky-400 w-6 h-6 animate-bounce"></div>
            </div>
          </div>
        ) : null}

        <div className="p-10 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="client_name"
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              placeholder="Your Name"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your Email:</label>
            <input
              type="text"
              id="name"
              name="client_email"
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              placeholder="Your Email"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Project Title:</label>
            <input
              type="text"
              id="name"
              name="project_title"
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              placeholder="Project Title"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Project Category:</label>
            <select
              name="project_category"
              id=""
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              onChange={onChange}
            >
              <option value="node_js_be">Node JS Backend</option>
              <option value="golang_be">Golang Backend</option>
              <option value="react_js_fe">React Js Frontend</option>
              <option value="next_js_fe">Next Js Frontend</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Details:</label>
            <textarea
              name="details"
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              rows={4}
              onChange={onChange}
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your Budget:</label>
            <input
              type="text"
              name="budget"
              className="bg-sky-600 p-2 rounded border border-sky-800 w-[400px] outline-none"
              placeholder="Your Budget"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Preferred Payment Method:</label>
            <div className="flex justify-start items-center gap-2 w-full">
              <input
                name="payment_method"
                type="radio"
                defaultChecked
                onChange={onChange}
                value="credit_card"
              />
              <span>Credit Card</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                type="radio"
                value="debit_card"
                onChange={onChange}
              />
              <span>Debit Card</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                type="radio"
                value="paypal"
                onChange={onChange}
              />
              <span>Paypal</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                type="radio"
                value="payoneer"
                onChange={onChange}
              />
              <span>Payoneer</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                type="radio"
                value="cash"
                onChange={onChange}
              />
              <span>Cash</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                type="radio"
                value="bank_transfer"
                onChange={onChange}
              />

              <span>Bank Transfer</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                name="payment_method"
                value="other"
                type="radio"
                onChange={onChange}
              />
              <span>Other</span>
            </div>
          </div>

          <button
            className="bg-sky-500 p-2 rounded shadow w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
