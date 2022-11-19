import { Hero } from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Benefits } from '../components/Benefits/Benefits';
import { Features } from '../components/Features/Features';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { About } from '../components/About/About';
import { TryErzy } from '../components/TryErzy/TryErzy';
import { Questions } from '../components/Questions/Questions';

export default function Channel() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <About />
      <TryErzy />
      <Questions />
    </Layout>
  );
}
