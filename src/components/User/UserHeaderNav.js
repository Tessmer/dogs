import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useMedia } from "../../hooks";
import { UserContext } from "../../contexts/UserContext";
import { ReactComponent as MyPictures } from "../../assets/feed.svg";
import { ReactComponent as Statistics } from "../../assets/estatisticas.svg";
import { ReactComponent as AddPicture } from "../../assets/adicionar.svg";
import { ReactComponent as LogOut } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPictures />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/account/statistics">
          <Statistics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPicture />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <LogOut />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
