---
layout: post
description: Entendiendo como funciona srcset y sizes para el uso de imágenes en el diseño responsivo
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

En el siguiente ejemplo hacemos una prueba en un dispositivo Nokia Lumia 520 con una resolución de 320x533px y una densidad de pixeles de 1.4x el resultado obtenido es el siguiente:

![srcset en nokia 520]({{site.baseurl}}/uploads/srcset-nokia.png)

Si aplicamos los cálculos del navegador tenemos:

- 800w/320 = 2.5
- 400w/320 = 1.25

En este caso la imagen más cercana a la densidad de pixeles de la pantalla es la imagen de 400px.

### srcset + sizes

Como hemos venido platicando a lo largo de este articulo, srcset es un atributo que le pasa información al navegador para que este determine cual es la mejor imagen disponible a mostrar de acuerdo a la pantalla que esta consumiendo el dispositivo. Existe otro atributo que le provee información adicional al navegador este es el atributo **sizes**.

Por defecto el navegador no conoce el tamaño de la imagen que queremos mostrar, a menos que:

- Indiquemos el atributo width y height en la etiqueta `img`
- Se cargue el DOM de nuestro sitio

Es aqui cuando Sizes entra en acción, con sizes podemos pasarle al navegador una serie de cadenas en la cual le indicamos los tamaños que deseamos tenga nuestra imagen dependiendo el tamaño de pantalla que le indiquemos (utilizando condiciones media query).

Este atributo solo entrara en acción cuando en el atributo srcset se indique un recurso con el identificador W. La sintaxis para este atributo es:

```
sizes=“(condición media query) ancho de la imagen,
       (condición media query) ancho de la imagen,
                   ancho por defecto de la imagen"
```

- **Condición media query**: aquí se define una condición media query común, las únicas condiciones que no se permiten son las de tipo screen o print.
- **Ancho de la imagen**: es es tamaño que queremos que tenga la imagen si la condición se cumple. Podemos usar diferentes unidades de medidas como em, rem, px, y viewport width. Excepto %.
- **Ancho por defecto de la imagen**: este elemento funcionara como un valor por defecto en caso de que la condición no se cumpla.

Veamos un ejemplo:

```html
 <img
	src = "http://placehold.it/400x250"
	alt = "srcset images"
	srcset = "http://placehold.it/400x250 400w,
              http://placehold.it/800x250 800w"
	sizes="(min-width: 600px) 50vw, 100vw"
    >
```

Aquí lo que le decimos al navegador es: si la pantalla en la que se esta visualizando el recurso tiene un ancho mínimo de 600px muestra la imagen al 50%(50vw) del view port. Si esta condición no se cumple mostrar la imagen al 100%(100vw) del view port.

![srcset + sizes]({{site.baseurl}}/uploads/srcset-sizes.png)
*Pantalla de 800x600px, densidad de pixeles de 1x.*

En este ejemplo se cumple la condición definida en `sizes="(min-width: 600px) 50vw, 100w”`, por lo tanto el navegador decide mostrar la imagen que es más acorde a estas condiciones, en este caso la imagen de 400px de ancho.

![srcset + sizes + iphone]({{site.baseurl}}/uploads/srcset-sizes-iphone.png)
*Pantalla de 414x736px , densidad de pixeles de 3px*

En este ejemplo, no se cumple la condición de `sizes="(min-width: 600px) 50vw, 100w”`, por lo tanto el navegador decide mostrar la imagen que establecimos por defecto, en este caso el 100% de ancho.

Veamos un ultimo ejemplo interesante:

![srcset + sizes + 2x]({{site.baseurl}}/uploads/srcset-sizes-2x.png)
Pantalla de 768x1024px, densidad de pixeles 2x

En este ejemplo, se cumple la condición de `sizes="(min-width: 600px) 50vw, 100w”`, sin embargo a diferencia de nuestro primer ejemplo, no se muestra la imagen de 400px sino la de 800px. La razón de esto es por que el navegador a la hora de tomar la decisión de que imagen mostrar tiene como prioridad principal la densidad de pixeles de la pantalla en la cual se esta visualizando el recurso.

## Anotaciones finales

El atributo srcset es un buen recurso que nos ayudara a compartir información con el navegador para que este sepa cual es la mejor imagen que debe mostrarle al usuario. Entenderlo en un principio puede ser muy enredado. Pero una vez que entendemos su funcionamiento, podremos tomar mejores desiciones y definir las reglas que el navegador seguirá para mostrar las imagenes adecuadas.

Su uso es aceptado en diferentes navegadores, lo cual lo hace un buen recurso para utilizar en el uso de imagenes en el diseño respondido.

¿Tienen algún tip interesante en su uso?
