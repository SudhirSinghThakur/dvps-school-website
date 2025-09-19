import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const contactTiles = [
    {
      title: "Address",
      desc: (
        <>
          Dada Vikram Public School,<br />
          Chhindwara Road Near Petrol Pump,<br />
          Madhya Pradesh 480115
        </>
      ),
      icon: <FaMapMarkerAlt className="text-3xl text-accent mb-3" />,
    },
    {
      title: "Phone",
      desc: "+91-8982884717",
      icon: <FaPhoneAlt className="text-3xl text-accent mb-3" />,
    },
    {
      title: "Email",
      desc: "dvpssamaswada@gmail.com",
      icon: <FaEnvelope className="text-3xl text-accent mb-3" />,
    },
    {
      title: "Follow Us",
      desc: (
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/DVPSSamaswara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/dvpssamaswara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@dvpssamaswara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaYoutube />
          </a>
        </div>
      ),
      icon: null,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-heading text-primary mb-10">
          📞 Contact <span className="text-accent">Us</span>
        </h2>

        {/* Small Contact Tiles in 2 Rows */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactTiles.map((tile, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:border-accent transition transform hover:-translate-y-2"
            >
              {tile.icon && <div className="flex justify-center">{tile.icon}</div>}
              <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition">
                {tile.title}
              </h3>
              <div className="text-gray-600 text-base">{tile.desc}</div>
            </div>
          ))}
        </div>

        {/* Map Tile */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.0629650293936!2d79.3246240750616!3d22.047186779869364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd54d0bfc69b0df%3A0xee350eac485ed8a2!2sDada%20Vikram%20Public%20School%20-%20DVPS%20Samaswara!5e0!3m2!1sen!2sin!4v1758275223386!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DVPS Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
