
// https://html.spec.whatwg.org/#htmlinputelement


<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное
  </script>
</body>


