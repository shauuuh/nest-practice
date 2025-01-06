import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Jhon',
            phone: 222222222
        },
        {
            id: 2,
            name: 'Khon',
            phone: 222222221
        },
    ]

    getUsers() {
        return this.users;
    }
}
