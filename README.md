# NEXUS Learning - Landing Page

**🎉 Proyecto Finalizado - Versión 1.0 | 10 de Enero de 2026**

Landing page profesional para captación de leads del curso de Automatización & IA en Marketing Digital.

> **Estado del proyecto**: ✅ FINALIZADO - Listo para producción

## 📋 Contenido del Proyecto

```
nexus-learning/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos CSS personalizados
├── js/
│   ├── main.js        # JavaScript (modales y validaciones)
│   └── tracking.js    # Google Analytics y tracking
├── images/            # Imágenes del proyecto
│   ├── logotipo_NEXUS_learning_0.png
│   ├── imagen_principal.jpg
│   ├── favicon_NEXUS.png
│   ├── conexion_con_la_industria_red_global.png
│   ├── crecimiento_profesional_ascendente.png
│   ├── el_cerebro_de_la_automatizacion.png
│   ├── formación_practica_desde_dia_uno.png
│   ├── habilidades_demandadas.png
│   ├── habilidades_practicas_engranaje_de_datos.png
│   ├── herramientas_profesionales.png
│   ├── testimonio_*.jpg (5 testimonios)
│   ├── blue-linkedin-logo-15916.png
│   ├── bluesky-blue-round-circle-logo-24461.png
│   ├── instagram-circle-round-orange-22715.png
│   ├── twitter-x-logo-black-round-20851.png
│   └── youtube-logo-7121.png
├── videos/            # Vídeos explicativos
│   └── formaciones_que_suman_Martech.mp4
├── .gitignore         # Archivos excluidos de Git
└── README.md          # Este archivo
```

## 🎯 Características

✅ **Diseño Responsive** - Optimizado para móvil, tablet y desktop  
✅ **2 Pop-ups/Modales** funcionales con formularios integrados  
✅ **Validaciones JavaScript** - Email y nombre con mensajes de error  
✅ **Paleta de colores moderna** - Cyan + Morado + Coral  
✅ **Animaciones suaves** - Transiciones y efectos CSS  
✅ **Código comentado** - Fácil de entender y modificar  
✅ **Preparado para Make** - Webhooks listos para conectar  
✅ **Google Analytics 4** - Tracking completo de eventos y conversiones  
✅ **Footer optimizado** - Diseño centrado con iconos de redes sociales  
✅ **SEO Optimizado** - Meta tags y estructura semántica HTML5  
✅ **Accesibilidad** - ARIA labels y navegación por teclado  
✅ **Vídeo integrado** - Reproducción automática optimizada  
✅ **Sección de testimonios** - Con imágenes y diseño responsive  
✅ **Favicon personalizado** - Identidad visual completa  

---

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con variables CSS y flexbox/grid
- **JavaScript ES6+** - Lógica de modales y validaciones
- **Git/GitHub** - Control de versiones  

---

### **PASO 1: Clonar el repositorio**

```bash
git clone https://github.com/orballoLoureiro/nexus-learning.git
cd nexus-learning
```


## 📊 Archivos Subidos a GitHub

✅ Todos los archivos están correctamente versionados en GitHub:
- HTML principal y estructura
- CSS con estilos personalizados
- JavaScript con lógica de modales y tracking
- 22 imágenes optimizadas (logos, iconos, testimonios)
- 1 vídeo explicativo
- Configuración de Git (.gitignore)
- Documentación completa (README.md)

---

## 🧪 Pruebas a Realizar

### **Prueba 1: Diseño Responsive**
- Abre el sitio en tu navegador
- Presiona `F12` (DevTools)
- Activa el modo responsive (icono de móvil)
- Prueba estas resoluciones:
  - 📱 **Mobile**: 375px
  - 📱 **Tablet**: 768px
  - 💻 **Desktop**: 1920px

### **Prueba 2: Modal "Únete a la Comunidad"**
1. Clic en botón **"Únete a la comunidad"**
2. Modal debe abrirse
3. **Prueba validaciones**:
   - Dejar campos vacíos → error
   - Nombre con 1 letra → error "mínimo 2 caracteres"
   - Email sin @ → error "email válido"
   - Rellenar correctamente → mensaje de éxito ✓

### **Prueba 3: Modal "Descargar Guía"**
1. Clic en botón **"Descargar Guía Gratuita"**
2. Modal debe abrirse
3. **Prueba validaciones**:
   - Campo vacío → error
   - Email incorrecto → error
   - Email correcto → mensaje de éxito ✓

