import { useState } from 'react';
import styles from './Login.module.css';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/members.service';

const Login = () => {
  const [formData, setFormData] = useState({
    loginId: '', // 아이디
    password: '', // 비밀번호
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: SigninPayload) => await login(payload),
    onSuccess: (data) => {
      if (data && data.result) {
        localStorage.setItem('accessToken', data.result.accessToken);
      }
    },
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // 여기에 로그인 처리 로직을 추가하세요.
    await mutateAsync(formData);
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
            id="loginId"
            name="loginId"
            className={styles.input}
            value={formData.loginId}
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
