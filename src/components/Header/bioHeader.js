import React from 'react';
import { BHeader } from './HeaderStyles';
import profile from '../../../public/images/_profile.png';
import logo from '../../../public/images/logo_white.png';
import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export default function BioHeader() {
  return (
    <BHeader>
      <div>
        <Link href="/">
          <figure className="logo">
            <Image src={logo} alt="profile" width={42} height={28} />
          </figure>
        </Link>
      </div>
      <div className="_hamburger">
        <RiMenu3Fill />
      </div>
      <figure className="_profile">
        <Image src={profile} alt="profile" width={90} height={90} />
      </figure>
    </BHeader>
  );
}
