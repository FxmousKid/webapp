import { Injectable } from '@nestjs/common';

type User = {username: string, password: string};

@Injectable()
export class UsersService {
	private users: User[] = [];

	createUser(username: string, password: string) {
		const exists = this.users.find(u => u.username == username);
		if (exists) {
			return { error: "username already exists" };
		}

		const user = {username: username, password: password};
		this.users.push(user);

		return { message: "User created", username: username };
	}

	listUsers() {
		return this.users.map(u => u.username);
	}
}
