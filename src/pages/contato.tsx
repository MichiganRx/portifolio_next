import { Header } from '@/shared/components/ui/header/header';
import { MainSection } from '@/shared/components/contact/main';
import { SEO } from '@/shared/components/seo';

const Contact = () => {
  return (
    <>
      <SEO
        title="Organic Soluções - Entre em contato"
        description="Venha desenvolver seu negócio com a gente."
      />
      <Header />
      <MainSection />
    </>
  );
};

export default Contact;
