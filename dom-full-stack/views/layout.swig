<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>{% block title %}{% endblock %}</title>
    {% block head %}{% endblock %}
    {% include './common/head.swig' %}
  </head>
  <body>
    {% block content %}{% endblock %}
  </body>
</html>