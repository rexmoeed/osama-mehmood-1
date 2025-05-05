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
    title: 'Asthetic Club',
    description: 'They understood our vision perfectly and delivered beyond expectations. Highly recommend!',
    image: '/AstheticClub.png',
    link: 'https://www.aestheticclub.com.pk/',
  },
  {
    title: 'Tods&Teens',
    description: 'With Osama Mehmood’s expertise, we saw results that speak for themselves. Highly recommended!',
    image: '/Tods&Teens.png',
    link: 'https://www.todsnteens.com/',
  },
  {
    title: 'Elite Horizon Tourism',
    description: 'Their creativity and professionalism elevated our brand, a true partner in our journey.',
    image: '/EHT.png',
    link: 'https://elitehorizontourism.com/',
  },
  {
    title: 'Blush and Bloom',
    description: 'They transformed our online presence and helped us connect with the right audience.',
    image: '/BB.png',
    link: 'https://www.blushbloom.co.uk/',
  },
  {
    title: 'New Lahore City',
    description: 'Enhanced our online presence with effective digital marketing.',
    image: '/NewLahoreCity.png',
    link: 'https://newlahorecity.com/',
  },

  {
    title: 'Citi Housing (Pvt)',
    description: 'Strategic digital marketing initiatives that helped Citi Housing grow its audience.',
    image: '/CitiHousing.png',
    link: 'https://www.citihousing.pk/',
  },

  {
    title: 'ML Sense',
    description: 'Empowered ML Sense to reach new heights with impactful digital marketing solutions.',
    image: '/MLSense.png',
    link: 'https://www.mlsense.ai/',
  },
  {
    title: 'Home Financing Advisor',
    description: 'Helped to connect with more clients through tailored marketing campaigns.',
    image: '/HomeFinancingAdvisor.png',
    link: '',
  },
  {
    title: 'Peeraan',
    description: 'Elevated our brand presence with impactful digital marketing strategies.',
    image: '/Peeraa.png',
    link: '',
  },
  {
    title: 'Guarantee Estimation LLC',
    description: 'Drove targeted online marketing campaigns to elevate Guarantee Estimation brand recognition.',
    image: '/GT.png',
    link: 'https://guaranteeestimation.com/',
  },
  {
    title: 'Tarpaulins Direct',
    description: 'With their help, we were able to reach a broader audience and enhance customer engagement like never before.',
    image: '/TD.png',
    link: 'https://tarpaulinsdirect.co.uk/',
  },
  {
    title: 'Bake Box',
    description: 'The team’s tailored marketing efforts helped us improve our online visibility and attract new customers.',
    image: '/BB.png',
    link: 'https://www.bakeboxboutique.co.uk/',
  },
  {
    title: 'Med Sites',
    description: 'Their tailored strategies have helped us reach new clients and strengthen our position as a leader in the healthcare sector.',
    image: '/Medsites.png',
    link: 'https://med-sites.com',
  },
  {
    title: 'UBREAK.WEFIXIT',
    description: 'By targeting the right audience with precision, they’ve helped elevate UBREAK.WEFIXIT as a top choice for device repair services.',
    image: '/UWE.png',
    link: 'https://ubreakwefixit.co.uk/',
  },
  
];

const TestimonialSlider = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-4">
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
            <div className='bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 h-full flex flex-col justify-between items-center group hover:shadow-lg duration-300 cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all'>
              
              {/* Image */}
              <div className='w-full aspect-[3/2] relative mb-4'> {/* Changed aspect ratio */}
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
                <p className='max-w-[300px] leading-normal'>{item.description}</p>
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

export default TestimonialSlider;
