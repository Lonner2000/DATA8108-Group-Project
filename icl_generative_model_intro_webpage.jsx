import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Sparkles, Network, GitBranch, BookOpen, Layers, Orbit, Binary, Boxes, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "question", label: "Core Question" },
  { id: "icl", label: "What is ICL" },
  { id: "gen", label: "What is Generative Modeling" },
  { id: "connection", label: "The Connection" },
  { id: "mechanisms", label: "Mechanisms" },
  { id: "implications", label: "Implications" },
];

const mechanisms = [
  {
    icon: Brain,
    title: "Conditioning as temporary adaptation",
    text: "In-context learning can be viewed as generation conditioned on a rich prompt. The prompt is not just input text; it functions like a temporary task specification that reshapes the model’s predictive distribution.",
  },
  {
    icon: Layers,
    title: "Prompt as latent variable carrier",
    text: "A generative model often conditions on a latent code, class label, or noisy state. In ICL, the prompt can play a similar role: it carries hidden information about the task, format, and desired mapping from input to output.",
  },
  {
    icon: Orbit,
    title: "Inference without parameter update",
    text: "A classical learner updates parameters when data arrive. In ICL, the model instead performs a forward-pass form of inference over the prompt, using generation itself as the mechanism of adaptation.",
  },
  {
    icon: GitBranch,
    title: "Learning conditional distributions",
    text: "At a formal level, both ICL and generative modeling revolve around estimating conditional distributions. The difference is often which variables are treated as observed context, which are treated as latent, and how sampling is performed.",
  },
];

