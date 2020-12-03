import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStoragePovider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
