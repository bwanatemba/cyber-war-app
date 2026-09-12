import './globals.css'
import { Analytics } from '@vercel/analytics/next'
export const metadata={title:'CYBER//WAR — AI vs AI Cybersecurity Game',description:'Interactive AI cybersecurity awareness game'}
export default function RootLayout({children}){return <html lang="en"><body>{children}<Analytics /></body></html>}
