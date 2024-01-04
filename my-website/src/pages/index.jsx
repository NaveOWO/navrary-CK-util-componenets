import useIsBrowser from "@docusaurus/useIsBrowser";
import { Redirect } from "@docusaurus/router";

export default function Home() {
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    return <Redirect to={`/navrary-util-components/docs/Overview/Introduce`} />;
  }

  return null;
}
