import React, { useState } from 'react';
import styles from './style_navbar.module.css';
import Avatar from '@atlaskit/avatar';
import WalletIcon from '@atlaskit/icon-lab/core/wallet';

const Navbar = () => {
  // State for tracking active link
  const [activeLink, setActiveLink] = useState('#print');

  return (
    <header className={styles.navbar}>
      <div className={styles.avatar}>
        <Avatar
          appearance="circle"
          src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
          size="large"
          name="Scott Farquhar"
        />
      </div>
      <div className={styles.name}>Mai Huy Hiệp</div>
      <div className={styles.wallet}>
        <WalletIcon color="white" />
      </div>
      <div className={styles.token}>100.000</div>
      <div   className={styles.menu}>
        <a
          href="#print"
          className={`${styles.menuItem} ${activeLink === '#print' ? styles.active : ''}`}
          onClick={() => setActiveLink('#print')}
        >
          IN TÀI LIỆU
        </a>
        <a
          href="#history"
          className={`${styles.menuItem} ${activeLink === '#history' ? styles.active : ''}`}
          onClick={() => setActiveLink('#history')}
        >
          LỊCH SỬ
        </a>
        <a
          href="#support"
          className={`${styles.menuItem} ${activeLink === '#support' ? styles.active : ''}`}
          onClick={() => setActiveLink('#support')}
        >
          HỖ TRỢ
        </a>
        <a
          href="#buyToken"
          className={`${styles.menuItem} ${activeLink === '#buyToken' ? styles.active : ''}`}
          onClick={() => setActiveLink('#buyToken')}
        >
          MUA TOKEN
        </a>
      </div> 
      <button className={styles.button}>
            <div className={styles.buttonLabel}>ĐĂNG XUẤT</div>
          </button>
    </header>
  );
};

export default Navbar;
