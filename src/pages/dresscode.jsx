import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import DresscodeDetails from "@components/dresscode/dresscode-details";

export default function Dresscode() {
  return (
    <Wrapper>
      <SEO pageTitle={"Dress Code"} />
      <HeaderFour />
      <Breadcrumb title="Dress Code" subTitle="" />
      {/* <ShopPageMain /> */}
      <DresscodeDetails />
      <Footer />
    </Wrapper>
  );
}
