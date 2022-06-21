import logo from '../../assets/vite.svg';

export function Main() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
        Vite Boilerplate!
      </h1>
      <img src={logo} alt="logo" />
      <h6 className="text-zinc-400 text-center hover:text-violet-500 transition-all cursor-default">
        vite | react | typescript | jest | testing-library | tailwindcss |
        storybook | eslint | plop | husky | commitlint | commitizen |
        lint-staged
      </h6>
    </div>
  );
}
