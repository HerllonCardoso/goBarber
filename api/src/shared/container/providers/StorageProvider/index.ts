import { container } from 'tsyringe';

import IStorageProvider from './models/IStoragePovider';
import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>('MailProvider', providers.disk);
