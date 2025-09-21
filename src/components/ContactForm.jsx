import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#f5f9f3] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#174e2b] mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
            <FaMapMarkerAlt className="text-[#174e2b]" size={28}/>
            <div><h4 className="font-semibold">Location</h4><p>123 Churu Road, Sardarsahar</p></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
            <FaPhoneAlt className="text-[#174e2b]" size={28}/>
            <div><h4 className="font-semibold">Phone</h4><p>+91 118 1234567</p></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
            <FaEnvelope className="text-[#174e2b]" size={28}/>
            <div><h4 className="font-semibold">Email</h4><p>info@dadavikrampublicschool.com</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
