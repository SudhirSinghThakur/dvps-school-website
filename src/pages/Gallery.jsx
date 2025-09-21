import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";


const imgs = [
  {
    caption: "School Building",
    photos: ["/gallery/dvps6.jpg", "/gallery/dvps11.jpg", "/gallery/dvps8.jpg"],
  },
  {
    caption: "Students in Class",
    photos: ["/gallery/dvps1.jpg", "/gallery/dvps7.jpg", "/gallery/dvps9.jpg", "/gallery/dvps10.jpg"],
  },
  {
    caption: "Sports Activities",
    photos: ["/gallery/dvps3.jpg", "/gallery/dvps2.jpg", "/gallery/dvps5.jpg"],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#174e2b] mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imgs.map((card, i) => (
            <figure
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // hover pe auto scroll
                }}
                className="w-full aspect-[4/3]"
              >
                {card.photos.map((src, j) => (
                  <SwiperSlide key={j}>
                    <img
                      src={src}
                      alt={card.caption}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <figcaption className="p-2 text-gray-600 text-center">
                {card.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
