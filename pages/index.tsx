import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
interface PropType {
  exploreData: [
    {
      img: String;
      location: String;
      distance: String;
    }
  ];
}
interface PropType {
  cardsData: [
    {
      img: String;
      title: String;
    }
  ];
}
const Home: NextPage<PropType> = ({ exploreData, cardsData }) => {
  return (
    <>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            {/* API Endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item, index) => (
                <SmallCard
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3-ml-3">
              {cardsData?.map((item) => {
                return <MediumCard img={item.img} title={item.title} />;
              })}
            </div>
          </section>
          {/* https://links.papareact.com/4cj */}
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  //actual call: https://links.papareact.com/pyp open in browser copy the url and use it npm i tailwind-scollbar-hide//to hide scrollbar
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  //actual call: https://links.papareact.com/zp1 open in browser copy the url and use it
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );
  return {
    props: { exploreData, cardsData }, // will be passed to the page component as props
  };
}
export default Home;
