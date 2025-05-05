// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// correct import
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Custom Boxes Canada',
    description: 'Get premium custom packaging solutions with Custom Boxes Canada. We offer eco-friendly, luxury, and bulk packaging options to enhance your brand.',
    link: 'https://www.customboxescanada.ca/', // Website link
  },
  {
    icon: <RxPencil2 />,
    title: 'The Vertex Institute',
    description: 'Join The Vertex Institute and gain expertise in digital marketing, video editing, photography, and Python programming with hands-on training.',
    link: 'https://www.thevertexinstitute.com/', // Website link
  },
  {
    icon: <RxDesktop />,
    title: 'The Vertex Technologies',
    description: 'The Vertex Technologies is an agency offering professional services in digital marketing, web development, branding, business development, graphic design, video editing, and product photoshoot.',
    link: '', // Website link
  },
  {
    icon: <RxReader />,
    title: 'Enliven Skin Care',
    description: 'Discover Enliven Skincare’s range of natural and scientifically formulated skincare products in Pakistan. Nourish, protect, and enhance your skin.',
    link: 'https://enlivenskincare.pk/', // Website link
  },
  {
    icon: <RxRocket />,
    title: 'Custom Boxes America (Coming Soon!)',
    description: 'Custom Boxes America will provide premium custom packaging solutions for businesses across the USA. Stay tuned for our official launch!',
    link: '', // Website link
  },
];

const ServiceSlider = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='py-4'
      >
        {
          serviceData.map((item, index) => (
            <SwiperSlide key={index} className="flex-shrink-0 w-auto">
              <div className='bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 h-full flex flex-col justify-between items-center group hover:shadow-lg  duration-300 cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all '>
                {/* icon */}
                <div className='text-4xl mb-4 text-accent'>{item.icon}</div>

                {/* title & desc */}
                <div className='mb-4 text-center'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {/* Title with clickable link */}
                    <a 
                      href={item.link} 
                      target={item.link ? '_blank' : '_self'} 
                      rel="noopener noreferrer" 
                      className={`text-${item.link ? 'blue' : 'gray'}-600 hover:underline`}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>

                {/* arrow */}
                <div className='text-3xl opacity-0 group-hover:opacity-100 text-white transition-all duration-300'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300 '/>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
