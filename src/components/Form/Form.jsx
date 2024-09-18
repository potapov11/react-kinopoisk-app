import style from './style.css';

function Form() {
	return (
		<>
			<form action="index.html" method="post">
				<h1>Sign Up</h1>

				<label for="name">Name:</label>
				<input type="text" id="name" name="user_name" />

				<label for="mail">Email:</label>
				<input type="email" id="mail" name="user_email" />

				<label for="password">Password:</label>
				<input type="password" id="password" name="user_password" />

				<label>Age:</label>
				<input type="radio" id="under_13" value="under_13" name="user_age" />
				<label for="under_13" class="light">
					Under 13
				</label>
				<input type="radio" id="over_13" value="over_13" name="user_age" />
				<label for="over_13" class="light">
					13 or older
				</label>
			</form>
		</>
	);
}

export default Form;
