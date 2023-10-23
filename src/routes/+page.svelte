<script>
  import data from "$lib/data.json";
</script>

<h1>simulationswarm is a curated index of asset collections and design reference collages.</h1>

<main>
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
  main {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  article {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem 0;
    max-width: 500px;
    height: fit-content;
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
