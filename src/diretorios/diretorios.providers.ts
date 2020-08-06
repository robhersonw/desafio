import { diretorio } from './diretorio.entity';

export const diretorioProviders = [
  {
    provide: 'DIRETORIO_REPOSITORY',
    useValue: diretorio,
  },
];