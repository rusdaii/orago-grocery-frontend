import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/parts/Banner'));
const Branding = dynamic(() => import('@/components/parts/Branding'));
const TopCategoryList = dynamic(
  () => import('@/components/parts/Category/TopCategoryList')
);
const CtaPromo = dynamic(() => import('@/components/parts/CtaPromo'));
const CompanyFeature = dynamic(
  () => import('@/components/parts/Feature/CompanyFeature')
);
const Feature = dynamic(() => import('@/components/parts/Feature/Feature'));
const HeroSlider = dynamic(() => import('@/components/parts/HeroSlider'));
const PartnershipCompany = dynamic(
  () => import('@/components/parts/PartnershipCompany/PartnershipCompany')
);
const CarouselProduct = dynamic(
  () => import('@/components/parts/Product/CarouselProduct')
);
const HighlightProduct = dynamic(
  () => import('@/components/parts/Product/HighlightProduct')
);
const Testimonial = dynamic(
  () => import('@/components/parts/Testimonial/Testimonial')
);
import { getCategories } from '@/repositories/categories';
import { getPopularPorducts } from '@/repositories/products';
import { getSlider } from '@/repositories/slider';

const campaignData = [
  {
    title: '100% Organic',
    campaign: 'Fruits & Vegetables',
    price: 10000,
    cta: '/products',
    imageUrl: 'bg-[url("/images/banner.webp")]',
  },
  {
    title: 'Sale off the week',
    campaign: 'Sales of the Year',
    cta: '/products',
    duration: 5,
    imageUrl: 'bg-[url("/images/banner-2.webp")]',
  },
];

const Home = async () => {
  const [sliderList, categoryList, popularProductList] = await Promise.all([
    getSlider(),
    getCategories(),
    getPopularPorducts(),
  ]);

  const bestRatingProductList = popularProductList
    .filter((item) => {
      return item.attributes.averageRating > 4;
    })
    .slice(0, 3);

  const hotDealsProductList = popularProductList
    .filter((item) => {
      const higherDiscount =
        ((item.attributes.mrp - item.attributes.sellingPrice) /
          item.attributes.mrp) *
        100;

      return higherDiscount <= 50;
    })
    .sort((low, high) => high.attributes.mrp - low.attributes.mrp)
    .slice(0, 3);

  const bestSellerProductList = popularProductList
    .filter((item) => item.attributes.totalSelling > 50)
    .slice(0, 3);

  return (
    <>
      <HeroSlider sliderList={sliderList.data} />

      <Feature />

      <CarouselProduct
        productList={popularProductList}
        title="Popular Products"
      />

      <section className="flex flex-col gap-8 md:gap-12 lg:py-5 mt-16 bg-gradient-to-b from-green-gray-50/40 to-white">
        <TopCategoryList categoryList={categoryList.data} />

        <Branding />
      </section>

      <CompanyFeature />

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        {campaignData.map((item, index) => (
          <Banner
            key={index}
            title={item.title}
            campaign={item.campaign}
            imageurl={item.imageUrl}
            price={item.price}
            cta={item.cta}
            campaignDuration={item.duration}
          />
        ))}
      </section>

      <CarouselProduct
        productList={popularProductList}
        title="Best Selling Products"
      />

      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-10">
        <HighlightProduct title="Hot Deals" productList={hotDealsProductList} />

        <HighlightProduct
          title="Top Rated Products"
          productList={bestRatingProductList}
        />
        <HighlightProduct
          title="Best Seller"
          productList={bestSellerProductList}
        />
        <CtaPromo />
      </section>

      <Testimonial />

      <PartnershipCompany />
    </>
  );
};

export default Home;
