import React, { useState } from 'react';
import styles from '../register/Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    id: '', // 아이디
    password: '',
    passwordConfirm: '', // 비밀번호 확인
    username: '', // 닉네임
    gender: '', // 성별
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.p}>회원정보를 입력해주세요</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles['form-group']}>
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
        <div className={styles['form-group']}>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className={styles.input}
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            value={formData.username}
            onChange={handleChange}
            placeholder="닉네임"
          />
        </div>
        <div className={styles['form-group']}>
          <div className={styles['gender-buttons']}>
            <div
              className={`${styles['gender-button']} ${
                formData.gender === 'male' ? styles.selected : ''
              }`}
              onClick={() => handleGenderSelect('male')}
            >
              남성
            </div>
            <div
              className={`${styles['gender-button']} ${
                formData.gender === 'female' ? styles.selected : ''
              }`}
              onClick={() => handleGenderSelect('female')}
            >
              여성
            </div>
          </div>
        </div>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="phone"
            name="phone"
            className={styles.input}
            value={formData.phone}
            onChange={handleChange}
            placeholder="휴대폰 번호"
          />
        </div>
        <button type="submit" className={styles.button}>
          완료하기
        </button>
      </form>
    </div>
  );
};

export default Register;
