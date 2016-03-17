---
layout: post
comments: "true"
description: Entendiendo como funciona srcset y sizes para el uso de imagenes en el diseño responsivo
author: Diego
date: "2016-03-17 16:14 -0500"
categories: diseno
tags: 
  - html
  - Responsive Design
  - Diseño Responsivo
published: false
title: Entendiendo SRCSET y SIZES
---

Hoy en día los contenidos en la web son consumidos en diferentes dispositivos, afortunadamente diferentes corrientes (Responsive Web Design, Mobile First, Adaptative Design, por mencionar algunos) han permitido diseñar sitios y aplicaciones web que puedan vivir en diferentes pantallas.

Uno de los recursos más importantes en la web son las imágenes. La técnica más utilizada para asegurarnos de que las imágenes se adapten a diferentes pantallas es definir la propiedad `max-width: 100%` a la etiqueta `img`.

En el siguiente ejemplo podemos observar una imagen de 1280x450px  la cual ocupa el 100% de la ventana en diferentes tamaños de la pantalla.

![Max Width en imagenes]({{site.baseurl}}/uploads/max-width-img.png)

Como podemos observar cumplimos el objetivo de que nuestra imagen se vea correctamente en cualquier tamaño de pantalla, sin embargo tenemos un problema.

Digamos que nuestra imagen esta siendo consumida en una pantalla con una resolución de pantalla de 600x960px. Estaríamos mostrando una imagen de 1280x450px en una pantalla con menor resolución. Lo ideal en este caso sería mostrar una imagen más adecuada a nuestro medio; por ejemplo una imagen de 640px225px.

Es aqui donde **srcset** y **sizes** entran en acción. Estos dos atributos de la etiqueta `img` le ofrecen información al navegador, esta información le permite determinar cual es la mejor imagen a mostrar dependiente del medio en el que se este consumiendo la imagen.

## srcset

srcset es un atributo que se añade a la etiqueta `img`, como mencionamos anteriormente lo que buscamos con srcset es poder darle información al navegador para que este tome la decisión de que imagen mostrarle al usuario.

En el atributo srcset se define una serie de imágenes que el navegador tendrá a su disposición, esta serie de imágenes pueden ser definidas en base a dos criterios:

- Por Densidad de pixeles.
- Por tamaño de imagen.

Cuando añadimos el atributo srcset, los navegadores que soporten este atributo tomarán como base la serie de imágenes definidas, en caso de que el navegador no soporten este atributo, tomará como base el atributo **src**.
