import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  subscription: yup.string().required("Выберите тип подписки"),
  agree: yup.boolean().oneOf([true], "Вы должны согласиться с условиями"),
});

function TaskTree() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Данные формы:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
      <h2>Выберите уровень подписки:</h2>

      <label>
        <input
          type="radio"
          value="free"
          {...register("subscription")}
        />
        Бесплатный
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="premium"
          {...register("subscription")}
        />
        Премиум
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="pro"
          {...register("subscription")}
        />
        Про
      </label>
      <br />
      {errors.subscription && <p style={{ color: "red" }}>{errors.subscription.message}</p>}

      <hr />

      <label>
        <input type="checkbox" {...register("agree")} />
        Я согласен с условиями
      </label>
      <br />
      {errors.agree && <p style={{ color: "red" }}>{errors.agree.message}</p>}

      <button type="submit">Отправить</button>
    </form>
  );
}

export default TaskTree;
