// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import createDebug1 from "debug";
import createDebug2 from "ddbbgg";
import {ErrorBoundary, Suspense} from "solid-js";
import "./app.css";

const debug1 = createDebug1("debug1:solid:root");
const debug1Error = debug1.extend("error");

const debug2 = createDebug2("debug2:solid:root");
const debug2Error = debug2.extend("error");

export default function App() {
  return (
    <Router
      root={(props) => (
          <ErrorBoundary fallback={(e) => {
              debug1Error("hit App-level ErrorBoundary", { e });
              debug2Error("hit App-level ErrorBoundary", { e });
              return (<p>Error</p>);
          }}>
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
          </ErrorBoundary>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
