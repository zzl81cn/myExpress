<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ string }}</title>
  </head>
  <body>
    <h>{{ pagename|title }}</h>
    <ul>
    {% for author in authors %}
      <li{% if loop.first %} class="first"{% endif %}>
        {{ author }}
      </li>
    {% endfor %}
    </ul>
    <p>{{data.string}}</p>
    <ul>
      {% for item in data.array %}
      <li>{{ item.foo }} {{ item.bar }}</li>
      {% endfor %}
    </ul>
  </body>
</html>