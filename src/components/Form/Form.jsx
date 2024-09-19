import { useForm } from "react-hook-form";
import style from "./style.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Валидация при каждом изменении
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Если вы хотите получать информацию о премьерах, трейлерах, афишу - подпишитесь на наши обновления</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("user_name", {
            required: "Это поле обязательно",
            minLength: { value: 3, message: "Минимум 3 символа" },
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё\s\-']+$/,
              message: "Только буквы и пробелы",
            },
          })}
        />
        {errors.user_name && <p className="form__error">{errors.user_name.message}</p>}

        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" {...register("user_email", { required: "Это поле обязательно" })} />
        {errors.user_email && <p className="form__error">{errors.user_email.message}</p>}

        <button type="submit">Отправить</button>
      </form>
    </>
  );
}

export default Form;
