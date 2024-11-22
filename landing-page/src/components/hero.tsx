import { Button } from "@/components/ui/button"

export function Hero({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center space-y-8 sm:space-y-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your compelling headline goes here
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              A clear and concise explanation of your product or service. Highlight the main benefit that sets you apart from competitors.
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}