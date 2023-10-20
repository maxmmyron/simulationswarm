<header>
	<a href="/">simulationswarm</a>
	<form action="?/search" method="POST">
    <input type="text" name="search" placeholder="Search..." />
    <button type="submit">Search</button>
  </form>
  <form action="?/filter" method="POST">
    <select name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>

    <select name="type">
      <option value="icons">icon packs</option>
      <option value="pages">website collections</option>
      <option value="pages">font reference</option>
      <option value="pages">general reference</option>
    </select>

    <button type="submit">Filter</button>
  </form>

  <a href="/submit">Submit</a>
</header>

<slot />
