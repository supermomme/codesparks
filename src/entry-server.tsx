import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";
import { visitorCount } from "./middlewares/visitor-count";

export default createHandler(
  // middleware 1
  (aaa) => {
    return async event => {
      // your own logic here
      const request = event.request;
      // maybe you want to get the cookie? or block this ip?
      return aaa.forward(event); // next
    };
  },
  visitorCount,
  renderAsync((event) => <StartServer event={event} />)
);
