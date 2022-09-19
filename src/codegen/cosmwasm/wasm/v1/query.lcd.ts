import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* ContractInfo gets the contract meta data */


  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.get<QueryContractInfoResponseSDKType>(endpoint);
  }
  /* ContractHistory gets the contract code history */


  async contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.get<QueryContractHistoryResponseSDKType>(endpoint, options);
  }
  /* ContractsByCode lists all smart contracts for a code id */


  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}/contracts`;
    return await this.get<QueryContractsByCodeResponseSDKType>(endpoint, options);
  }
  /* AllContractState gets all raw store data for a single contract */


  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.get<QueryAllContractStateResponseSDKType>(endpoint, options);
  }
  /* RawContractState gets single key from the raw store data of a contract */


  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}raw/${params.query_data}`;
    return await this.get<QueryRawContractStateResponseSDKType>(endpoint);
  }
  /* SmartContractState get smart query result from the contract */


  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}smart/${params.query_data}`;
    return await this.get<QuerySmartContractStateResponseSDKType>(endpoint);
  }
  /* Code gets the binary code and metadata for a singe wasm code */


  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}`;
    return await this.get<QueryCodeResponseSDKType>(endpoint);
  }
  /* Codes gets the metadata for all stored wasm codes */


  async codes(params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.get<QueryCodesResponseSDKType>(endpoint, options);
  }
  /* PinnedCodes gets the pinned code ids */


  async pinnedCodes(params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.get<QueryPinnedCodesResponseSDKType>(endpoint, options);
  }

}