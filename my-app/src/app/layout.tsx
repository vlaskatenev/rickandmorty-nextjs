import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SlideMenu from '@/components/SlideMenu/SlideMenu'
import categories from '@/db/itemsMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Рик и Морти пет проект',
    description: 'пет проект с апи Рика и Морти',
    openGraph: { title: 'Рик и Морти пет проект' },
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <main>
                    <SlideMenu categories={categories} />
                </main>
                {children}
            </body>
        </html>
    )
}
