<script>
  import data from "$lib/data.json";
</script>

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

<main>
  <h1>simulationswarm is a curated index of asset collections and design reference collages. stop adding new collections to a word doc—add them here instead.</h1>

  {#each data as listing}
    <article>
      <img src="/img/{listing.preview}" alt={listing.name} />
      <h2>
        <a href={listing.href} target="_blank">{listing.name}</a>
      </h2>
      <p>{listing.desc}</p>
      <div>
        <p>{listing.color}</p>
        <p>{listing.type}</p>
      </div>

    </article>
  {/each}
</main>

<style>
  article {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem 0;
    max-width: 500px;
  }

  article > img {
    width: 100%;
  }

  article > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
</style>
