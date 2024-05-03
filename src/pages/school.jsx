import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import SchoolDetails from "@components/schoolDetails/schoolDetails";

export default function School() {
  return (
    <Wrapper>
      <SEO pageTitle={"Our School"} />
      <HeaderFour />
      <Breadcrumb title="Our School" subTitle="Our School" />
      <SchoolDetails />
      <Footer />
    </Wrapper>
  );
}
