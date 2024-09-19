import { useForm } from "react-hook-form";
import { useState } from "react";
import style from "./style.css";

function Form(props) {
  const [formState, setFormState] = useState("");
  const { setOpenedFormModal } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data, e) => {
    const { user_email } = data;
    const { user_name } = data;

    const resObj = JSON.stringify({ user_email, user_name });

    await fetch("https://api.openjavascript.info/post", {
      method: "POST",
      body: resObj,
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const text = `Вы успешно подписаны.

        Не забывайте проверять вашу почту ${user_name}`;
        setFormState(text);

        localStorage.setItem("form", true);

        setTimeout(() => {
          setOpenedFormModal(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!formState ? (
        <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>Если вы хотите получать информацию о премьерах, трейлерах, афишу - подпишитесь на наши обновления</h2>
          <div className="form__group-name">
            <label htmlFor="name">Name:</label>
            <input
              // className={!isValid ? "outline-red" : ""}
              type="text"
              id="name"
              {...register("user_name", {
                required: "Это поле обязательно",
                minLength: { value: 3, message: "Минимум 3 символа" },
                maxLength: { value: 20, message: "Максимум 20 символов" },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё\s\-']+$/,
                  message: "Только буквы и пробелы",
                },
              })}
            />
            {errors.user_name && <p className="form__error">{errors.user_name.message}</p>}
          </div>
          <div className="form__group-email">
            <label htmlFor="mail">Email:</label>
            <input
              // className={!isValid ? "outline-red" : ""}
              type="email"
              id="mail"
              {...register("user_email", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors.user_email && <p className="form__error">{errors.user_email.message}</p>}
          </div>
          <input type="submit" className={!isValid ? "disabled" : ""} value="Отправить" />
        </form>
      ) : (
        <div className="response-form">
          <p>Вы успешно подписаны.</p>
          <p>Не забывайте проверять вашу почту :)</p>
        </div>
      )}
    </>
  );
}

export default Form;
