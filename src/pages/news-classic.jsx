import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsClassicPage from "@components/blogs/news-classic-page";
import HeaderFour from "@layout/headers/headerFour";

export default function NewsClassic() {
  return (
    <Wrapper>
      <SEO pageTitle={"News"} />
      <HeaderFour />
      <Breadcrumb title="News" subTitle="News" />
      <NewsClassicPage />
      <Footer />
    </Wrapper>
  );
}
