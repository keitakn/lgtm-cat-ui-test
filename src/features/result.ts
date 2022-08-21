import {
  createSuccessResult as orgCreateSuccessResult,
  createFailureResult as orgCreateFailureResult,
  isSuccessResult as orgIsSuccessResult,
  isFailureResult as orgIsFailureResult,
  type SuccessResult as OrgSuccessResult,
  FailureResult as OrgFailureResult,
  Result as OrgResult,
} from '@nekochans/lgtm-cat-ui';

export type SuccessResult<T> = OrgSuccessResult<T>;

export type FailureResult<T> = OrgFailureResult<T>;

export type Result<T, E> = OrgResult<T, E>;

export const createSuccessResult = orgCreateSuccessResult;

export const createFailureResult = orgCreateFailureResult;

export const isSuccessResult = orgIsSuccessResult;

export const isFailureResult = orgIsFailureResult;
