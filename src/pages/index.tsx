import { Header } from '@/shared/components/ui/header/header';
import { Footer } from '@/shared/components/ui/footer/footer';
import { SEO } from '@/shared/components/seo';

export default function Home() {
  return (
    <>
      <SEO
        title="B2ml Sistemas: Tecnologia desenvolvendo negócios"
        description="Desenvolvemos serviços para alavancar seu negócio, desde plataformas web até bancos digitais e sistemas IOT com IA's"
      />
      <Header />
      <Footer />
    </>
  );
}
