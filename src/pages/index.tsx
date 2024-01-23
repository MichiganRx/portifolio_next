import { Header } from '@/shared/components/ui/header/header';
import { MainSection } from '@/shared/components/home-sections/main';
import { ServicesProvided } from '@/shared/components/home-sections/services-provided';
import { ServicesOffered } from '@/shared/components/home-sections/services-offered';
import { QuartenarySection } from '@/shared/components/home-sections/acting';
import { Footer } from '@/shared/components/ui/footer/footer';
import { SEO } from '@/shared/components/seo';

export default function Home() {
  return (
    <>
      <SEO
        title="Organic Soluções: Tecnologia desenvolvendo negócios"
        description="Desenvolvemos serviços para alavancar seu negócio, desde plataformas web até bancos digitais e sistemas IOT com IA's"
      />
      <Header />
      <MainSection />
      <ServicesProvided />
      <ServicesOffered />
      <QuartenarySection />
      <Footer />
    </>
  );
}
