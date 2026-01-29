export class UserEntity {
  id: number;

  email: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
