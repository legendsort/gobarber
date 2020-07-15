import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashPrivider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashPrivider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
