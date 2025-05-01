import {
  IErrorMapResponse,
  IErrorResponse,
  IUnprocessableResponse,
} from "../entities";

// ----------------------------------------------------------------------

export const errorResponseMap = <T = IErrorResponse, R = IErrorMapResponse>(
  response: T,
  defaultOptions: { message: string }
): R => {
  if (isIErrorResponse(response)) {
    return errorMap(response, defaultOptions) as R;
  }

  if (isIUnprocessableResponse(response)) {
    return { message: response.message || defaultOptions?.message } as R;
  }

  return { message: defaultOptions?.message } as R;
};

const errorMap = (
  response: IErrorResponse,
  defaultOptions: { message: string }
): IErrorMapResponse => {
  const errors = response.message || [];

  const fields: Array<{ field: any; message: string }> = [];

  const traverse = (items: IErrorResponse["message"], parentField = "") => {
    items.forEach((item) => {
      const field = parentField ? `${parentField}.${item.field}` : item.field;

      if (item.errors) {
        item.errors.forEach((error) => {
          fields.push({ field, message: error });
        });
      }

      if (item.children) {
        traverse(item.children, field);
      }
    });
  };

  traverse(errors);

  return {
    message: defaultOptions?.message,
    fields,
  };
};

const isIErrorResponse = (response: any): response is IErrorResponse => {
  return (
    typeof response === "object" &&
    response !== null &&
    "message" in response &&
    Array.isArray(response.message)
  );
};

const isIUnprocessableResponse = (
  response: any
): response is IUnprocessableResponse => {
  return (
    typeof response === "object" &&
    response !== null &&
    "message" in response &&
    typeof response.message === "string"
  );
};
