import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";

import StudentDetails from "@components/schoolDetails/studentDetails";
import AdmissionDetails from "@components/admission/admission-details";

export default function School() {
  return (
    <Wrapper>
      <SEO pageTitle={"Admission"} />
      <HeaderFour />
      <Breadcrumb title="Admission" subTitle="Session-2023~2024" />
      {/* <ShopPageMain /> */}
      <AdmissionDetails />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
