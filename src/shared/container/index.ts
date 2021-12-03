import { container } from 'tsyringe';

import '@shared/container/providers';

import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);
