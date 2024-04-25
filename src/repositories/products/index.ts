import fetcher from '@/lib/fetcher';
import { queryGenerator } from '@/lib/queryGenerator';

import { getProductDetailResponse, getProductsResponse } from './types';

export const getProducts = async (filter?: any) => {
  const response = await fetcher<getProductsResponse>({
    url: `/products`,
    query: queryGenerator({
      ...filter,
      populate: {
        ratings: '*',
      },
    }),
  });

  return response;
};

export const getProductDetail = async (slug: string) => {
  const response = await fetcher<getProductDetailResponse>({
    url: `/products`,
    query: queryGenerator({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        ratings: '*',
      },
    }),
  });

  return response;
};

export const getSearchProducts = async (payload: string) => {
  const response = await fetcher<getProductsResponse>({
    url: `/products`,
    query: queryGenerator({
      filters: {
        name: {
          $containsi: payload,
        },
      },
      populate: {
        ratings: '*',
      },
    }),
  });

  return response;
};

export const getRelatedProducts = async (category: string) => {
  const response = await fetcher<getProductsResponse>({
    url: `/products`,
    query: queryGenerator({
      filters: {
        categories: {
          slug: {
            $eq: category,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 5,
      },
      populate: {
        ratings: '*',
      },
    }),
  });

  return response;
};

export const getPopularPorducts = async () => {
  const response = await fetcher<getProductsResponse>({
    url: `/products`,
    query: queryGenerator({
      pagination: {
        start: 0,
        limit: 10,
      },
      sort: {
        updatedAt: 'desc',
      },
      populate: {
        ratings: '*',
      },
    }),

    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const result = response.data.map((product) => {
    return {
      ...product,
      attributes: {
        ...product.attributes,
        totalSelling: +product.attributes.totalSelling,
      },
    };
  });

  return result;
};
