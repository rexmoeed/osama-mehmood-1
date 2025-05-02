/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'; // ✅ Fixed import
import 'swiper/css';

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Digital Marketing',
        description: 'Facebook and Instagram Ads, Google Ads, SEO, YouTube Automation, Email Marketing, Lead Generation, Copywriting, Social Media Marketing, Demand Generation Campaigns.',
      },
      {
        title: 'E-Commerce Skills',
        description: 'Shopify Store Setup & Development, Product Listing Optimization, E-commerce SEO, Facebook Ads for E-commerce, Shopify Store Migrations, Conversion Rate Optimization, Upselling and Cross-selling Strategies',
      },
      {
        title: 'Technical Skills',
        description: 'WordPress Website Development, Landing Page Creation, Basic HTML/CSS Knowledge, CRM Management',
      },
      {
        title: 'Creative Skills',
        description: 'Graphic Designing, Video Editing for Social Media, Branding Strategy.',
      },
      {
        title: 'Business Skills',
        description: 'Business Development & Strategy, Client Acquisition, Team Management and Leadership, Project Management, Training & Coaching.',
      },
      {
        title: 'Bonus Soft Skills',
        description: 'Strategic Thinking, Problem Solving, Communication & Public Speaking, Creativity & Innovation, Time Management, Client Relationship Building.',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counters
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  const firstHalf = aboutData[index].info.slice(0, 3);
  const secondHalf = aboutData[index].info.slice(3);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[480px]"
      >
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2'
          >
            Let's shape <span className='text-accent '>the digital business</span> together!
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I'm Osama Mehmood, a digital marketing expert, entrepreneur, and trainer with 9+ years of experience.
            I’ve launched startups, mentored entrepreneurs, and now lead ventures in e-commerce, education, and skincare.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Experience</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={999} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied Clients</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Awards</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent pr-2'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start'>
            {/* Swiper 1 */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full"
            >
              {firstHalf.map((item, itemIndex) => (
                <SwiperSlide key={itemIndex}>
                  <div className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    <span className='text-white'>{item.title}</span>
                    {item.description && <div className='text-white/70 text-sm'>– {item.description}</div>}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper 2 */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full"
            >
              {secondHalf.map((item, itemIndex) => (
                <SwiperSlide key={itemIndex}>
                  <div className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    <span className='text-white'>{item.title}</span>
                    {item.description && <div className='text-white/70 text-sm'>– {item.description}</div>}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
