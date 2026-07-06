import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-display-sm font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button href="/" className="mt-8">Back to Home</Button>
    </main>
  );
}
