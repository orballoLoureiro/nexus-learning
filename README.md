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
- **Google Analytics 4** - Analítica web avanzada
- **Git/GitHub** - Control de versiones  

---

## 🚀 Instalación y Configuración

### **PASO 1: Clonar el repositorio**

```bash
git clone https://github.com/orballoLoureiro/nexus-learning.git
cd nexus-learning
```

### **PASO 2: Probar en local**
### **PASO 2: Probar en local**

Simplemente abre [index.html](index.html) en tu navegador web favorito, o usa una de las siguientes opciones:

#### **Opción A: Con Laragon (Recomendado)**

1. Copia la carpeta completa `nexus-learning/` a: `C:\laragon\www\`
2. Abre Laragon y haz clic en **"Start All"**
3. Abre tu navegador y ve a: `http://localhost/nexus-learning`

#### **Opción B: Con Visual Studio Code + Live Server**

1. Abre VS Code
2. Arrastra la carpeta `nexus-learning/` a VS Code
3. Instala la extensión **"Live Server"** (si no la tienes)
4. Clic derecho en [index.html](index.html) → **"Open with Live Server"**

---

### **PASO 3: Configurar Google Analytics (Opcional)**

1. Edita [js/tracking.js](js/tracking.js)
2. Reemplaza `G-XXXXXXXXXX` con tu ID de Google Analytics
3. Guarda los cambios

---

### **PASO 4: Conectar con Make (Opcional)**

Para conectar los formularios con Make.com:

1. En Make, crea un nuevo escenario
2. Agrega un módulo **"Webhook" → "Custom Webhook"**
3. Copia la URL del webhook
4. Edita [js/main.js](js/main.js) en las líneas comentadas (líneas 78 y 116)
5. Descomenta y añade tu URL de webhook

---

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
```
   Datos Guía: {email: "test@test.com", tipo: "guia"}
```
   o
```
   Datos Comunidad: {nombre: "Roberto", email: "test@test.com", tipo: "comunidad"}
```

---

## 🔗 Conectar con Make (Webhook)

### **Cuando estés listo para conectar con Make:**

1. **En Make**, crea un nuevo escenario
2. Agrega un módulo **"Webhook" → "Custom Webhook"**
3. Copia la URL del webhook que te genera Make
4. **Edita el archivo** `js/main.js`

**LÍNEA 78** (para el formulario Guía):
```javascript
// 🔗 DESCOMENTA ESTAS LÍNEAS Y AÑADE TU WEBHOOK:
fetch('https://hook.eu2.make.com/tu-webhook-guia', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log('Éxito:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
```

**LÍNEA 116** (para el formulario Comunidad):
```javascript
// 🔗 DESCOMENTA ESTAS LÍNEAS Y AÑADE TU WEBHOOK:
fetch('https://hook.eu2.make.com/tu-webhook-comunidad', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log('Éxito:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
```

5. **Guarda los cambios** y prueba de nuevo
6. En Make verás llegar los datos en tiempo real

---

## 🌐 Despliegue en Producción

### **Opción 1: Netlify (Recomendado - Más fácil)**

1. Ve a: **https://www.netlify.com**
2. Crea cuenta gratuita
3. Conecta tu repositorio de GitHub o arrastra la carpeta
4. ¡Listo! Te dará una URL tipo: `https://tu-sitio.netlify.app`
5. **SSL automático** y **dominio personalizado** disponible

### **Opción 2: Vercel**

1. Ve a: **https://vercel.com**
2. Crea cuenta gratuita con GitHub
3. Importa el repositorio `nexus-learning`
4. Deploy automático en cada push
5. URL: `https://nexus-learning.vercel.app`

### **Opción 3: GitHub Pages**

1. Ve a **Settings** → **Pages** en el repositorio
2. Selecciona la rama `main` y carpeta raíz `/`
3. Guarda y espera unos minutos
4. Tu sitio estará en: `https://orballoLoureiro.github.io/nexus-learning`

### **Opción 4: Render**

1. Ve a: **https://render.com**
2. Crea cuenta gratuita
3. **New** → **Static Site**
4. Conecta tu repositorio de GitHub
5. Deploy automático

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

## 🐛 Solución de Problemas

### **Problema: Las imágenes no se ven**
✅ **Solución**: 
- Verifica que los archivos están en la carpeta [images/](images/)
- Los nombres de archivo son sensibles a mayúsculas/minúsculas
- Limpia caché del navegador (Ctrl + Shift + R)

### **Problema: Los modales no se abren**
✅ **Solución**: 
- Abre DevTools (F12) → pestaña Console
- Busca errores en rojo
- Verifica que [js/main.js](js/main.js) esté correctamente enlazado

### **Problema: Validaciones no funcionan**
✅ **Solución**: 
- Verifica que [js/main.js](js/main.js) esté cargado
- Revisa la consola del navegador por errores
- Asegúrate de que los IDs de los formularios coinciden

### **Problema: El diseño se ve roto en móvil**
✅ **Solución**: 
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que [css/styles.css](css/styles.css) esté enlazado correctamente
- Revisa las media queries en el CSS

### **Problema: El vídeo no se reproduce**
✅ **Solución**:
- Verifica que el archivo está en [videos/](videos/)
- Algunos navegadores bloquean autoplay con sonido
- Prueba en otro navegador

---

## 📞 Información del Proyecto

**Autor**: Roberto Ballo Loureiro  
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

**🚀 ¡Proyecto finalizado y listo para producción!**

Si necesitas realizar cambios en el futuro, toda la estructura está preparada para ser fácilmente modificable y escalable.

**📊 Estadísticas del Proyecto:**
- Archivos totales: 26
- Líneas de código: ~2000+
- Imágenes optimizadas: 22
- Vídeos: 1
- Tiempo de desarrollo: Completado

---

*Última actualización: 10 de Enero de 2026*