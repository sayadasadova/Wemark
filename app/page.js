import { getXSchoolData } from '@/lib/api';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Founder from '@/components/Founder';
import Program from '@/components/Program';
import Marquee from '@/components/Marquee';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default async function Page() {
  const d = await getXSchoolData();
  return (
    <>
      <Banner title={d.banner_title} image={d.banner_image} />
      <main>
        <About title={d.about_title} description={d.about_description} images={d.about_images} />
        <Founder founder={d.founders?.[0]} />
        <Program program={d.programs?.[0]} />
        <Marquee lines={Object.values(d.text_slider || {})} />
        <Faq title={d.faq_title} items={d.xschool_faq} />
      </main>
      <Footer />
    </>
  );
}
