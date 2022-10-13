import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://4d93561168664b90886d1e5e411acac1@o1266356.ingest.sentry.io/6451503",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0
    });
}

function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log
};
export default logger;
