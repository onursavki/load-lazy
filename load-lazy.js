document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
  const images = document.querySelectorAll(&quot;img&quot;);
  images.forEach((img) =&gt; {
    if (!img.hasAttribute(&quot;loading&quot;)) {
      img.setAttribute(&quot;loading&quot;, &quot;lazy&quot;);
    }
  });
});