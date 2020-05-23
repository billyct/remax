enum ReadyState {
  CONNECTING,
  OPEN,
  CLOSING,
  CLOSED,
}

export default class WebSocket {
  readyState: ReadyState;
  CONNECTING = ReadyState.CONNECTING;
  OPEN = ReadyState.OPEN;
  CLOSING = ReadyState.CLOSING;
  CLOSED = ReadyState.CLOSED;
  onopen?: any;
  onerror?: any;
  onclose?: any;
  onmessage?: any;

  constructor(url: string) {
    this.readyState = ReadyState.CONNECTING;
    my.connectSocket({
      url,
    });

    my.onSocketOpen(() => {
      this.readyState = ReadyState.OPEN;
      if (typeof this.onopen === 'function') {
        this.onopen();
      }
    });

    my.onSocketError((res: any) => {
      if (typeof this.onerror === 'function') {
        this.onerror(res);
      }
    });

    my.onSocketClose(() => {
      this.readyState = ReadyState.CLOSED;
      if (typeof this.onclose === 'function') {
        this.onclose();
      }
    });

    my.onSocketMessage((res: any) => {
      console.log('res: ', res);
      if (typeof this.onmessage === 'function') {
        this.onmessage(res);
      }
    });
  }

  send(payload: any) {
    my.sendSocketMessage({
      data: payload,
    });
  }
}
