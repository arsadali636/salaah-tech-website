import React from "react";

const services = [
  "AI Development Services",
  "Mobile App Development Services",
  "Web Development Services",
  "ERP Software Development",
  "Design Services",
  "IoT Application Services",
  "Digital Marketing Services",
  "Automated Testing",
  "Managed Cloud Services",
  "Web Development Frameworks",
];

function ServicesCatalog() {
  return (
    <section className="container mt-10 mb-20">
      <div className="text-center max-w-screen-md m-auto mb-10">
        <h2 className="text-3xl font-bold mb-2 text-primary">More Services</h2>
        <p>
          Explore our complete range of services to build, scale, and optimize
          your business with reliable technology solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service}
            className="border border-gray-200 rounded-xl px-5 py-4 bg-white shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-lg font-semibold text-[#132339]">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesCatalog;
