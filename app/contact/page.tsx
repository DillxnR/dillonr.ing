import Link from 'next/link'
import { Button } from '@/components/ui/button'

const contactChannels = [
  {
    label: 'Email',
    value: 'hello@dillonr.ing',
    href: 'mailto:hello@dillonr.ing',
    description: 'The fastest way to reach me.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dillon-ring',
    href: 'https://linkedin.com/in/dillon-ring',
    description: 'Connect for ongoing updates or to explore collaboration opportunities.',
  },
  {
    label: 'GitHub',
    value: 'github.com/Dillon1000',
    href: 'https://github.com/Dillon1000',
    description: 'Peek at how I write code, some of my projects, and what I\'m working on.',
  },
]

const faqs = [
  {
    question: 'What types of projects work best?',
    answer:
      'I join teams shipping net-new products, or companies without dedicated engineering teams who need a custom built product for the web.',
  },
  {
    question: 'How soon can we start?',
    answer:
      'As soon as you have a project in mind, let me know and we can start a conversation.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-card/90">
        <div className="mx-auto flex max-w-5xl justify-start px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Link href="/">
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </Button>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-24 pt-28 text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">Let’s ship something that matters.</h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl">
            If you're interested in working together, let's talk. Bring your project, timeline, and constraints, and I'll respond with next steps.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:hello@dillonr.ing?subject=Project Inquiry">Let's talk →</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card/60 p-6 transition-colors hover:border-primary"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">{channel.label}</p>
                  <p className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary">{channel.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{channel.description}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-primary">Open channel →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-border bg-card/70 p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className="text-sm text-muted-foreground">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-background/90 p-10 text-left backdrop-blur-md">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Ready to talk?</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Send me what you're working with, mission, budget, timeline, and goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="mailto:hello@dillonr.ing?subject=Project Inquiry">Let's talk →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
