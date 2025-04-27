import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() body: {username: string, password: string}) {
		return this.usersService.createUser(body.username, body.password);
	}	

	@Get()
	list() {
		return this.usersService.listUsers();
	} 

}

