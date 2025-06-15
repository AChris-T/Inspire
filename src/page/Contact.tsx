const Contact = () => {
  return (
    <div className="min-h-screen mt-[100px] bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Book a free 30-minute AI strategy assessment and discover your
            organization's AI potential.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://calendly.com/prince-adenola-adegbesan/30min"
            width="100%"
            height="700"
            title="Schedule a Consultation"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
