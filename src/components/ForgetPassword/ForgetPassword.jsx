import React from 'react';
import styles from'./style_forgetpassword.module.css';

const ForgetPassword = () => {
  return (
    <div className = {styles.forgetpassword}> 
     <div className={styles.container}>
    <div className={styles.loginSection}>
      <h2 className={styles.title}>Nhập mật khẩu mới</h2>
      <form className={styles.form}>
      <label htmlFor="password" className={styles.label}>Mật khẩu mới</label>
        <input type="password" id="password" className={styles.input} placeholder="" />


        <button type="submit" className={styles.submitButton}>Xác nhận</button>
      </form>
     
    </div>
  </div>
  <div className = {styles.logo}> 
    <div className = {styles.image}></div>
    <div className = {styles.text}>HCMUT PRINTER</div>
  </div>
  </div>
   
  );
};

export default ForgetPassword;