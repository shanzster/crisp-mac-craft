import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const [showMobileModal, setShowMobileModal] = useState(false);

  useEffect(() => {
    const isNarrowViewport = window.matchMedia("(max-width: 767px)").matches;
    const isTabletWidth = window.matchMedia("(max-width: 1024px)").matches;
    const hasTouch = navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isKnownMobile = /Android|iPhone|iPad|iPod|Mobile|CriOS|FxiOS|OPiOS|EdgA|SamsungBrowser/i.test(navigator.userAgent);
    const isMobile = isNarrowViewport || isKnownMobile || (isTabletWidth && (hasTouch || hasCoarsePointer));
    if (isMobile) {
      setShowMobileModal(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      {showMobileModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "oklch(0.04 0.01 240 / 0.96)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            animation: "fadeIn 0.2s ease both",
          }}
        >
          <div
            className="relative w-full"
            style={{
              width: "calc(100% - 32px)",
              maxWidth: 520,
              animation: "slideUp 0.35s cubic-bezier(.2,.8,.2,1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full rounded-[12px] overflow-hidden border border-white/10 bg-secondary p-4 sm:p-6"
              style={{ boxShadow: "0 32px 80px -16px oklch(0.04 0.01 240 / 0.8)", boxSizing: "border-box" }}
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                This portfolio is optimized for desktop view
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For the best experience, please view this site on a desktop or larger tablet.
              </p>
              <div className="mt-4 flex justify-end gap-3">
                <a
                  href="https://instagram.com/shanzster.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  View on Instagram
                </a>
                <button
                  onClick={() => setShowMobileModal(false)}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Continue anyway
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </QueryClientProvider>
  );
}
