import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Connection queries an IBC connection end. */


  connection = async (params: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType> => {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.req.get<QueryConnectionResponseSDKType>(endpoint);
  };
  /* Connections queries all the IBC connections of a chain. */

  connections = async (params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/connection/v1/connections`;
    return await this.req.get<QueryConnectionsResponseSDKType>(endpoint, options);
  };
  /* ClientConnections queries the connection paths associated with a client
   state. */

  clientConnections = async (params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType> => {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.req.get<QueryClientConnectionsResponseSDKType>(endpoint);
  };
  /* ConnectionClientState queries the client state associated with the
   connection. */

  connectionClientState = async (params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType> => {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.req.get<QueryConnectionClientStateResponseSDKType>(endpoint);
  };
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */

  connectionConsensusState = async (params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType> => {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.req.get<QueryConnectionConsensusStateResponseSDKType>(endpoint);
  };
}