import { Link } from "react-router-dom";

import { PhotoComments, PhotoDelete } from "../../components";
import styles from "./PhotoContent.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Image } from "../Helper";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;

  const user = useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? photo.idade + " ano" : photo.idade + " anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} single={single} comments={comments} />
    </div>
  );
};

export default PhotoContent;
