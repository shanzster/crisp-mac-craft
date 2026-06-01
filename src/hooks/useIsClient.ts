import { useEffect, useState } from "react";

/**
 * Returns true only after the component has mounted on the client.
 * Use this to guard any code that reads window/navigator/matchMedia,
 * preventing SSR hydration mismatches between server render and client.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}
