import { FetchEvent } from "solid-start";
import { MiddlewareInput } from "solid-start/entry-server";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export function visitorCount({ forward }: MiddlewareInput) {
  return async (event: FetchEvent) => {
    // your own logic here
    const request = event.request;
    const method = request.method.toString();
    const url = request.url.toString();
    const cliendAddress = event.clientAddress.toString();
    
    supabase.from('visits').insert({
      method: method,
      url: url,
      cliendAddress: cliendAddress
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })


    // maybe you want to get the cookie? or block this ip?
    return forward(event); // next
  };

}