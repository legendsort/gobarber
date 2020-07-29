import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';

describe('ListProviderMonthAvailabilityService', () => {
  let fakeAppointmentsRepository: FakeAppointmentsRepository;
  let listProviderMonthAvailabilityService: ListProviderMonthAvailabilityService;

  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailabilityService = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const today = new Date(2050, 4, 22);

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        8,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        9,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        10,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        11,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        12,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        13,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        14,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        15,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        16,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        17,
        0,
        0,
      ),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123',
      date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 2,
        17,
        0,
        0,
      ),
    });

    const availability = await listProviderMonthAvailabilityService.execute({
      provider_id: 'user',
      year: today.getFullYear(),
      month: today.getMonth() + 1,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: today.getDate(), available: true },
        { day: today.getDate() + 1, available: false },
        { day: today.getDate() + 2, available: true },
        { day: today.getDate() + 3, available: true },
      ]),
    );
  });
});
