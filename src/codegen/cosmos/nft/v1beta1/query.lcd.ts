import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesResponseSDKType } from "./query";
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
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */


  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.class_id}`;
    return await this.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */


  async owner(params: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType> {
    const endpoint = `cosmos/nft/v1beta1/owner/${params.class_id}/${params.id}`;
    return await this.get<QueryOwnerResponseSDKType>(endpoint);
  }
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */


  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const endpoint = `cosmos/nft/v1beta1/supply/${params.class_id}`;
    return await this.get<QuerySupplyResponseSDKType>(endpoint);
  }
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
  ERC721Enumerable */


  async nFTs(params: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.class_id !== "undefined") {
      options.params.class_id = params.class_id;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return await this.get<QueryNFTsResponseSDKType>(endpoint, options);
  }
  /* NFT queries an NFT based on its class and id. */


  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponseSDKType> {
    const endpoint = `cosmos/nft/v1beta1/nfts/${params.class_id}/${params.id}`;
    return await this.get<QueryNFTResponseSDKType>(endpoint);
  }
  /* Class queries an NFT class based on its id */


  async class(params: QueryClassRequest): Promise<QueryClassResponseSDKType> {
    const endpoint = `cosmos/nft/v1beta1/classes/${params.class_id}`;
    return await this.get<QueryClassResponseSDKType>(endpoint);
  }
  /* Classes queries all NFT classes */


  async classes(params: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/classes`;
    return await this.get<QueryClassesResponseSDKType>(endpoint, options);
  }

}