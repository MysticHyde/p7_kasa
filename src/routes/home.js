import { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks";
import Banner from "../components/Banner";
import { Card, EmptyCard } from "../components/Card";
import BannerImg from "../images/banner1.png";


function Home() {
  const { isFetchLoading, fetchData, fetchError } = useFetch(`data.json`);

  const [galleryProducts, setGalleryProducts] = useState(null);

  useEffect(() => {
    if (!fetchError) {
      if (!isFetchLoading) {
        let itemList = [];
        Object.keys(fetchData).map((index) =>
          itemList.push(<Card key={'card_' + fetchData[index].id} cardId={fetchData[index].id} cardTitle={fetchData[index].title} cardCover={fetchData[index].cover} />)
        );
        setGalleryProducts(itemList);

      } else {
        let itemList = [];
        for (let index = 0; index < 6; index++) {
          itemList.push(<EmptyCard key={'empty_card_' + index} cardId={index} />);
        }
        setGalleryProducts(itemList);
      }
    } else {
      console.log(fetchError);
    }
  }, [isFetchLoading, fetchData, fetchError]);

  return (
    <div>
      <Banner
        size="sm"
        url={BannerImg}
        text="Chez vous, partout et ailleurs"
      />
      <section className="gallery">
        {galleryProducts}
      </section>
    </div>
  );
}

export default Home;
