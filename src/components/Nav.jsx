function Nav() {
  return (
    <nav className="bg-white flex justify-around items-center p-2">
      <h1 className="font-bold text-2xl">Social</h1>
      <input
        type="text"
        className="rounded-full bg-zinc-200 py-1 px-4 md:w-96"
        placeholder="Search"
      />

      <img src="profile.webp" className="bg-white rounded-full w-8 h-8" />
    </nav>
  );
}

export default Nav;
