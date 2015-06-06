---
layout: post
title: "Primeros pasos con Jekyll"
description: Conociendo como funciona Jekyll
author: Diego
date: 2014-04-14 17:05:20
comments: true
# Categories[diseno o desarrollo u opinion ]
categories:
  - desarrollo
tags:
  - Jekyll
---

**Jekyll** es un generador de sitios estáticos construido en **Ruby**. Los generadores de sitios estáticos pueden ser utilizados para diferentes propósitos (portafolios, sitios de empresa, blogs, etc.). Una característica de este tipo de sistemas es la ausencia de bases de datos y sistemas complejos; Hablamos de sitios puros y duros en HTML. Como bien se podrán imaginar si queremos construir un blog con puro HTML, esto de entrada sonaría un poco descabellado, Pero, los generadores de sitios estáticos como Jekyll se encargan de hacer el trabajo pesado.

# Detalles técnicos de Jekyll 

Jekyll cuenta con tres pilares:

1. [Markdown](http://daringfireball.net/projects/markdown/syntax)
2. [Liquid](http://docs.shopify.com/themes/liquid-basics)
3. [Yaml](http://www.yaml.org/)

Estos tres pilares funcionan juntos para lograr la "magia". **Markdown** es un lenguaje que convierte texto a HTML. En Jekyll el será el encargado de manejar el contenido. Después de que te familiarices con Markdown te encontraras escribiendo contenido de una manera muy rápida. 

**Liquid** es un lenguaje construido por **Shopify**, liquid sera el encargado de generar el sistema de templating para las vistas, podemos separar diferentes secciones del sitio e ir haciendo llamadas a estas secciones como se haría con un lenguaje de programación como PHP. 

Finalmente **Yaml** es un lenguaje que nos permite definir parámetros que se repiten a lo largo de nuestro sitio, tales como: titulo de la pagina, categoría, fecha de creación de una entrada, autor de la entrada, etc.


A grandes rasgos el proceso de generar una pagina en Jekyll es el siguiente: 

1. Generas un template con Liquid.
2. Estableces parámetros que serán utilizados en diferentes vistas con la ayuda de YAML.
3. Escribes tu contenido en Markdown.
4. Jekyll se encarga de generar una carpeta con el HTML del contenido generado. Esta carpeta es la que subirás a tu servidor.

# ¿Cómo funciona funciona Jekyll?

Para entender como funciona Jekyll lo mejor será comenzar a jugar con el, lo primero que debemos hacer es descargar Jekyll, para ello ingresa a tu consola y escribe lo siguiente:

{% highlight ruby%}
~ $ sudo gem install jekyll
{% endhighlight %}

Se descargaran los paquetes pertinentes y podemos empezar a utilizar Jekyll. Nos dirijimos al directorio en el cual deseamos crear nuestro primer proyecto con y escribimos lo siguiente.

{% highlight ruby%}
~ $ jekyll new mi-sitio-jekyll
~ $ cd mi-sitio-jekyll
~ $ jekyll serve
{% endhighlight %}

Si todo sale bien se generara nuestro sitio y lo podremos ver funcionando entrando a la siguiente URL http://0.0.0.0:4000/

![Jekyll Home]({{site.baseurl}}assets/img/jekyll-inicio.png)

Si entramos al directorio de nuestro proyecto podremos ver la siguiente estructura de archivos.

~~~~
    # Directorio mi-sitio-jekyll

    ├── _config.yml
    ├── _layouts
        └── default.html
        └── post.html
    ├── _posts
    │   ├── 2014-04-10-welcome-to-jekyll.markdown
    ├── _site
    ├── css
    │   └── main.css
    └── index.html
~~~~

Si observamos nuestro directorio encontramos una carpeta llamada **_site**, esta carpeta contiene nuestro sitio web estático, el cual podrá ser transferido a nuestro hosting y podremos ver nuestro sitio funcionando. 

Lo interesante en este punto es entender como se genero esta carpeta. Veamos el archivo index.html

{% highlight HTML linenos %}
{% raw %}
---
layout: default
title: Your New Jekyll Site
---
<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li>
        <span>{{ post.date | date_to_string }}</span> &raquo; 
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
{% endraw %}
{% endhighlight %}

Cuando ejecutamos el comando en consola **jekyll serve** . El archivo **index.html** manda a llamar un Layout llamado **default** este archivo se encuentra dentro de la carpeta **_layouts**. Posteriormente se define un titulo para nuestra pagina index.html el cual es pasado hacia el layout que mandamos a llamar. Posteriormente encontramos una siglo **for** que recorre el directorio **_posts** si encuentra archivos dentro, carga los datos pertinentes, en este caso la fecha de la entrada y el titulo de la misma.

![Jekyll Home]({{site.baseurl}}assets/img/jekyll-inicio.png)

En siguientes entradas profundizaremos más en Jekyll, y veremos como utilizar variables con YAML, construir Layouts con Liquid y escribir el contenido con Markdown.


[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
