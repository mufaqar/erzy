import React from 'react';
import BioHeader from '../components/Header/bioHeader';
import Intro from '../components/Intro/intro';
import profile from '../../public/images/car.jpg';
import poster from '../../public/images/car.jpg';

const profileData = {
  imageUrl: { profile },
  title: 'Дагестанские авиалинии с Махачем',
  username: 'makhach_tyagach',
  poster: { poster },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus mauris quis purus mattis malesuada. Sed a mollis quam. Nam quis eros euismod nulla accumsan tincidunt eu ut mi. Vivamus imperdiet arcu ac ullamcorper ornare. Nullam at ligula tincidunt, feugiat augue quis, sagittis nisi.',
  status: {
    sub: '2130 Subs',
    star: '9.3',
    visibility: 'Public',
  },
};

export default function Bio() {
  return (
    <>
      <BioHeader imageUrl={profileData.imageUrl.profile.src} />
      <Intro profileData={profileData} />
    </>
  );
}
