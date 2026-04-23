import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { logPageView, getPageViewCount } from '@/db/queries';

export const dynamic = 'force-dynamic';

export default async function Home() {
  await logPageView('/');
  const viewCount = await getPageViewCount('/');

  return (
    <main className="bg-[#030508]">
      <HeroSection viewCount={viewCount} />
      <CountdownSection />
      <InfoSection />
      <Footer />
    </main>
  );
}
