import lib from 'dayjs';
import 'dayjs/locale/pt-BR'
import relativeTime from 'dayjs/plugin/relativeTime';

lib.extend(relativeTime);
lib.locale('pt-BR')


export const dayjs = lib