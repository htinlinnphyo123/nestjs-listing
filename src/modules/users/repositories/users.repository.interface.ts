import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY');

export type UserWithListings = User & {
  listings?: any[];
};

export interface IUsersRepository {
  /**
   * Create a new user
   * @param data User creation data
   * @returns Created user
   */
  create(data: CreateUserDto): Promise<User>;

  /**
   * Find all users
   * @param includeListings Whether to include user's listings
   * @returns Array of users
   */
  findAll(includeListings?: boolean): Promise<UserWithListings[]>;

  /**
   * Find user by ID
   * @param id User ID
   * @param includeListings Whether to include user's listings
   * @returns User or null if not found
   */
  findById(
    id: number,
    includeListings?: boolean,
  ): Promise<UserWithListings | null>;

  /**
   * Find user by email
   * @param email User email
   * @returns User or null if not found
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * Update user
   * @param id User ID
   * @param data Update data
   * @returns Updated user
   */
  update(id: number, data: UpdateUserDto): Promise<User>;

  /**
   * Delete user
   * @param id User ID
   * @returns Deleted user
   */
  delete(id: number): Promise<User>;
}
