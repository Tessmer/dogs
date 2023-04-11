import { useEffect } from "react";
import { PHOTO_GET } from "../../api/api";
import { useFetch } from "../../hooks";
import { Error, Loading } from "../Helper";
import { PhotoContent } from "../../components";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && (
        <PhotoContent data={data} handleOutsideClick={handleOutsideClick} />
      )}
    </div>
  );
};

export default FeedModal;
