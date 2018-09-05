{% extends './layout.swig' %}
{% block title %}users{% endblock %}
<!-- 注意我这里并没有复写{% block head %}{% endblock %}这个块 -->
{% block content %}
  <div>
    <h3>hello swig</h3>
    <p>swig extends</p>
    <!-- if -->
    {% if name === 'orient' %}
      hello orient
    {% endif %}

    <!-- if else -->
    {% if name === 'orient' %}
      hello orient again
    {% elseif name === 'dfjk' %}
      hello dfjk
    {% else %}
      hello other
    {% endif %}

    <!-- for -->
    <h3>for循环</h3>
    {% for item in forLoop %}
      <p>{{loop.index}}-{{item}}</p>
    {% endfor %}

    <h3>内置过滤器</h3>
    {% for item in insideFilter %}
      <li>{{item}}</li>
    {% endfor %}

    <h3>use filter</h3>
    <p>date: {{testDate|date('Y-m-d')}} ({{testDate.toString()}})</p>
    <p>{{name|title}}</p>

    <h3>set命令 <span>用来设置一个变量，在当前上下文中复用</span></h3>
    {% set foo=['a', 'b', 'c'] %}
    {% for item in foo %}
      <p>{{item}}</p>
    {% endfor %}
  </div>
{% endblock %}