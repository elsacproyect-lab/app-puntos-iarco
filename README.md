# 🎉 APP DE PUNTOS FIDELIZACIÓN - GUÍA PASO A PASO

## 👧 COMO SI FUERA UNA NIÑA

---

## 📋 ARCHIVOS QUE NECESITAS

```
✅ package.json
✅ next.config.js
✅ .gitignore
✅ .env.local
✅ pages/index.jsx
✅ pages/admin.jsx
```

---

## 🚀 PASO 1: Descargar Node.js (3 minutos)

Node.js es como las "pilas" de una app. Sin él, no funciona.

```
1. Abre: https://nodejs.org
2. Click: "Download" (LTS - Versión larga y estable)
3. Descargalo
4. Abre el archivo y dale "Next" hasta el final
5. Reinicia tu computadora
```

**Verificar que instaló:**
```
Abre Terminal/CMD y escribe:
node --version

Debe mostrar algo como:
v20.10.0
```

---

## 🚀 PASO 2: Descargar Git (2 minutos)

Git es como un "guardado en la nube" para el código.

```
1. Abre: https://git-scm.com/download
2. Descarga para tu sistema (Windows/Mac)
3. Instala normalmente (Next, Next, Next)
```

**Verificar:**
```
Terminal/CMD:
git --version

Debe mostrar:
git version 2.40.0
```

---

## 🚀 PASO 3: Descargar todos los archivos

1. Descarga los 6 archivos que di arriba
2. Crea una carpeta llamada: `app-puntos-fidelizacion`
3. Mete TODOS los archivos en esa carpeta

```
app-puntos-fidelizacion/
├── package.json
├── next.config.js
├── .gitignore
├── .env.local
└── pages/
    ├── index.jsx
    └── admin.jsx
```

---

## 🚀 PASO 4: Instalar dependencias (2 minutos)

Las "dependencias" son las herramientas que la app necesita.

```
1. Abre Terminal/CMD
2. Navega a tu carpeta:
   cd app-puntos-fidelizacion

3. Escribe:
   npm install

4. Espera que termine (verás un montón de cosas instalándose)
```

---

## 🚀 PASO 5: Probar localmente (1 minuto)

Ahora vamos a ver si funciona en tu computadora.

```
1. En Terminal/CMD (en la carpeta), escribe:
   npm run dev

2. Abre en el navegador:
   http://localhost:3000

3. Deberías ver la app cliente
   Admin aquí:
   http://localhost:3000/admin
```

**Para salir:** Presiona `Ctrl+C` en la Terminal

---

## 🚀 PASO 6: Subir a GitHub (5 minutos)

GitHub es donde guardarás el código "en la nube".

### A) CONFIGURAR GIT

```
Terminal/CMD en la carpeta de tu app:

git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### B) CREAR REPOSITORIO LOCAL

```
Terminal/CMD en tu app:

git init
git add .
git commit -m "Primer commit - Sistema de puntos"
```

### C) CONECTAR CON GITHUB

```
Terminal/CMD:

git branch -M main
git remote add origin https://github.com/TU_USUARIO/app-puntos-fidelizacion.git
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu usuario de GitHub.

**Verificar:** Abre https://github.com/TU_USUARIO/app-puntos-fidelizacion
Debes ver tus archivos allí.

---

## 🚀 PASO 7: Deploy a Vercel (5 minutos)

Vercel es como "poner tu app en internet" para que todos la vean.

### A) CREAR CUENTA VERCEL

```
1. Abre: https://vercel.com/signup
2. Click: "Continue with GitHub"
3. Autoriza a Vercel
4. Listo
```

### B) DESPLEGAR APP

```
1. En Vercel, click: "New Project"
2. Selecciona: app-puntos-fidelizacion (tu repo)
3. Click: "Import"
4. En "Environment Variables":
   - NEXT_PUBLIC_SUPABASE_URL = (opcional por ahora)
   - NEXT_PUBLIC_SUPABASE_ANON_KEY = (opcional por ahora)
   - NEXT_PUBLIC_APP_URL = https://tu-app.vercel.app
   - NEXT_PUBLIC_ADMIN_PASSWORD = admin123
5. Click: "Deploy"
```

**Espera 2-3 minutos...**

Verás un URL como: `https://app-puntos-fidelizacion.vercel.app`

¡ESA ES TU APP! 🎉

---

## 🎯 URLS FINALES

```
👤 APP CLIENTE:
https://tu-app.vercel.app

👨‍💼 PANEL ADMIN:
https://tu-app.vercel.app/admin

Contraseña admin: admin123
```

---

## 🧪 PRUEBA RÁPIDA

### Cliente:
```
Email: test@email.com
Contraseña: (cualquiera, es demo)
```

### Admin:
```
Contraseña: admin123
```

---

## ⚠️ SI ALGO NO FUNCIONA

### "Error de Node"
```
✅ Solución: Reinicia Terminal
✅ Verifica: node --version
```

### "Error de npm install"
```
✅ Abre Terminal como Administrador
✅ Intenta de nuevo
```

### "Vercel dice error"
```
✅ Revisa que hayas pusheado a GitHub
✅ En Vercel, Settings → Redeploy
```

### "No veo los cambios"
```
✅ Espera 2 minutos
✅ Recarga la página (Ctrl+Shift+R)
```

---

## 📝 CAMBIAR CONTRASEÑA ADMIN

En `.env.local`:

```
NEXT_PUBLIC_ADMIN_PASSWORD=admin123

Cambiar por:

NEXT_PUBLIC_ADMIN_PASSWORD=tu_contraseña_nueva
```

Luego:
```
git add .env.local
git commit -m "Cambié contraseña admin"
git push

Vercel redeploya automáticamente
```

---

## 🔄 ACTUALIZAR DESPUÉS

Si haces cambios:

```
1. Edita los archivos
2. Terminal:
   git add .
   git commit -m "Descripción del cambio"
   git push

3. Vercel redeploya automáticamente en 2-3 min
```

---

## 🎓 RESUMEN RÁPIDO

```
Paso 1: Node.js
Paso 2: Git
Paso 3: Descargar archivos
Paso 4: npm install
Paso 5: npm run dev (prueba local)
Paso 6: git push (a GitHub)
Paso 7: Desploy en Vercel
✅ ¡Listo!
```

---

## ✅ CHECKLIST FINAL

- [ ] Node.js instalado
- [ ] Git instalado
- [ ] Carpeta creada con 6 archivos
- [ ] npm install funcionó
- [ ] npm run dev muestra la app localmente
- [ ] GitHub creado y archivos subidos
- [ ] Vercel conectado y app desplegada
- [ ] Puedo acceder a https://tu-app.vercel.app
- [ ] Admin panel funciona con contraseña admin123

---

## 🎉 ¡LISTO!

Tu app está en internet. Puedes:

✅ Compartir el link con la constructora
✅ Hacer cambios cuando quieras
✅ Ver cómo los clientes usan la app

---

**¿Preguntas?** Pregúntale a Claude 😊
