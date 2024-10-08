

/// recurses CSS

https://lenguajecss.com/css/
https://web.dev/css
https://developer.mozilla.org/en-US/docs/Web/CSS

/////CSS Combinators 

There are four different combinators in CSS:

*descendant selector (space)
*child selector (>)
*adjacent sibling selector (+)
*general sibling selector (~)

*Descendant Selector
The descendant selector matches all elements that are descendants of a specified element.

The following example selects all <p> elements inside <div> elements: 

div p {
  background-color: yellow;
}

Child Selector (>)
The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

div > p {
  background-color: yellow;
}


Adjacent Sibling Selector (+)
The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

div + p {
  background-color: yellow;
}

General Sibling Selector (~)
The general sibling selector selects all elements that are next siblings of a specified element.

The following example selects all <p> elements that are next siblings of <div> elements: 

div ~ p {
  background-color: yellow;
}


///// Colors 
RGB / HEX #FFFFFF > #FFF  - >> uso general 
RGBA  > add transparence channel between 0-1
LSH
oklch

vs color picker > 

currentColor  > valor actual en el selector


//// fonts

fallbacks**  si el usuario no tiene la fuente , pasa a otra   
ej: font-family: system-ui





/////// UNITS  

- px > only for specifics things like borders , 
- % > depends on his father 
- rem > route element 
- vp > 
 *50% del view port height  50vh 
 *50% del view port width 50vw

fontsize > rem
paddings , borders , spaces in general could be > em 

**
rem > deffault values 
em > deppends his father 
***


///// inheritance  

there are properties that have inheritance and others do not . 

can search here https://developer.mozilla.org/en-US/docs/Web/CSS


border ej: hoover  change de content , jumps  
contorn ( outline)


pseudo classes 
:hover, :active, :focus, :focus-within, :focus-visible  , etc

ej: li:first-child ( only first el from list )


//// Selectors and cascade //// important 
//// specificity ** ///// 



fallbacks

ej :

p {
    color: blue ; 
    color: red ;  // if the browser doesnt run this element it will take the upper
}


box - padding - border - margin 

 property > box-sizing:  border-box;



/// flex 

display:flex > convertir 

justify-content > alinea elementos eje horizontal
align-items > alinea elementos eje  vertical eje transv
flex-direction > direccion del eje  row-reverse //column // column-reverse

order > manipulate order of elements ej order: 1, -1 etc

align-self > similar to align-items but its for an specific element  
alinea un elemento flex a lo largo del eje transv
ej class > .yellow{

}

flex-wrap > especifica si los elm flex son forzados a una solo linea o  se envuelven alrededor de lineas adicionales  ( en las cajas)



flex-flow > shorthand for flex-direction nad flex-wrap

align-content > alinea las lineas de un CONT flex cuando exista mas espacion en el eje transv

flex-flow:wrap-reverse column-reverse;


flex-basis: gives space to elements

flex-grow: 



/////  GRID ///// 

use fractions instead px,rem,em  

grid-template-columns: 
2fr, 1fr,2fr ; // repeat(#columns, 1fr) repeat(#columns/2, 1fr 2fr)

grid-column-start / end
grid-row-start /end 


grid-template-columns: repeat(8, 12.5%)  // function repeat












RESET - NORMALIZE 


RESET TEMPLATE /// 

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


display : flow-root > contiene elementos flotantes dentro del bloque segun el contenido 

overflow:hidden  > limita el contenido ej con los bordes

// columns 
beak-inside : avoid > evita que el contenido del bloque- linea se colpase( responsive)
break-before : >

white-space: nowrap > text in the same line  