import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TeacherPageMain from "@components/teachers/teacher-page-main";
import Header from "@layout/headers/headerFour";

export default function Teachers() {
  return (
    <Wrapper>
      <SEO pageTitle={"Teachers"} />
      <Header />
      <Breadcrumb title="Teachers" subTitle="Teachers" />
      <TeacherPageMain />
      <Footer />
    </Wrapper>
  );
}
