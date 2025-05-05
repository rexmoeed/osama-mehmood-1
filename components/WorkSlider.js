// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// icons
import { RxArrowTopRight } from "react-icons/rx";

// correct import
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    title: 'Aesthetic Club',
    description: '',
    image: '/AstheticClub.png',
    link: 'https://www.aestheticclub.com.pk/',
  },
  {
    title: 'Tods & Teens',
    description: '',
    image: '/Tods&Teens.png',
    link: 'https://www.todsnteens.com/',
  },
  {
    title: 'New Lahore City',
    description: '',
    image: '/NewLahoreCity.png',
    link: 'https://newlahorecity.com/',
  },
  {
    title: 'Elite Horizon Tourism',
    description: '',
    image: '/EHT.png',
    link: 'https://elitehorizontourism.com/',
  },
  {
    title: 'Blush & Bloom',
    description: '',
    image: '/Blush&Bloom.png',
    link: 'https://www.blushbloom.co.uk/',
  },
  {
    title: 'Citi Housing (Pvt)',
    description: '',
    image: '/CitiHousing.png',
    link: 'https://www.citihousing.pk/',
  },
  {
    title: 'ML Sense',
    description: '',
    image: '/MLSense.png',
    link: 'https://www.mlsense.ai/',
  },
  {
    title: 'Home Financing Advisor',
    description: '',
    image: '/HomeFinancingAdvisor.png',
    link: '',
  },
  {
    title: 'Peeraan',
    description: '',
    image: '/Peeraa.png',
    link: '',
  },
  {
    title: 'Guarantee Estimation LLC',
    description: '',
    image: '/GT.png',
    link: 'https://guaranteeestimation.com/',
  },
  {
    title: 'Aesthetics by Dr. Waris Anwar',
    description: '',
    image: '/DR.png',
    link: 'https://aesthetics.com.pk/',
  },
  {
    title: 'Tarpaulins Direct',
    description: '',
    image: '/TD.png',
    link: 'https://tarpaulinsdirect.co.uk/',
  },
  {
    title: 'UBREAK.WEFIXIT',
    description: '',
    image: '/UWE.png',
    link: 'https://ubreakwefixit.co.uk/',
  },
  {
    title: 'Bake Box',
    description: '',
    image: '/BB.png',
    link: 'https://www.bakeboxboutique.co.uk/',
  },
  {
    title: 'Med Sites',
    description: '',
    image: '/Medsites.png',
    link: 'https://med-sites.com/',
  },
];

const WorkSlider = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
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
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='py-4'
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index} className="flex-shrink-0 w-auto">
            <div className='bg-[rgba(65,47,123,0.15)] rounded-lg px-4 py-6 h-full flex flex-col items-center hover:shadow-lg duration-300 cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all'>

              
              {/* Image */}
              <div className='w-full h-[150px] aspect-square relative mb-4'>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className='rounded-lg object-cover'
                />
              </div>

              {/* Title & description */}
              <div className='mb-4 text-center'>
                <h3 className='text-xl font-semibold mb-2'>
                  <a 
                    href={item.link || '#'} 
                    target={item.link ? '_blank' : '_self'} 
                    rel="noopener noreferrer" 
                    className={`text-${item.link ? 'blue' : 'gray'}-600 hover:underline`}
                  >
                    {item.title}
                  </a>
                </h3>
                <p className='max-w-[200px] leading-normal'>{item.description}</p>
              </div>

              {/* Arrow */}
              <div className='text-3xl opacity-0 group-hover:opacity-100 text-white transition-all duration-300'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
