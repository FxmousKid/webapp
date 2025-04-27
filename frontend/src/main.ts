import './style.css'

const username = document.getElementById("username") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const register_btn = document.getElementById("register-btn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

register_btn.addEventListener("click", async () => {

	const res: Response = await fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({
			username: username.value,
			password: password.value
		})
	});

	const data = await res.json();
	if (data.error) {
		message.textContent = `❌ - ${data.error}`;
	}
	else {
		message.textContent = `✅ ${data.message}`;
	}
})
