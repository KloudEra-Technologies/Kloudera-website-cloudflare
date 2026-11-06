import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { Toaster } from "../components/ui/sonner";
import Ferrofluid from "../components/ui/Ferrofluid";
import GradualBlur from "../components/ui/GradualBlur";
import { KlouderaChatbot } from "../components/site/KlouderaChatbot";
import { DiwaliExperience } from "../components/diwali/DiwaliExperience";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
      {
        name: "description",
        content:
          "Enterprise cybersecurity consulting, 24/7 SOC, AI compute rigs, and Microsoft Cloud governance by KloudEra Technologies.",
      },
      { name: "author", content: "KloudEra Technologies" },
      { property: "og:site_name", content: "KloudEra Technologies" },
      { property: "og:title", content: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
      {
        property: "og:description",
        content:
          "Enterprise cybersecurity consulting, 24/7 SOC, AI compute rigs, and Microsoft Cloud governance by KloudEra Technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kloudera.ai/" },
      { property: "og:image", content: "https://www.kloudera.ai/logo.png" },
      { property: "og:image:url", content: "https://www.kloudera.ai/logo.png" },
      { property: "og:image:secure_url", content: "https://www.kloudera.ai/logo.png" },
      { name: "image", content: "https://www.kloudera.ai/logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "800" },
      { property: "og:image:alt", content: "KloudEra Technologies Logo & Brand" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@klouderatech" },
      { name: "twitter:title", content: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
      {
        name: "twitter:description",
        content:
          "Enterprise cybersecurity consulting, 24/7 SOC, AI compute rigs, and Microsoft Cloud governance by KloudEra Technologies.",
      },
      { name: "twitter:image", content: "https://www.kloudera.ai/logo.png" },
      { name: "twitter:image:alt", content: "KloudEra Technologies Logo & Brand" },
      { itemProp: "image", content: "https://www.kloudera.ai/logo.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://www.kloudera.ai/" },
      { rel: "image_src", href: "https://www.kloudera.ai/logo.png" },
      { rel: "apple-touch-icon", href: "https://www.kloudera.ai/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "https://www.kloudera.ai/apple-touch-icon.png" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", sizes: "32x32", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-x-clip">
        <div className="pointer-events-none fixed inset-0 -z-20">
          <Ferrofluid
            colors={["#ffffff", "#cccccc", "#888888"]}
            speed={0.15}
            scale={1.2}
            turbulence={0.5}
            fluidity={0.2}
            rimWidth={0.2}
            sharpness={2}
            shimmer={0.5}
            glow={1}
            flowDirection="down"
            opacity={0.25}
            mouseInteraction={true}
            mouseStrength={0.5}
            mouseRadius={0.3}
          />
        </div>
        <div className="pointer-events-none fixed inset-0 -z-10 grid-lines opacity-60" />
        <Nav />
        <main className="pt-2">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <GradualBlur
          target="page"
          position="bottom"
          height="2.5rem"
          strength={1}
          divCount={6}
          curve="bezier"
          opacity={0.6}
          zIndex={20}
        />
        <Toaster />
        <DiwaliExperience />
        <KlouderaChatbot />
      </div>
    </QueryClientProvider>
  );
}
