export type IApiGet<Params> = {
  params?: Params;
};

export type IApiPost<Payload> = {
  payload: Payload;
};

export type IApiPut<Payload, Id> = {
  id: Id;
  payload: Payload;
};

export type IApiDelete<Id> = {
  id: Id;
};
