const FormSection = () => {
  return (
    <div className="">
      <div className="mb-8 text-4xl font-semibold uppercase">Get In Touch</div>

      <div className="me-12 space-y-4 rounded-lg p-8 shadow-lg">
        <input
          type="text"
          placeholder="Full Name"
          className="outline-earth-dark w-full border border-gray-300 p-4"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          inputMode="tel"
          className="outline-earth-dark w-full border border-gray-300 p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="outline-earth-dark w-full border border-gray-300 p-4"
        />

        <textarea
          placeholder="Enter your Message"
          className="outline-earth-dark w-full border border-gray-300 p-4"></textarea>

        <button className="bg-earth-light hover:bg-earth-dark cursor-pointer rounded-sm px-8 py-2 text-xl text-white uppercase">
          Send Now
        </button>
      </div>
    </div>
  );
};

export default FormSection;
