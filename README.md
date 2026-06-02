# Portafolio — Azucena Chavez Centeno

Portafolio personal estático desarrollado en HTML5, CSS3 y JavaScript vanilla.

## Archivos incluidos

```
portafolio-azucena/
├── index.html      → Estructura y contenido de la página
├── styles.css      → Estilos y diseño responsive
├── script.js       → Interactividad (menú, habilidades, scroll suave)
├── img/            → Carpeta para imágenes de certificados
└── README.md       → Este archivo
```

## Agregar certificados

1. Coloca tus imágenes en la carpeta `img/` (ej. `img/cert1.jpg`)
2. En `index.html`, reemplaza cada bloque `.cert-placeholder` por:
```html
<div class="cert-placeholder">
  <img src="img/cert1.jpg" alt="Certificado de [nombre del curso] - Azucena Chavez Centeno" />
</div>
```

---

## Subir a GitHub y desplegar en Railway

### 1. Inicializar Git (dentro de la carpeta `portafolio-azucena`)

```bash
git init
git add .
git commit -m "Primera versión del portafolio"
```

### 2. Crear repositorio en GitHub

Ve a https://github.com/new y crea un repositorio llamado `portafolio-azucena` (público, sin README).

### 3. Subir el código

```bash
git remote add origin https://github.com/CENPAR/portafolio-azucena.git
git branch -M main
git push -u origin main
```

### 4. Desplegar en Railway

1. Ve a [railway.app](https://railway.app) e inicia sesión con GitHub.
2. Click en **New Project** → **Deploy from GitHub repo**.
3. Selecciona `CENPAR/portafolio-azucena`.
4. Railway detecta que es HTML estático y genera una URL pública automáticamente, por ejemplo:

```
https://portafolio-azucena.up.railway.app
```

### 5. (Opcional) Dominio personalizado

Desde el panel de Railway → Settings → Custom Domain, puedes conectar tu propio dominio.

---

© 2026 - Azucena Chavez Centeno
