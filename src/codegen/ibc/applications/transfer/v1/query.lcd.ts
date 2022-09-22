import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* DenomTrace queries a denomination trace information. */


  denomTrace = async (params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.req.get<QueryDenomTraceResponseSDKType>(endpoint);
  };
  /* DenomTraces queries all denomination traces. */

  denomTraces = async (params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.req.get<QueryDenomTracesResponseSDKType>(endpoint, options);
  };
  /* Params queries all parameters of the ibc-transfer module. */

  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
}