# Piyush Kumar — Reference-Based React UI

This project is rebuilt from the user's supplied `final1.png` UI reference only.

Included:
- Componentized React + Vite application
- Exact visual hierarchy and section order based on the reference
- PIYUSH AI business-agent UI
- CSS 3D moving objects (no WebGL dependency)
- Local image assets cropped from the supplied reference image
- MAXIMUS card uses only the visual present inside the reference screenshot; no separate MAXIMUS screenshot was supplied or attached.

Run:

```powershell
cd frontend
npm install
npm run dev
```

Backend:

```powershell
cd ..\backend
mvn spring-boot:run
```

The Spring Boot agent API runs on `http://localhost:8787` and is proxied by Vite at `/api`.

Images:
All images used by the app are in public/images and are derived from final1.png.
Replace any cropped image with a higher-resolution source later without changing component code.
