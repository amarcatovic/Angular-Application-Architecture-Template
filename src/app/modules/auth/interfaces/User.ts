export default class User {
    id!: number;
    email!: string;
    username?: string;

    constructor(id: number, email: string) {
        this.id = id;
        this.email = email;
    }
}