import { FetchEvent } from "solid-start";
import { MiddlewareInput } from "solid-start/entry-server";


export function visitorCount({ forward }: MiddlewareInput) {
  return async (event: FetchEvent) => {
    // your own logic here
    const request = event.request;
    // console.log(request);
    
    // maybe you want to get the cookie? or block this ip?
    return forward(event); // next
  };

}