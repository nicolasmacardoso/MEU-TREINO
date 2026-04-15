function App() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-sky-100/70 backdrop-blur md:p-12">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
          Tailwind CSS 4 ativo
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
          Meu treino
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          O projeto agora esta configurado com Tailwind no fluxo atual do Vite.
          Voce ja pode usar classes utilitarias direto nos componentes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <code className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-sky-300">
            npm run dev
          </code>
          <code className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            className="text-sky-600 font-bold"
          </code>
        </div>
      </section>
    </main>
  )
}

export default App
