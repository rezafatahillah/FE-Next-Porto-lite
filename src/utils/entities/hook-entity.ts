import {
  DefinedInitialDataInfiniteOptions,
  InfiniteData,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

import { IErrorResponse } from './response-entity';

// ----------------------------------------------------------------------

// React-Query
export type IHookQueryGet<Props, Response, ResponseError = IErrorResponse> = {
  props: Props;
  options?: Omit<UseQueryOptions<Response, ResponseError>, 'queryKey'>;
};

export type IHookQueryInfinite<Props, Response, ResponseError = IErrorResponse> = {
  props: Props;
  options?: Omit<
    UseInfiniteQueryOptions<
      Response,
      ResponseError,
      InfiniteData<Response>,
      Response,
      (string | object)[],
      number
    >,
    'queryKey' | 'queryFn' | 'getNextPageParam' | 'initialPageParam'
  >;
};

export type IHookQueryMutation<Props, Response, ResponseError = IErrorResponse> = {
  props?: Props;
  options?: UseMutationOptions<Response, ResponseError, Props>;
};

// ----------------------------------------------------------------------

// Hooks
export type IFeedbackFormProps<SuccessResponse = object> = {
  onSuccess?: (value?: SuccessResponse) => void;
  onFailed?: VoidFunction;
};
