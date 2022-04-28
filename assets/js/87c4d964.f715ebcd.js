"use strict";(self.webpackChunkchilaquiles=self.webpackChunkchilaquiles||[]).push([[142],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),o=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=o(e.components);return r.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(t),m=n,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(b,l(l({ref:a},c),{},{components:t})):r.createElement(b,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7511:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),l=["components"],s={},u="An\xe1lisis de proyecto",o={unversionedId:"Manual Arquitectura/Plan de pruebas",id:"Manual Arquitectura/Plan de pruebas",title:"An\xe1lisis de proyecto",description:"Necesidad",source:"@site/docs/Manual Arquitectura/Plan de pruebas.md",sourceDirName:"Manual Arquitectura",slug:"/Manual Arquitectura/Plan de pruebas",permalink:"/Chilaquiles/docs/Manual Arquitectura/Plan de pruebas",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Manual Arquitectura/Plan de pruebas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ambiente local",permalink:"/Chilaquiles/docs/Manual Arquitectura/Configuracion/Ambiente local"},next:{title:"Stack",permalink:"/Chilaquiles/docs/Manual Arquitectura/Stack"}},c={},d=[{value:"Necesidad",id:"necesidad",level:2},{value:"Objetivos",id:"objetivos",level:2},{value:"Alcance",id:"alcance",level:2},{value:"Tipos de Pruebas",id:"tipos-de-pruebas",level:2},{value:"Riesgos y problemas",id:"riesgos-y-problemas",level:2},{value:"Log\xedstica de pruebas",id:"log\xedstica-de-pruebas",level:2},{value:"Objetivos de pruebas",id:"objetivos-de-pruebas",level:2},{value:"Recursos del sistema",id:"recursos-del-sistema",level:2},{value:"Ambiente de Prueba",id:"ambiente-de-prueba",level:2},{value:"Estimaci\xf3n y planificaci\xf3n",id:"estimaci\xf3n-y-planificaci\xf3n",level:2}],p={toc:d};function m(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"an\xe1lisis-de-proyecto"},"An\xe1lisis de proyecto"),(0,i.kt)("h2",{id:"necesidad"},"Necesidad"),(0,i.kt)("p",null,"APAC Quer\xe9taro I.A.P. emplea un sistema para llevar a cabo las evaluaciones peri\xf3dicas de las habilidades de sus alumnos y su progreso para de esta forma poder seguir avanzando con la terapia necesaria para el desarrollo de las mismas, actualmente el sistema de registro, rastreo y representaci\xf3n de evaluaciones de los alumnos es ineficiente, complicado, tardado y se lleva a cabo de manera manual en diferentes herramientas causando inconvenientes, p\xe9rdida de datos e incongruencia en los mismos. Consecuentemente se necesita una forma unificada y pr\xe1ctica para llevar un rastreo del progreso de las diferentes habilidades de los alumnos para as\xed saber en qu\xe9 etapa de su terapia se encuentran y las subsecuentes necesidades del alumno en cuanto a tratamiento y educaci\xf3n."),(0,i.kt)("h2",{id:"objetivos"},"Objetivos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En 15 semanas crear un sistema para monitorear a los alumnos en donde se espera reducir la carga de trabajo de 4 actividades a solo 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En 15 semanas incrementar la congruencia entre los datos de validaci\xf3n al reducir el uso de herramientas de 4 aplicaciones a solo una, siendo esta la soluci\xf3n.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En 15 semanas reduce el riesgo de p\xe9rdida de informaci\xf3n en un 100% al migrar sus datos f\xedsicos a un medio digital."))),(0,i.kt)("h1",{id:"estrategia-de-pruebas"},"Estrategia de pruebas"),(0,i.kt)("h2",{id:"alcance"},"Alcance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pruebas funcionales"),(0,i.kt)("li",{parentName:"ul"},"Pruebas integrales"),(0,i.kt)("li",{parentName:"ul"},"Pruebas de aceptaci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Pruebas de rendimiento")),(0,i.kt)("h2",{id:"tipos-de-pruebas"},"Tipos de Pruebas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pruebas automatizadas"),(0,i.kt)("li",{parentName:"ul"},"Pruebas manuales")),(0,i.kt)("h2",{id:"riesgos-y-problemas"},"Riesgos y problemas"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1awFqd8cQzFsxhcmgXcGoYqBDR6PUpxq6_Wtdmw-Qg3Q/edit#gid=297920461"},"Matriz de riesgos")),(0,i.kt)("h2",{id:"log\xedstica-de-pruebas"},"Log\xedstica de pruebas"),(0,i.kt)("p",null,"Sin alcance"),(0,i.kt)("h2",{id:"objetivos-de-pruebas"},"Objetivos de pruebas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pruebas funcionales",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validar que las funcionalidades del sistema cumplan con los objetivos "))),(0,i.kt)("li",{parentName:"ul"},"Pruebas integrales",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Replican el comportamiento del usuario final"))),(0,i.kt)("li",{parentName:"ul"},"Pruebas de aceptaci\xf3n",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validan la satisfacci\xf3n del cliente para cada funcionalidad implementada\t"))),(0,i.kt)("li",{parentName:"ul"},"Pruebas de rendimiento",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validan que el sistema funcione correctamente bajo mayor estr\xe9s.")))),(0,i.kt)("h2",{id:"recursos-del-sistema"},"Recursos del sistema"),(0,i.kt)("p",null,"Pruebas autom\xe1ticas en Laravel"),(0,i.kt)("h2",{id:"ambiente-de-prueba"},"Ambiente de Prueba"),(0,i.kt)("p",null,"Sin alcance"),(0,i.kt)("h2",{id:"estimaci\xf3n-y-planificaci\xf3n"},"Estimaci\xf3n y planificaci\xf3n"),(0,i.kt)("p",null,"Sin alcance"))}m.isMDXComponent=!0}}]);