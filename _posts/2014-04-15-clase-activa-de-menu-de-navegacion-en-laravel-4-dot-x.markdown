---
layout: post
title: "Clase activa de menú de navegación en Laravel 4.x"
description: Uso de Request para manejos de rutas. 
author: Alberto
date: 2014-04-15 09:33:56
comments: true
# Categories[diseno o desarrollo u opinion ]
categories: 
  - desarrollo
tags:
  - PHP
---

Para este pequeño tutorial crearemos un pequeño menú de navegación con una clase activa. Los pasos a seguir es contar con una estructura básica del menú en un archivo _menu.blade.php_.

# Estructura básica de HTML

{% highlight HTML linenos%}
<nav>
 <ul>
   <li class=”active”><a href=””>Home</a></li>
   <li><a href=””>About us</a></li> 
   <li><a href=””>Portfolio</a></li>
   <li><a href=””>Contact</a></li>
 </ul>
</nav>
{% endhighlight %}

Crear los estilos necesarios para la manipulación de los elementos activos.

{% highlight css linenos%}
nav {
  width: 300px;
}
nav li {
  display: block;
  padding: 10px 15px;
  position: relative;
}
nav li a {
  color: #428BCA;
  text-decoration: none;
}
nav li.active {
  background-color: #428BCA;
  color: #FFFFFF;
}
nav li.active a {
  color: #FFF;
}
{% endhighlight %}

# Aplicando la clase activa según la URL

{% highlight HTML linenos%}
{% raw %}
<nav>
  <ul>
    <li class=”{{ Request::is( ‘/’) ? ‘active’ : ‘’ }}”>
      <a href=”{{ URL::to( ‘/’) }}”>Home</a>
    </li>
    <li class=”{{ Request::is( ‘about-us’) ? ‘active’ : ‘’ }}”>
      <a href=”{{ URL::to( ‘about-us’) }}”>About us</a>
    </li> 
    <li class=”{{ Request::is( ‘portfolio’) ? ‘active’ : ‘’ }}”>
      <a href=”{{ URL::to( ‘portfolio’) }}”>Portfolio</a>
    </li>
    <li class=”{{ Request::is( ‘contact’) ? ‘active’ : ‘’ }}”>
     <a href=”{{ URL::to( ‘contact’) }}”>Contact</a>
    </li>
  </ul>
</nav>
{% endraw %}
{% endhighlight %}

Lo más común es crear este tipo de estructuras en un layout donde pueda ser utilizado desde cualquier vista. Puedes acceder al código del script desde [aquí](https://gist.github.com/apat/10558555)