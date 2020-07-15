import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashPrivider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Samuel Terra',
      email: 'samuelterra22@gmail.com',
      password: '1234',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Samuel Vieira',
      email: 'samuelterra22@hotmail.com',
    });

    expect(updatedUser.name).toBe('Samuel Vieira');
    expect(updatedUser.email).toBe('samuelterra22@hotmail.com');
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Samuel Terra',
      email: 'samuelterra22@gmail.com',
      password: '1234',
    });

    const user = await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@example.com',
      password: '1234',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Samuel Terra',
        email: 'samuelterra22@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Samuel Terra',
      email: 'samuelterra22@gmail.com',
      password: '1234',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Samuel Vieira',
      email: 'samuelterra22@hotmail.com',
      old_password: '1234',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Samuel Terra',
      email: 'samuelterra22@gmail.com',
      password: '1234',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Samuel Vieira',
        email: 'samuelterra22@hotmail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Samuel Terra',
      email: 'samuelterra22@gmail.com',
      password: '1234',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Samuel Vieira',
        email: 'samuelterra22@hotmail.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with not existing user', async () => {
    await expect(
      updateProfileService.execute({
        user_id: 'non-existing-user-id',
        name: 'Samuel Vieira',
        email: 'samuelterra22@hotmail.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
