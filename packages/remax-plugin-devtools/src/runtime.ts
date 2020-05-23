import { connectToDevTools } from 'react-devtools-core';
import WebSocket from './WebSocket';

connectToDevTools({
  websocket: new WebSocket('ws://localhost:8097'),
});
