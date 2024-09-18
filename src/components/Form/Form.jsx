import style from './style.css';

function Form() {
	return (
		<>
			<form className="form" action="index.html" method="post">
				<h2>Если вы хотите получать информацию о премьерах, трейлерах, афишу - подпишитесь на наши обновления</h2>

				<label for="name">Name:</label>
				<input type="text" id="name" name="user_name" />

				<label for="mail">Email:</label>
				<input type="email" id="mail" name="user_email" />

				<button>Отправить</button>
			</form>
		</>
	);
}

export default Form;
