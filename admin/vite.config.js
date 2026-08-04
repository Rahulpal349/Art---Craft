import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

try {
  const src = 'C:/Users/rahul/.gemini/antigravity-ide/brain/bba78156-2b33-4465-8d4a-fd3c07aa0233/media__1785820405905.jpg'
  if (fs.existsSync(src)) {
    const buf = fs.readFileSync(src)
    const b64 = buf.toString('base64')

    const targets = [
      'public/assets/images/logo.png',
      'public/assets/images/logo.jpg',
      'public/favicon.png',
      '../storefront/public/assets/images/logo.png',
      '../storefront/public/favicon.png'
    ]
    targets.forEach(t => {
      const p = path.resolve(__dirname, t)
      fs.mkdirSync(path.dirname(p), { recursive: true })
      fs.writeFileSync(p, buf)
    })

    const svgWrapper = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <image href="data:image/jpeg;base64,${b64}" x="0" y="0" width="1000" height="1000"/>
</svg>`

    const svgTargets = [
      'public/favicon.svg',
      '../storefront/public/assets/images/logo.svg',
      '../storefront/public/favicon.svg'
    ]
    svgTargets.forEach(t => {
      const p = path.resolve(__dirname, t)
      fs.mkdirSync(path.dirname(p), { recursive: true })
      fs.writeFileSync(p, svgWrapper)
    })
  }
  // Copy footer background image (prioritize latest downloaded artwork)
  const footerBgSources = [
    'C:/Users/rahul/Downloads/ChatGPT Image Aug 4, 2026, 11_34_46 AM.png',
    'C:/Users/rahul/Downloads/ChatGPT Image Aug 4, 2026, 11_15_34 AM.png',
    'C:/Users/rahul/.gemini/antigravity-ide/brain/bba78156-2b33-4465-8d4a-fd3c07aa0233/media__1785822489302.png'
  ]
  const footerBgSrc = footerBgSources.find(s => fs.existsSync(s))
  if (footerBgSrc) {
    const footerBuf = fs.readFileSync(footerBgSrc)
    const footerTargets = [
      'public/assets/images/footer_bg.png',
      '../storefront/public/assets/images/footer_bg.png'
    ]
    footerTargets.forEach(t => {
      const p = path.resolve(__dirname, t)
      fs.mkdirSync(path.dirname(p), { recursive: true })
      fs.writeFileSync(p, footerBuf)
    })
  }
  // Copy mobile footer background image
  const footerBgMobileSources = [
    'C:/Users/rahul/.gemini/antigravity-ide/brain/bba78156-2b33-4465-8d4a-fd3c07aa0233/media__1785824607865.png'
  ]
  const footerBgMobileSrc = footerBgMobileSources.find(s => fs.existsSync(s))
  if (footerBgMobileSrc) {
    const footerMobileBuf = fs.readFileSync(footerBgMobileSrc)
    const footerMobileTargets = [
      'public/assets/images/footer_bg_mobile.png',
      '../storefront/public/assets/images/footer_bg_mobile.png'
    ]
    footerMobileTargets.forEach(t => {
      const p = path.resolve(__dirname, t)
      fs.mkdirSync(path.dirname(p), { recursive: true })
      fs.writeFileSync(p, footerMobileBuf)
    })
  }
} catch (e) {
  console.error('Logo/Footer sync error:', e)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

