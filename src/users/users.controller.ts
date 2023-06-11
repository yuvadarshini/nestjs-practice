import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // getting all users
    @Get()
    getUsers(): UserDto[] {
        // get all users from the database
        return this.usersService.getUsers();
    }

    // getting one user
    @Get(':id')
    getOneUser(@Param('id') id): number {
        // call the database with the given id and the database will return the user and this function will return the same
        return this.usersService.getOneUser(id);
    }

    // creating a user
    @Post()
    createUser(@Body() createUserDto: UserDto): string {
        console.log(createUserDto)
        // write to the database with this created user
        return this.usersService.createUser(createUserDto);
    }

    // updating a user
    @Put(':id')
    updateOneUser(@Param('id') id): number {
        // execute a database query that updates the user and return it
        return this.usersService.updateOneUser(id);
    }

    // deleting a user
    @Delete(':id')
    deleteOneUser(@Param('id') id): string {
        // execute a database query that deletes the user
        return this.usersService.deleteOneUser(id);
    }
}
