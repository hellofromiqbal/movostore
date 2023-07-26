import React from 'react';

import {
  BsTiktok as IconTiktok,
  BsInstagram as IconInstagram,
  BsTwitter as IconTwitter,
  BsYoutube as IconYoutube,
  BsFacebook as IconFacebook
} from 'react-icons/bs';

const Footer = () => {
  const socialMedias = [
    { id: 1, icon: <IconTiktok/>, link: "https://www.tiktok.com" },
    { id: 2, icon: <IconInstagram/>, link: "https://www.instagram.com" },
    { id: 3, icon: <IconTwitter/>, link: "https://www.twitter.com" },
    { id: 4, icon: <IconYoutube/>, link: "https://www.youtube.com" },
    { id: 5, icon: <IconFacebook/>, link: "https://www.facebook.com" },
  ];

  const footerLinks = [
    { id: 1, text: "MovostoreApp", link: "#" },
    { id: 2, text: "Help & FAQ", link: "#" },
    { id: 3, text: "Site Index", link: "#" },
    { id: 4, text: "Advertising", link: "#" },
    { id: 5, text: "Job Vacancy", link: "#" },
    { id: 6, text: "Privacy Policy", link: "#" },
    { id: 7, text: "Box Office", link: "#" },
    { id: 8, text: "Press Room", link: "#" },
  ]

  return (
    <footer className='flex flex-col gap-10 bg-black py-10'>
      <ul className='flex gap-6 justify-center'>
        {socialMedias.map((socialMedia) => (
          <li key={socialMedia.id} className='text-white text-xl'><a href={socialMedia.link}>{socialMedia.icon}</a></li>
        ))}
      </ul>
      <ul className='w-3/4 place-self-center text-white grid md:grid-cols-4 gap-2 md:gap-1 place-items-center'>
        {footerLinks.map((footerLink) => (
          <li key={footerLink.id} className='text-xs md:text-sm'><a href={footerLink.link}>{footerLink.text}</a></li>
        ))}
      </ul>
      <small className='text-white place-self-center opacity-50'>&copy; 1990-2023 by Movostore.com, Inc.</small>
    </footer>
  )
};

export default Footer;