### **Prueba 4: Console Log**
1. Abre DevTools (F12) → pestaña **Console**
2. Completa un formulario
3. Deberías ver en consola:


## 🔗 Conectar con Make (Webhook)

1. **En Make**, crea un nuevo escenario
2. Agrega un módulo **"Webhook" → "Custom Webhook"**
3. Copia la URL del webhook que te genera Make
4. **Edita el archivo** `js/main.js`

---

## 🌐 Despliegue en Producción

### **Opción 3: GitHub Pages**

1. Ve a **Settings** → **Pages** en el repositorio
2. Selecciona la rama `main` y carpeta raíz `/`
3. Guarda y espera unos minutos
4. Tu sitio estará en: `https://orballoLoureiro.github.io/nexus-learning`

---

## 🎨 Personalización

### **Cambiar Colores**

Edita [css/styles.css](css/styles.css) líneas 6-17:
```css
:root {
    --color-primary: #00D4FF;    /* Cyan */
    --color-secondary: #9D4EDD;  /* Morado */
    --color-accent: #FF5C35;     /* Coral */
    /* Cambia estos valores hexadecimales a tu gusto */
}
```

### **Cambiar Textos**

Edita [index.html](index.html):
- **Hero section**: Título, subtítulo y tagline
- **Beneficios**: Textos descriptivos de cada beneficio
- **Call-to-Action**: Textos de los botones
- **Testimonios**: Nombres y comentarios
- **Footer**: Información de contacto y copyright

### **Añadir más secciones**

Duplica cualquier `<section>` en el HTML y personaliza el contenido siguiendo la estructura existente.

---

## 📱 Redes Sociales en Footer

Edita [index.html](index.html) en la sección del footer:
```html
<a href="https://linkedin.com/tu-perfil" class="social-link">
    <img src="images/blue-linkedin-logo-15916.png" alt="LinkedIn">
</a>
<!-- Actualiza los enlaces a tus perfiles reales -->
```

---

## 📞 Información del Proyecto

**Autor**: Rocío Loureiro Sousa
**Repositorio**: [github.com/orballoLoureiro/nexus-learning](https://github.com/orballoLoureiro/nexus-learning)  
**Última actualización**: 10 de Enero de 2026  
**Versión**: 1.0 - Finalizado  

---

## ✅ Checklist de Verificación

Antes de desplegar en producción:

- [x] Todas las imágenes se ven correctamente
- [x] Logo visible en header
- [x] Imagen de fondo en hero section
- [x] Los 2 botones CTA funcionan correctamente
- [x] Modales se abren y cierran sin errores
- [x] Validaciones de formularios funcionan
- [x] Mensajes de éxito aparecen correctamente
- [x] Diseño responsive funciona en móvil/tablet/desktop
- [x] Enlaces de redes sociales incluidos
- [x] Favicon personalizado visible
- [x] Vídeo se reproduce correctamente
- [x] Testimonios visibles con imágenes
- [x] Footer optimizado con efectos visuales
- [x] Código JavaScript sin errores en consola
- [x] Google Analytics configurado (opcional)
- [ ] Webhooks de Make configurados (opcional)
- [ ] Dominio personalizado configurado (opcional)

---

## 📸 Capturas de Pantalla

### Desktop
![Vista Desktop](images/imagen_principal.jpg)

### Responsive
La web se adapta perfectamente a todos los dispositivos:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

---

## 🔄 Historial de Versiones

### v1.0 - 10 de Enero de 2026 (Versión Final)
- ✅ Diseño completo y responsive
- ✅ 2 modales funcionales con validaciones
- ✅ Google Analytics 4 integrado
- ✅ Sección de testimonios con imágenes
- ✅ Vídeo explicativo integrado
- ✅ Footer con redes sociales
- ✅ SEO y accesibilidad optimizados
- ✅ Código documentado y comentado
- ✅ Preparado para producción

---

## 📄 Licencia

Este proyecto es para uso educativo y del curso de Automatización & IA en Marketing Digital.

---

## 🙏 Agradecimientos

Proyecto desarrollado como parte del ejercicio práctico de **Automatización & IA en Marketing Digital**.

---

**📊 Estadísticas del Proyecto:**
- Archivos totales: 26
- Líneas de código: ~2000+
- Imágenes optimizadas: 22
- Vídeos: 1
- Tiempo de desarrollo: Completado

---

*Última actualización: 10 de Enero de 2026*