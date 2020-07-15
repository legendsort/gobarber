import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

import SentForgotPasswordEmailService from '@modules/users/services/SentForgotPasswordEmailService';
import AppError from '@shared/errors/AppError';
import FakeUserTokensRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokensRepository: FakeUserTokensRepository;
let sentForgotPasswordEmailService: SentForgotPasswordEmailService;

describe('SentForgotPasswordEmailService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sentForgotPasswordEmailService = new SentForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('should be able to recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Samuel',
      email: 'samuelterra22@gmail.com',
      password: '123456',
    });

    await sentForgotPasswordEmailService.execute({
      email: 'samuelterra22@gmail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should be not able to recover a non-existing user password', async () => {
    await expect(
      sentForgotPasswordEmailService.execute({
        email: 'samuelterra22@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password otken', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'Samuel',
      email: 'samuelterra22@gmail.com',
      password: '123456',
    });

    await sentForgotPasswordEmailService.execute({
      email: 'samuelterra22@gmail.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
