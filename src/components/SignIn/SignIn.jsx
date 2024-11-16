import React from 'react';
import styles from './style_signin.module.css';

const SignIn = () => {
  return (
    <div className={styles.SignIn}> 
      <div className={styles.container}>
        <div className={styles.loginSection}>
          <h2 className={styles.title}>Đăng kí</h2>
          <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>Gmail</label>
            <input type="email" id="email" className={styles.input} placeholder="" />

            <label htmlFor="password" className={styles.label}>Mật khẩu</label>
            <input type="password" id="password" className={styles.input} placeholder="" />

            <label htmlFor="confirmPassword" className={styles.label}>Nhập lại mật khẩu</label>
            <input type="password" id="confirmPassword" className={styles.input} placeholder="" />

            <button type="submit" className={styles.submitButton}>Đăng kí</button>
          </form>
        </div>
      </div>
      <div className={styles.logo}> 
        <div className={styles.image}></div>
        <div className={styles.text}>HCMUT PRINTER</div>
      </div>
    </div>
  );
};

export default SignIn;
