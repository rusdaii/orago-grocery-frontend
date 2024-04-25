import fetcher from '@/lib/fetcher';
import { queryGenerator } from '@/lib/queryGenerator';

import { getCategoriesResponse } from './types';

export const getCategories = async () => {
  const response = await fetcher<getCategoriesResponse>({
    url: '/categories',
    query: queryGenerator({
      populate: {
        products: '*',
        icon: {
          fields: ['name', 'url'],
        },
      },
    }),
    next: {
      revalidate: 60 * 60 * 24 * 3,
    },
  });

  return response;
};
