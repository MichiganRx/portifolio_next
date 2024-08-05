import { Header } from '@/shared/components/ui/header/header';
import { MainSection } from '@/shared/components/home-sections/main';
import { AboutMe } from '@/shared/components/home-sections/about-me';
import { Certifications } from '@/shared/components/home-sections/certifications';
import { Footer } from '@/shared/components/ui/footer/footer';
import { SEO } from '@/shared/components/seo';
import { Projects } from '@/shared/components/home-sections/projects';

export default function Home() {
  return (
    <>
      <SEO
        title="Amanda Rodrigues - Portifólio"
        description="Desenvolvedora Front-End"
      />
      <Header />
      <MainSection />
      <AboutMe />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}
