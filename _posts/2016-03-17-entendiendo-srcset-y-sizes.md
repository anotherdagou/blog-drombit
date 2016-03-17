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

### srcset + densidad de pixeles

En esta configuración le indicamos al navegador una serie de imágenes las cuales tienen un identificador que determina para que densidad de pixeles debe de mostrarse la imagen, este identificador  se determina indicando: **numero positivo seguido de la letra X**.

```html
<img
	src = "http://placehold.it/400x250"
	alt = "srcset images"
	srcset = "http://placehold.it/400x250 1x,
			 http://placehold.it/800x250 2x"
>
```

Aquí le estamos diciendo al navegador: Si no tienes compatibilidad con srcset, toma como base la imagen definida en src. Si tienes compatibilidad con srcset te ofrezco dos imagenes: una para dispositivos con una densidad de pixeles 1x y otra para dispositivos con una densidad de pixeles 2x.

Con esta información el navegador podrá determinar que imagen mostrarle al usuario. 

Veamos un ejemplo en una pantalla con una densidad de pixeles de 1x:

![srcset + densidad de pixeles]({{site.baseurl}}/uploads/srcset+densidad+de+pixeles.png)
*Aquí el navegador selecciona la imagen con densidad de pixeles 1x.*

Veamos ahora un ejemplo en una pantalla con una densidad de pixeles de 2x:

![srcset + densidad de pixeles 2x]({{site.baseurl}}/uploads/srcset+densidad+de+pixeles-2x.png)
*Aquí el navegador selecciona la imagen con densidad de pixeles 2x.*

Con esta estrategia nos aseguramos de mostrarle al usuario la mejor imagen que se tiene para su dispositivo en base a la densidad de pixeles del mismo.

### srcset + tamaño de imagen

En esta configuración le indicamos al navegador una serie de imágenes las cuales tienen un identificador que determina el tamaño de las diferentes images, este identificador se determina indicando: **tamaño de la imagen seguido de la letra W**.

```html
<img
	src = "http://placehold.it/400x250"
    alt = "srcset images"
	srcset = "http://placehold.it/400x250 400w,
			 http://placehold.it/800x250 800w"
>
```

Aquí le estamos diciendo al navegador: Si no tienes compatibilidad con srcset, toma como base la imagen definida en src. Si tienes compatibilidad con srcset te ofrezco dos imagenes una con un tamaño de ancho de **400px** y otra con un tamaño de ancho de **800px**.

Veamos que sucede si visualizamos el contenido en diferentes pantallas.

![srcset + tamaño de imagen]({{site.baseurl}}/uploads/srcset-w.png)

Analizando el resultado del ejemplo anterior obtenemos:

| Dipositivo | Resolución | Densidad de pixeles | Imagen mostrada |
| ---------- | ---------- | ------------------- | --------------- |
| Desktop    | 800x600    | 1x                  | 800w			  |	
| iPad Mini  | 1024x768   | 2x					| 800w			  |
| iPhone 6   | 375x667    | 2x                  | 800w            |

Ante estos resultados nos surge la pregunta: **¿como esta el navegador determinando que imagen mostrar?** Para responder esta pregunta **el navegador usa el valor descriptor establecido en el atributo srcset y lo divide entre el tamaño de la pantalla en la cual se esta visualizando el contenido.**

El resultado de esta operación le ayuda al navegador a decidir cual es la imagen más cercana a la densidad de pixeles del dispositivo.

| Dipositivo | Resolución | Cálculos del navegador | Densidad de pixeles | Imagen mostrada |
| ---------- | ---------- | -----------------------| ------------------- | --------------- |
| Desktop    | 800x600    | 800w/800= 1 <br> 400w/800= .5           | 1x                  | 800w			  |	
| iPad Mini  | 1024x768   | 800w/1024 = .78 <br> 400w/1024 = .39       | 2x					 | 800w			  |
| iPhone 6   | 375x667    | 800w/375= 2.13 <br> 400w/375= 1.0        | 2x                  | 800w            |









