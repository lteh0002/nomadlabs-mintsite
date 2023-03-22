<script>
  import "../app.css";
  import About from "./About.svelte";
  import Header from "./Header.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
</script>

<Header />
<slot />
<About />
<Contact />
<Footer />
