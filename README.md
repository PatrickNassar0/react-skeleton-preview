# 🦴 React Skeleton Component

A flexible and customizable `Skeleton` loading component for React. Use it to display a placeholder while content is loading — with support for rectangular, circular, and text-shaped skeletons.

---

## ✨ Features

- ✅ Customizable width, height, colors, and shapes
- 🔁 Optional pulse animation
- 🎯 Supports rectangular, circular, and text variants
- 🧩 Accepts children (renders them when `loading` is `false`)
- ♿️ Accessible: includes `aria-busy` and `aria-label`

---

## 📦 Installation

If you're packaging this as an npm module, update this section accordingly. For now, you can use it locally:

```bash
npm install your-skeleton-component
```

---

## 🚀 Usage
```
import { Skeleton } from 'your-skeleton-component'
```

```
<Skeleton width={60} height={60} variant="circular" pulse=true loading={loading} />
```

```
<Skeleton width="80%" height={20} margin="1rem 0" variant="text" loading={loading}>
        <h2>Text</h2>
</Skeleton>
```

---

## 🧪 Development Notes
Pulse animation is injected via JavaScript — no external CSS needed.
Works client-side (check for typeof document !== 'undefined')

---

## 📄 License
MIT © Patrick Nassar

Have fun :)
