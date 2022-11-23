import React from 'react';
import { BHeader } from './HeaderStyles';
import logo from '../../../public/images/logo_white.png';
import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function BioHeader({ imageUrl }) {
  const router = useRouter();
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
        <Link href={router.asPath} locale={router.locale === 'en-US' && 'fr'}>
          FR
        </Link>
        <Link href={router.asPath} locale={router.locale === 'fr' && 'en-US'}>
          EN
        </Link>
        <i>
          <RiMenu3Fill />
        </i>
      </div>
      {imageUrl && <figure className="_profile">
        <Image src={imageUrl} alt="profile" width={90} height={90} />
      </figure>}
    </BHeader>
  );
}
