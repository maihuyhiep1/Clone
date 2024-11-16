import React from 'react';
import styles from'./style_login.module.css';

const Login = () => {
  return (
    <div className = {styles.login}> 
     <div className={styles.container}>
    <div className={styles.loginSection}>
      <h2 className={styles.title}>Đăng nhập</h2>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>Gmail</label>
        <input type="email" id="email" className={styles.input} placeholder="" />

        <label htmlFor="password" className={styles.label}>Mật khẩu</label>
        <input type="password" id="password" className={styles.input} placeholder="" />

        <button type="submit" className={styles.submitButton}>Đăng nhập</button>
      </form>
      <div className={styles.footer}>
        <a href="#" className={styles.link}>Quên mật khẩu</a>
        <a href="#" className={styles.link}>Đăng kí</a>
      </div>
    </div>
  </div>
  <div className = {styles.logo}> 
    <div className = {styles.image}></div>
    <div className = {styles.text}>HCMUT PRINTER</div>
  </div>
  </div>
   
  );
};

export default Login;