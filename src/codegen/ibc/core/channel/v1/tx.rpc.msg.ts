import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponseSDKType>;
  /*ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.*/

  channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponseSDKType>;
  /*ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.*/

  channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponseSDKType>;
  /*ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.*/

  channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponseSDKType>;
  /*ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.*/

  channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponseSDKType>;
  /*ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.*/

  channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponseSDKType>;
  /*ChannelCloseConfirm defines a rpc handler method for
  MsgChannelCloseConfirm.*/

  recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponseSDKType>;
  /*RecvPacket defines a rpc handler method for MsgRecvPacket.*/

  timeout(request: MsgTimeout): Promise<MsgTimeoutResponseSDKType>;
  /*Timeout defines a rpc handler method for MsgTimeout.*/

  timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponseSDKType>;
  /*TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.*/

  acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponseSDKType>;
  /*Acknowledgement defines a rpc handler method for MsgAcknowledgement.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */


  channelOpenInit = async (request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponseSDKType> => {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then(data => MsgChannelOpenInitResponse.decode(new _m0.Reader(data)));
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */

  channelOpenTry = async (request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponseSDKType> => {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then(data => MsgChannelOpenTryResponse.decode(new _m0.Reader(data)));
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */

  channelOpenAck = async (request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponseSDKType> => {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then(data => MsgChannelOpenAckResponse.decode(new _m0.Reader(data)));
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */

  channelOpenConfirm = async (request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponseSDKType> => {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then(data => MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data)));
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */

  channelCloseInit = async (request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponseSDKType> => {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then(data => MsgChannelCloseInitResponse.decode(new _m0.Reader(data)));
  };
  /* ChannelCloseConfirm defines a rpc handler method for
  MsgChannelCloseConfirm. */

  channelCloseConfirm = async (request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponseSDKType> => {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then(data => MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data)));
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */

  recvPacket = async (request: MsgRecvPacket): Promise<MsgRecvPacketResponseSDKType> => {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then(data => MsgRecvPacketResponse.decode(new _m0.Reader(data)));
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */

  timeout = async (request: MsgTimeout): Promise<MsgTimeoutResponseSDKType> => {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then(data => MsgTimeoutResponse.decode(new _m0.Reader(data)));
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */

  timeoutOnClose = async (request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponseSDKType> => {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then(data => MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data)));
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */

  acknowledgement = async (request: MsgAcknowledgement): Promise<MsgAcknowledgementResponseSDKType> => {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then(data => MsgAcknowledgementResponse.decode(new _m0.Reader(data)));
  };
}