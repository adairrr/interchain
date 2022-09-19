import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */

export enum AuthorizationType {
  /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
  AUTHORIZATION_TYPE_UNSPECIFIED = 0,

  /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
  AUTHORIZATION_TYPE_DELEGATE = 1,

  /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
  AUTHORIZATION_TYPE_UNDELEGATE = 2,

  /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
  AUTHORIZATION_TYPE_REDELEGATE = 3,
  UNRECOGNIZED = -1,
}
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */

export enum AuthorizationTypeSDKType {
  /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
  AUTHORIZATION_TYPE_UNSPECIFIED = 0,

  /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
  AUTHORIZATION_TYPE_DELEGATE = 1,

  /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
  AUTHORIZATION_TYPE_UNDELEGATE = 2,

  /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
  AUTHORIZATION_TYPE_REDELEGATE = 3,
  UNRECOGNIZED = -1,
}
export function authorizationTypeFromJSON(object: any): AuthorizationType {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;

    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;

    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;

    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
export function authorizationTypeToJSON(object: AuthorizationType): string {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";

    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";

    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";

    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";

    default:
      return "UNKNOWN";
  }
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface StakeAuthorization {
  /**
   * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
   * empty, there is no spend limit and any amount of coins can be delegated.
   */
  max_tokens: Coin;
  /**
   * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
   * account.
   */

  allow_list?: StakeAuthorization_Validators;
  /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */

  deny_list?: StakeAuthorization_Validators;
  /** authorization_type defines one of AuthorizationType. */

  authorization_type: AuthorizationType;
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface StakeAuthorizationSDKType {
  /**
   * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
   * empty, there is no spend limit and any amount of coins can be delegated.
   */
  max_tokens: CoinSDKType;
  /**
   * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
   * account.
   */

  allow_list?: StakeAuthorization_ValidatorsSDKType;
  /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */

  deny_list?: StakeAuthorization_ValidatorsSDKType;
  /** authorization_type defines one of AuthorizationType. */

  authorization_type: AuthorizationTypeSDKType;
}
/** Validators defines list of validator addresses. */

export interface StakeAuthorization_Validators {
  address: string[];
}
/** Validators defines list of validator addresses. */

export interface StakeAuthorization_ValidatorsSDKType {
  address: string[];
}

function createBaseStakeAuthorization(): StakeAuthorization {
  return {
    max_tokens: undefined,
    allow_list: undefined,
    deny_list: undefined,
    authorization_type: 0
  };
}

export const StakeAuthorization = {
  encode(message: StakeAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_tokens !== undefined) {
      Coin.encode(message.max_tokens, writer.uint32(10).fork()).ldelim();
    }

    if (message.allow_list !== undefined) {
      StakeAuthorization_Validators.encode(message.allow_list, writer.uint32(18).fork()).ldelim();
    }

    if (message.deny_list !== undefined) {
      StakeAuthorization_Validators.encode(message.deny_list, writer.uint32(26).fork()).ldelim();
    }

    if (message.authorization_type !== 0) {
      writer.uint32(32).int32(message.authorization_type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.max_tokens = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.allow_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;

        case 3:
          message.deny_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;

        case 4:
          message.authorization_type = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakeAuthorization>): StakeAuthorization {
    const message = createBaseStakeAuthorization();
    message.max_tokens = object.max_tokens !== undefined && object.max_tokens !== null ? Coin.fromPartial(object.max_tokens) : undefined;
    message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? StakeAuthorization_Validators.fromPartial(object.allow_list) : undefined;
    message.deny_list = object.deny_list !== undefined && object.deny_list !== null ? StakeAuthorization_Validators.fromPartial(object.deny_list) : undefined;
    message.authorization_type = object.authorization_type ?? 0;
    return message;
  }

};

function createBaseStakeAuthorization_Validators(): StakeAuthorization_Validators {
  return {
    address: []
  };
}

export const StakeAuthorization_Validators = {
  encode(message: StakeAuthorization_Validators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization_Validators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakeAuthorization_Validators>): StakeAuthorization_Validators {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map(e => e) || [];
    return message;
  }

};