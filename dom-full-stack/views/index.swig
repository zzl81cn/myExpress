<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ pagename }}</title>
  </head>
  <body>
    <h3>{{ pagename|title }}</h3>
    <ul>
    {% for author in authors %}
      <li{% if loop.first %} class="first"{% endif %}>
        {{ author }}
      </li>
    {% endfor %}
    </ul>
  </body>
</html>