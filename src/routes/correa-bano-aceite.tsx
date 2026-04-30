import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect a la pilar canónica
export const Route = createFileRoute("/correa-bano-aceite")({
  beforeLoad: () => {
    throw redirect({ to: "/correa-distribucion-sumergida", replace: true });
  },
  component: () => null,
});
