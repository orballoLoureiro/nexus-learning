# NEXUS Learning - Landing Page

Landing page profesional para captación de leads del curso de Automatización & IA en Marketing Digital.

## 📋 Contenido del Proyecto
```
nexus-landing/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos CSS
├── js/
│   ├── main.js        # JavaScript (modales y validaciones)
│   └── tracking.js    # Google Analytics y tracking
├── images/            # Carpeta para tus imágenes
│   ├── logotipo-nexus-learning-0.png
│   ├── imagen_principal.jpg
│   ├── Adobe_Express_-_file__1_.png
│   ├── Adobe_Express_-_file__2_.png
│   └── Adobe_Express_-_file__3_.png
├── videos/            # Vídeos explicativos
└── README.md          # Este archivo
```

## 🎯 Características

✅ **Diseño Responsive** - Optimizado para móvil, tablet y desktop  
✅ **2 Pop-ups/Modales** funcionales con formularios  
✅ **Validaciones JavaScript** - Email y nombre  
✅ **Paleta de colores tech** - Cyan + Morado + Coral  
✅ **Animaciones suaves** - Transiciones y efectos  
✅ **Código comentado** - Fácil de entender y modificar  
✅ **Preparado para Make** - Webhooks listos para conectar  
✅ **Google Analytics** - Tracking completo de eventos y conversiones  
✅ **Footer optimizado** - Diseño centrado y efectos visuales  

---

## 🚀 Instalación y Configuración

### **PASO 1: Organizar archivos**

1. Crea una carpeta llamada `nexus-landing` en tu PC
2. Dentro, crea estas subcarpetas:
```
   nexus-landing/
   ├── css/
   ├── js/
   └── images/
```
3. Coloca cada archivo en su carpeta correspondiente:
   - `index.html` → raíz de `nexus-landing/`
   - `styles.css` → dentro de `css/`
   - `main.js` y `tracking.js` → dentro de `js/`
   - `README.md` → raíz de `nexus-landing/`

### **PASO 2: Añadir tus imágenes**

Coloca tus 5 imágenes en la carpeta `images/` con estos nombres exactos:
```
images/
├── logotipo-nexus-learning-0.png
├── imagen_principal.jpg
├── Adobe_Express_-_file__1_.png
├── Adobe_Express_-_file__2_.png
└── Adobe_Express_-_file__3_.png
```

⚠️ **IMPORTANTE**: Los nombres deben ser exactos (incluyendo mayúsculas/minúsculas y guiones).

---

## 💻 Probar en Local con Laragon

### **Opción A: Con Laragon (Recomendado)**

1. **Copia la carpeta completa** `nexus-landing/` a:
```
   C:\laragon\www\
```

2. **Abre Laragon** y haz clic en **"Start All"**

3. **Abre tu navegador** y ve a:
```
   http://localhost/nexus-landing
```

4. **Verifica que todo funcione**:
   - ✅ Logo visible en header
   - ✅ Imagen principal de fondo en hero
   - ✅ 3 iconos en la sección beneficios
   - ✅ Botones CTA funcionan
   - ✅ Modales se abren correctamente
   - ✅ Validaciones funcionan

### **Opción B: Con Visual Studio Code + Live Server**

1. **Abre VS Code**
2. **Arrastra la carpeta** `nexus-landing/` a VS Code
3. **Instala la extensión "Live Server"** (si no la tienes)
4. **Clic derecho** en `index.html` → **"Open with Live Server"**
5. Se abrirá automáticamente en tu navegador

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

## 🌐 Subir a Hosting Gratuito

### **Opción 1: Netlify (Recomendado - Más fácil)**

1. Ve a: **https://www.netlify.com**
2. Crea cuenta gratuita
3. Arrastra la carpeta `nexus-landing/` completa a Netlify
4. ¡Listo! Te dará una URL tipo: `https://tu-sitio.netlify.app`

### **Opción 2: Vercel**

1. Ve a: **https://vercel.com**
2. Crea cuenta gratuita
3. Clic en **"New Project"**
4. Sube la carpeta `nexus-landing/`
5. Deploy automático

### **Opción 3: GitHub Pages**

1. Sube todo a un repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. Selecciona la rama `main`
4. Tu sitio estará en: `https://tu-usuario.github.io/nexus-landing`

### **Opción 4: Render**

1. Ve a: **https://render.com**
2. Crea cuenta gratuita
3. **New** → **Static Site**
4. Conecta tu repositorio o sube archivos
5. Deploy

---

## 🎨 Personalización

### **Cambiar Colores**

Edita `css/styles.css` líneas 6-17:
```css
:root {
    --color-primary: #00D4FF;    /* Cyan */
    --color-secondary: #9D4EDD;  /* Morado */
    --color-accent: #FF5C35;     /* Coral */
    /* Cambia estos valores hexadecimales */
}
```

### **Cambiar Textos**

Edita `index.html`:
- **Línea 33**: Título principal
- **Línea 36**: Subtítulo
- **Línea 39**: Tagline
- **Líneas 45-51**: Textos de los botones

### **Añadir más secciones**

Duplica cualquier `<section>` en el HTML y personaliza el contenido.

---

## 📱 Redes Sociales en Footer

Edita `index.html` líneas 149-152:
```html
<a href="https://linkedin.com/tu-perfil" class="social-link">LinkedIn</a>
<a href="https://twitter.com/tu-perfil" class="social-link">Twitter</a>
<a href="https://youtube.com/tu-canal" class="social-link">YouTube</a>
<a href="https://instagram.com/tu-perfil" class="social-link">Instagram</a>
```

---

## 🐛 Solución de Problemas

### **Problema: Las imágenes no se ven**
✅ **Solución**: Verifica que:
- Los archivos están en `images/`
- Los nombres son exactamente iguales (mayúsculas/minúsculas)
- Las rutas en HTML son: `images/nombre-archivo.extensión`

### **Problema: Los modales no se abren**
✅ **Solución**: 
- Abre DevTools (F12) → Console
- Busca errores en rojo
- Verifica que `main.js` esté en la carpeta `js/`

### **Problema: Validaciones no funcionan**
✅ **Solución**: 
- Verifica que el archivo `js/main.js` esté correctamente enlazado
- Revisa la consola del navegador por errores

### **Problema: El diseño se ve roto en móvil**
✅ **Solución**: 
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que `styles.css` esté en `css/`

---

## 📞 Soporte

Si necesitas ayuda:
1. Revisa este README completo
2. Abre DevTools (F12) y revisa errores en Console
3. Verifica que todos los archivos estén en sus carpetas correctas

---

## ✅ Checklist Final

Antes de subir al hosting, verifica:

- [ ] Todas las imágenes se ven correctamente
- [ ] Logo visible en header
- [ ] Imagen de fondo en hero
- [ ] Los 2 botones CTA funcionan
- [ ] Modales se abren y cierran
- [ ] Validaciones funcionan correctamente
- [ ] Mensajes de éxito aparecen
- [ ] Responsive funciona en móvil/tablet/desktop
- [ ] Enlaces de redes sociales actualizados
- [ ] Webhooks de Make configurados (si aplica)

---

## 📄 Licencia

Proyecto para uso educativo del ejercicio de Automatización & IA en Marketing.

---

**¡Listo para desplegar! 🚀**

Si tienes dudas, revisa cada sección de este README paso a paso.