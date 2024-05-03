import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import AboutMariaMontessori from "@components/abouts/MariaMontessori";

export default function MariaMontessori() {
  return (
    <Wrapper>
      <SEO pageTitle={"News"} />
      <HeaderFour />
      <Breadcrumb title="About" subTitle="MariaMontessori" />
      <AboutMariaMontessori />
      <Footer />
    </Wrapper>
  );
}
