import { useForm } from "react-hook-form";
import style from "./style.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const username = watch("username");

  return (
    <>
      <form className="form" action="index.html" method="post">
        <h2>Если вы хотите получать информацию о премьерах, трейлерах, афишу - подпишитесь на наши обновления</h2>

        <label for="name">Name:</label>
        {/* <input type="text" id="name" name="user_name" {...register("user_name", { required: true, maxLength: 20 })} /> */}
        <input
          type="text"
          id="name"
          {...register("user_name", {
            required: "Это поле обязательно",
            minLength: { value: 3, message: "Минимум 3 символа" },
            maxLength: { value: 3, message: "Минимум 3 символа" },
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё\s\-']+$/,
              message: "Только буквы и пробелы",
            },
          })}
        />
        {errors.user_name && <p className="form__error">{errors.user_name.message}</p>}

        <label for="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />

        <button>Отправить</button>
      </form>
    </>
  );
}

export default Form;
