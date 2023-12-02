import { FetchEvent } from "solid-start";
import { MiddlewareInput } from "solid-start/entry-server";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export function visitorCount({ forward }: MiddlewareInput) {
  return async (event: FetchEvent) => {
    const request = event.request;
    const method = request.method.toString();
    const url = request.url.toString();
    const userAgent = request.headers.get('user-agent')
    const cliendAddress = event.clientAddress.toString();
    const proxyRealIp = request.headers.get('x-real-ip')

    fetch(`${supabaseUrl}/rest/v1/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": supabaseKey },
      body: JSON.stringify({ method, url, cliendAddress: proxyRealIp ?? cliendAddress, userAgent }),
    }).catch((err) => console.error(err))
    
    return forward(event);
  };

}