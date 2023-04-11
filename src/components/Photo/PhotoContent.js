import { useContext } from "react";
import { Link } from "react-router-dom";

import { PhotoComments, PhotoDelete } from "../../components";
import { UserContext } from "../../contexts/UserContext";
import { Image } from "../Helper";

import { ReactComponent as Close } from "../../assets/close.svg";
import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data, single, handleOutsideClick }) => {
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
            {!single && (
              <>
                <Close
                  className={styles.closeButton}
                  onClick={handleOutsideClick}
                />
              </>
            )}
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 0 || photo.idade === 1
                ? photo.idade + " ano"
                : photo.idade + " anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} single={single} comments={comments} />
    </div>
  );
};

export default PhotoContent;
