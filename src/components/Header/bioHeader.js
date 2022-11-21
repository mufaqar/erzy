import React from 'react'
import {BHeader} from './HeaderStyles'
import profile from '../../../public/images/Benefits4.png'
import Image from 'next/image'


export default function BioHeader() {
  return (
    <BHeader>
      Header
      <Image src={profile} alt='profile' width={90} height={90} />
    </BHeader>
  )
}
