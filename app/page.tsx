import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Start',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    } /*
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },*/,
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/Haberdasher.png`,
    aspectRatio: '1:1',
  } /*
  input: {
    text: 'Tell me a boat story',
  },*/,
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'doc-omen-62116mkh8-0x-omens-projects.vercel.app',
  description: 'Hello World for Omen',
  openGraph: {
    title: 'doc-omen-62116mkh8-0x-omens-projects.vercel.app',
    description: 'Hello World for Omen',
    images: [`${NEXT_PUBLIC_URL}/woofy.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>doc-omen-62116mkh8-0x-omens-projects.vercel.app</h1>
    </>
  );
}
