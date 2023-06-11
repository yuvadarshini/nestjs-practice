import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = [
        {
            name: "Ms. Peaches",
            phoneNo: "123210384"
        },
        {
            name: "Ms. Jacobs",
            phoneNo: "124520373"
        },
    ]

    getUsers(): UserDto[] {
        return this.users;
    }

    getOneUser(id: number): number {
        return id;
    }

    createUser(body: UserDto): string {
        return `Created user with name ${body.name} and phone no: ${body.phoneNo}`
    }

    updateOneUser(id: number): number {
        return id;
    }

    deleteOneUser(id: number): string {
        return `deleted user with id: ${id}`
    }
        
}
