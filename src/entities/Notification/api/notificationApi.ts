import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // 1 Тип возвращаемого значения асинхронной функции
    // 2 Тип передаваемого аргумента в асинхронную функцию
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
