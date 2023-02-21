import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/dist/client/router';
import Map from '../components/Map';
function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noofGuests } = router.query;
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                lang={item.lang}
                long={item.long}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] sticky top-[76px] h-[calc(100vh-76px)]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  //https://links.papareact.com/isz
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
