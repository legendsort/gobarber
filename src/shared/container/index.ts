import { container } from 'tsyringe';

import '@modules/users/providers';
import '@shared/container/providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.register<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.register<IUsersRepository>('UsersRepository', UsersRepository);

container.register<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.register<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
