//link
import Link from "next/link";
// icons 
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiTiktokLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/iosamarajput/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/iosamamehmood'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/iosamarajput/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.tiktok.com/@osama_mehmood'} className="hover:text-accent transition-all duration-300">
        <RiTiktokLine />
      </Link>
    </div>
  );
};

export default Socials;
