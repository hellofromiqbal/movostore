import React from 'react';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import Icon from '../../elements/icon';

const Header = () => {
  return (
    <header className='bg-black flex items-center justify-between p-4 md:px-8 lg:px-16'>
      <Icon fontsize="text-2xl">
        <IconMovie/>
      </Icon>
      <div>
        <input type="text" />
      </div>
    </header>
  )
};

export default Header;