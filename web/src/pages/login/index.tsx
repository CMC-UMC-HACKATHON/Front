import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '', // 아이디
    password: '', // 비밀번호
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // 여기에 로그인 처리 로직을 추가하세요.
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="id">
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className={styles.input}
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디"
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />
        </div>
        <button type="submit" className={styles.button}>
          Log in as consumer
        </button>
      </form>
    </div>
  );
};

export default Login;
