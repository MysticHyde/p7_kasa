import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating, EmptyRating } from "../components/Product/Rating";
import { useFetch } from "../utils/hooks/index";
import { Collapse, EmptyCollapse } from "../components/Collapse";
import { Tags, EmptyTags } from "../components/Tags";
import { EmptyUser, User } from "../components/Product/User";
import { json } from "react-router-dom";
import { SlideShow, EmptySlideShow } from "../components/SlideShow/SlidesShow";

function Product() {
  const param = useParams("id");

  const { fetchData, isFetchLoading, fetchError } = useFetch(`../data.json`);

  const [productRating, setProductRating] = useState(<EmptyRating />);
  const [productTitle, setProductTitle] = useState(<span className='empty'></span>);
  const [productLocation, setProductLocation] = useState(<span className="empty"></span>);
  const [productTags, setProductTags] = useState(<EmptyTags />);
  const [productDescription, setProductDescription] = useState(
    <EmptyCollapse />
  );
  const [productEquipment, setProductEquipment] = useState(<EmptyCollapse />);
  const [productUser, setProductUser] = useState(<EmptyUser />);
  const [slideSHow, setSlideShow] = useState(<EmptySlideShow />);

  useEffect(() => {
    if (!fetchError) {
      if (!isFetchLoading) {
        let data = fetchData.find((el) => el.id === param.id);
        if (data) {
          setProductRating(<Rating stars={data.rating} />);
          setProductTitle(<h1>{data.title}</h1>);
          setProductLocation(data.location);
          setProductDescription(
            <Collapse title="Description">{data.description}</Collapse>
          );
          setProductEquipment(
            <Collapse title="Equipements">{data.equipments}</Collapse>
          );
          setProductTags(<Tags list={data.tags} />);
          setProductUser(<User host={data.host} />);
          setSlideShow(<SlideShow pictures={data.pictures} />);

        } else {
          throw json(
            { message: "Logement introuvable" },
            { status: 404, statusText: "Logement introuvable" }
          );
        }
      }
    } else {
      throw json(
        { message: "Base de données introuvable" },
        { status: 404, statusText: "Base de données introuvable" }
      );
    }
    // eslint-disable-next-line
  }, [fetchData]);

  return (
    <>
      {slideSHow}
      <div className="product">
        <div className="product_infos">
          <div className="product_infos--title">{productTitle}</div>
          <div className="product_infos--location">{productLocation}</div>
          <div className="product_infos--tags">{productTags}</div>
          <div className="product_infos--rating">{productRating}</div>
          <div className="product_infos--user">{productUser}</div>
        </div>
        <div className="product_content">
          <div className="product_content--description">{productDescription}</div>
          <div className="product_content--equipment">{productEquipment}</div>
        </div>
      </div>
    </>
  );
}

export default Product;
