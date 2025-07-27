import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().min(2, "Имя должно быть не менее 2 символов").required("Введите имя"),
  email: yup.string().email("Неверный формат email").required("Введите email"),
  password: yup.string().min(8, "Пароль должен быть не менее 8 символов").required("Введите пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Подтвердите пароль"),
});

function TaskFour() {
  const [modalData, setModalData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setModalData(data);
    reset();
  };

  const closeModal = () => setModalData(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Имя:</label><br />
          <input type="text" {...register("name")} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Пароль:</label><br />
          <input type="password" {...register("password")} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div>
          <label>Подтверждение пароля:</label><br />
          <input type="password" {...register("confirmPassword")} />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>

      {/* Модальное окно */}
      {modalData && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)"
            }}
          >
            <h3>Данные регистрации:</h3>
            <pre style={{ background: "#f6f6f6", padding: "10px" }}>
              {JSON.stringify(modalData, null, 2)}
            </pre>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskFour;
