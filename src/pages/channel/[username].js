import React from 'react';
import BioHeader from '../../components/Header/bioHeader';
import Intro from '../../components/Intro/intro';

// TRY THIS TO TEST
// EN http://localhost:3000/channel/jjtechandtrick
// RU http://localhost:3000/channel/thenode
// Private channel: http://localhost:3000/channel/-1001675719520
// !!! TODO Without Avatar: http://localhost:3000/channel/LeaksArenaOrg

export default function Channel({ channel }) {
  const defaultPost = channel.channelPost.find( post => post.default)

  const profileData = {
    imageUrl: channel.avatar,
    title: channel.title,
    username: channel.username,
    poster: defaultPost.photo,
    content: defaultPost.description,
    status: {
      sub: channel.totalSubscribers.current,
      star: channel.rating.totalRating,
      visibility: channel.type,
    },
    inviteLink: channel.inviteLink || 'https://app.erzy.net/login',
    language: channel.language
  };

  return (
    <>
      <BioHeader imageUrl={profileData.imageUrl} />
      <Intro profileData={profileData} />
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://api.erzy.net/channel/activeChannels')
  const channels = await res.json()

  // Get the paths we want to pre-render
  const paths = channels.map((channel) => ({
    params: { username: channel.username || channel.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch('https://api.erzy.net/channel/activeChannels')
  const channels = await res.json()
  const channel = channels.find(channel => {
    if (channel.username === params.username || channel.id === params.username) {
      console.log(JSON.stringify(channel,null,2));
      return channel
    }
  })
  return { props: { channel } }
}