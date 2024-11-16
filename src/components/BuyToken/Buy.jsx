import React, { useState } from 'react';
import styles from './style_buyToken.module.css';
import MinusIcon from '@atlaskit/icon/core/minus';
import AddIcon from '@atlaskit/icon/core/add';

const BuyToken = () => {
  const [token, setToken] = useState(99); // Initialize token value as a number

  const handleAdd = () => {
    setToken(prevToken => prevToken + 1);
  };

  const handleMinus = () => {
    setToken(prevToken => (prevToken > 0 ? prevToken - 1 : 0)); // Prevent token from going below 0
  };

  return (
    <div className={styles.buyForm}> 
      <h2 className={styles.title}>Mua token</h2>
      <form className={styles.form}>
        <div className={styles.addOrMinus}>
          <button className={styles.minus} onClick={handleMinus}>
            <MinusIcon />
          </button>
          <div className={styles.token}>{token.toLocaleString()}</div> {/* Format number with commas */}
          <button className={styles.add} onClick={handleAdd}>
            <AddIcon />
          </button>
        </div>
        <div className={styles.button}> 
          <button type="submit" className={styles.submitButton}>Xác nhận</button>
          <button type="button" className={styles.cancelButton}>Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default BuyToken;
