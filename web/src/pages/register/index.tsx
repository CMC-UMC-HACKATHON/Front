import { useState } from 'react';
import styles from '../register/Register.module.css';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/services/members.service';

const Register = () => {
  const [formData, setFormData] = useState({
    loginId: '', // 아이디
    password: '',
    checkPassword: '', // 비밀번호 확인
    username: '', // 닉네임
    gender: '', // 성별
    phoneNumber: '',
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: SignupPayload) => await signup(payload),
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.p}>회원정보를 입력해주세요</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="loginId"
            name="loginId"
            className={styles.input}
            value={formData.loginId}
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
            id="checkPassword"
            name="checkPassword"
            className={styles.input}
            value={formData.checkPassword}
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
                formData.gender === '남성' ? styles.selected : ''
              }`}
              onClick={() => handleGenderSelect('남성')}
            >
              남성
            </div>
            <div
              className={`${styles['gender-button']} ${
                formData.gender === '여성' ? styles.selected : ''
              }`}
              onClick={() => handleGenderSelect('여성')}
            >
              여성
            </div>
          </div>
        </div>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className={styles.input}
            value={formData.phoneNumber}
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
