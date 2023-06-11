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
        
}
