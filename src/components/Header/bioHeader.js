<<<<<<< HEAD
import React from 'react';
import { BHeader } from './HeaderStyles';
import profile from '../../../public/images/_profile.png';
import logo from '../../../public/images/logo_white.png';
import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
=======
import React from "react";
import { BHeader } from "./HeaderStyles";
import logo from "../../../public/images/smallLogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
>>>>>>> main

export default function BioHeader({imageUrl}) {
  const router = useRouter();
  
  return (
    <BHeader>
      <div>
        <Link href="/">
          <figure className="logo">
<<<<<<< HEAD
            <Image src={logo} alt="profile" width={42} height={28} />
=======
            <Image src={logo} alt="profile" width={160} height={90} />
>>>>>>> main
          </figure>
        </Link>
      </div>
      <div className="_hamburger">
        <Link href={router.asPath} locale={router.locale === "en-US" && "fr"}>
          FR
        </Link>
        <Link href={router.asPath} locale={router.locale === "fr" && "en-US"}>
          EN
        </Link>
        <i><RiMenu3Fill /></i>
      </div>
      <figure className="_profile">
<<<<<<< HEAD
        <Image src={profile} alt="profile" width={90} height={90} />
=======
        <Image src={imageUrl} alt="profile" width={90} height={90} />
>>>>>>> main
      </figure>
    </BHeader>
  );
}