const comparisons = [
  [
    "Training objective",
    "Learn from next-token prediction over many contexts.",
    "Learn a data distribution or a structured conditional distribution."
  ],
  [
    "Input role",
    "The context acts like a temporary dataset or task description.",
    "The condition acts like guidance, side information, or partial observation."
  ],
  [
    "Adaptation mechanism",
    "Fast adaptation happens inside the forward pass.",
    "Generation adapts by conditioning and sampling from the learned distribution."
  ],
  [
    "Main question",
    "How does the model infer the rule from examples in context?",
    "How does the model represent and sample plausible data?"
  ],
  [
    "Unifying lens",
    "Context changes the predictive distribution.",
    "Conditioning changes the predictive / sampling distribution."
  ],
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-7">
        <div className="text-sm uppercase tracking-[0.24em] text-slate-500">{eyebrow}</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Formula({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/85 px-5 py-4 font-mono text-sm text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

export default function ICLAndGenerativeModelConnectionPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(241,245,249,1))] text-slate-800">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-30 mb-10 rounded-3xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Essay-style webpage</div>
              <div className="text-lg font-semibold text-slate-950">In-Context Learning and Generative Models</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <section id="hero" className="scroll-mt-24">
          <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <Badge className="mb-4 rounded-full bg-slate-900 text-white hover:bg-slate-900">A conceptual essay</Badge>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                In-context learning is not separate from generative modeling — it is one of its most interesting <span className="text-slate-500">conditional behaviors</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                This page focuses on a single theme: <strong>the connection between in-context learning (ICL) and generative models</strong>. The main claim is that a large language model learns a generative distribution over sequences, and ICL emerges when that distribution becomes rich enough to treat the prompt as a task-defining condition.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#connection"><Button className="rounded-full">See the main connection <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
                <a href="#mechanisms"><Button variant="outline" className="rounded-full">Mechanisms</Button></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="grid gap-4"
            >
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Binary className="h-5 w-5" /> One-sentence summary</CardTitle>
                </CardHeader>
                <CardContent className="leading-7 text-slate-600">
                  A generative model learns <em>what can come next under context</em>; in-context learning is what happens when the context itself encodes a new task, rule, or hypothesis class.
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5" /> Guiding perspective</CardTitle>
                </CardHeader>
                <CardContent className="leading-7 text-slate-600">
                  Rather than asking “why can a language model suddenly learn in context?”, it is often better to ask: “what kinds of conditional generative structure must be learned for such behavior to emerge?”
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <div className="my-16 rounded-[2rem] border border-slate-200 bg-slate-900 p-7 text-slate-100 shadow-sm">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-300">Thesis</div>
          <div className="mt-3 text-2xl font-semibold md:text-3xl">
            ICL can be understood as conditional generation plus implicit inference over the prompt.
          </div>
          <div className="mt-4 max-w-4xl leading-8 text-slate-300">
            The model is trained as a generative predictor, but at inference time the prompt supplies structured evidence: demonstrations, instructions, formatting conventions, or latent rules. The model then generates outputs consistent with that evidence, as if it had adapted — even though its parameters do not change.
          </div>
        </div>

        <div className="space-y-20">
          <Section id="question" eyebrow="Core question" title="Why should these two topics be discussed together?">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle>Standard presentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-7">
                  <p>
                    In many introductions, generative modeling is presented as the problem of learning a data distribution, while in-context learning is presented as a surprising ability of large language models to solve new tasks from examples in the prompt.
                  </p>
                  <p>
                    This makes them sound like distinct phenomena: one about density estimation and sampling, the other about adaptation and reasoning.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
                <CardHeader>
                  <CardTitle>Better presentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 leading-7">
                  <p>
                    A more unified view is that both concern <strong>conditional structure</strong>. A generative model learns how outputs depend on context. In ICL, the context becomes unusually informative: it may contain a task description, examples, hidden regularities, or a mini-dataset.
                  </p>
                  <p>
                    Under this view, ICL is not outside generative modeling. It is an especially rich regime of conditional generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="icl" eyebrow="What is ICL" title="In-context learning as fast adaptation through context">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" /> Informal definition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-7">
                  <p>
                    In-context learning refers to the phenomenon that a model can perform a task by reading examples or instructions in the prompt, without updating its parameters. A few input-output pairs may be enough for the model to continue with the correct mapping.
                  </p>
                  <p>
                    Conceptually, the model behaves as though it first infers the task from the prompt and then solves a query under that inferred task.
                  </p>
                  <Formula>
                    y ~ p<sub>θ</sub>(y | x, c)
                  </Formula>
                  <p>
                    Here <strong>c</strong> denotes the context, which may include demonstrations, instructions, or exemplars. The crucial point is that the conditional distribution changes when the context changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-slate-900 text-slate-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Network className="h-5 w-5" /> What makes it feel like learning?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 leading-7 text-slate-300">
                  <p>
                    It feels like learning because the model changes its behavior based on data provided at test time.
                  </p>
                  <p>
                    But unlike gradient-based learning, the change is implemented by attention, representation updates, and conditional generation inside one forward pass.
                  </p>
                  <p>
                    This is why ICL is often described as <strong>fast, implicit, in-activation adaptation</strong> rather than parameter learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="gen" eyebrow="What is generative modeling" title="Generative models learn distributions by learning how to continue, complete, or refine data">
            <div className="space-y-6">
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Boxes className="h-5 w-5" /> Broad definition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-7">
                  <p>
                    A generative model learns a probability law over data, either directly or implicitly. It can then sample new data, score candidates, or fill in missing parts under conditioning.
                  </p>
                  <p>
                    In sequence models such as language models, the generative factorization is especially explicit:
                  </p>
                  <Formula>
                    p(x_1, ..., x_T) = ∏<sub>t=1</sub><sup>T</sup> p(x_t | x_&lt;t)
                  </Formula>
                  <p>
                    The model does not merely memorize strings. It learns which continuations are plausible given a prefix. This is already a form of structured conditional generation.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Autoregressive view", "Generate by repeatedly predicting the next token under the current context."],
                  ["Latent-variable view", "Generate by conditioning on hidden factors that summarize abstract causes."],
                  ["Refinement view", "Generate by gradually transforming a simple object into a structured one."],
                ].map(([title, desc]) => (
                  <Card key={title} className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-slate-600">{desc}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section id="connection" eyebrow="The main connection" title="ICL emerges when generative conditioning becomes powerful enough to infer a task from context">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle>Step 1: Pretraining teaches conditional continuation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-7">
                  <p>
                    During training, a language model repeatedly solves the problem: given a prefix, what is likely to come next? Over a sufficiently broad dataset, the prefixes implicitly encode facts, styles, tasks, conventions, and reasoning traces.
                  </p>
                  <p>
                    So the model learns much more than surface completion. It learns how different contexts determine different continuation rules.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle>Step 2: A prompt can specify a task distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-7">
                  <p>
                    At inference time, a prompt containing demonstrations can be interpreted as evidence about the hidden task. If the model has learned to recognize such structure, it can condition its output on the inferred task even though that task was never explicitly named.
                  </p>
                  <p>
                    In this sense, the prompt works similarly to a latent variable or conditioning signal in a generative model.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-slate-900 text-slate-100 shadow-sm lg:col-span-2">
                <CardHeader>
                  <CardTitle>The compressed statement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 leading-8 text-slate-300">
                  <p>
                    <strong className="text-white">Generative modeling</strong> says: learn a distribution over outputs under conditioning.
                  </p>
                  <p>
                    <strong className="text-white">In-context learning</strong> says: when the conditioning context contains enough task information, generation behaves like learning.
                  </p>
                  <p>
                    Therefore, ICL can be viewed as <strong className="text-white">conditional generation where the context encodes a hypothesis about the task</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="mechanisms" eyebrow="Mechanisms" title="Four mechanisms behind the connection">
            <div className="grid gap-5 md:grid-cols-2">
              {mechanisms.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <Card className="h-full rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Icon className="h-5 w-5" /> {m.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="leading-7 text-slate-600">{m.text}</CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </Section>

          <Section id="implications" eyebrow="Implications" title="What this viewpoint helps explain">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                <CardHeader>
                  <CardTitle>Comparison table</CardTitle>
                  <CardDescription>ICL and generative modeling are not identical, but they become easier to reason about under one language.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="grid grid-cols-3 bg-slate-50 text-sm font-medium text-slate-700">
                      <div className="border-r border-slate-200 p-3">Aspect</div>
                      <div className="border-r border-slate-200 p-3">In-context learning</div>
                      <div className="p-3">Generative modeling</div>
                    </div>
                    {comparisons.map(([a, b, c]) => (
                      <div key={a} className="grid grid-cols-3 text-sm leading-6 text-slate-600">
                        <div className="border-r border-t border-slate-200 bg-white p-3 font-medium text-slate-800">{a}</div>
                        <div className="border-r border-t border-slate-200 bg-white p-3">{b}</div>
                        <div className="border-t border-slate-200 bg-white p-3">{c}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-5">
                <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                  <CardHeader>
                    <CardTitle>Why prompting works at all</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-7 text-slate-600">
                    If a model has learned a sufficiently expressive family of conditional distributions, then changing the prompt can meaningfully change behavior. Prompt engineering is therefore not an accidental hack; it is a way of steering the learned generative conditionals.
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
                  <CardHeader>
                    <CardTitle>Why scale matters</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-7 text-slate-600">
                    Rich in-context learning likely requires both broad pretraining coverage and enough model capacity to represent subtle relationships between context and continuation. In other words, stronger generative modeling yields more capable in-context behavior.
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 text-slate-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Final takeaway</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 leading-7 text-slate-300">
                    <p>
                      In-context learning is best viewed not as a separate bolt-on ability, but as a manifestation of a well-trained conditional generative model.
                    </p>
                    <p>
                      The prompt provides evidence; the model performs implicit inference; generation produces behavior consistent with the inferred task.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
