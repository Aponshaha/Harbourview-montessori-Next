import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FaqPageMain from "@components/faqs/faq-page-main";
import ProgramPromotion from "@components/promotions/program-promotion";
import HeaderFour from "@layout/headers/headerFour";

export default function FAQ() {
  return (
    <Wrapper>
      <SEO pageTitle={"FAQ"} />
      <HeaderFour />
      <Breadcrumb title="FAQ" subTitle="FAQ" />
      <FaqPageMain />
      <ProgramPromotion />
      <Footer />
    </Wrapper>
  );
}
