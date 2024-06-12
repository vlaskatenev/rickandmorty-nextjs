import styles from './ContentField.module.scss'
import { CSSProperties, FC, ReactNode } from "react"
import cn from 'classnames'
import { TcssObject } from '@/interfaces/mostTypes'

interface IContentField {
    title?: string
    className?: TcssObject
    contentStyle?: CSSProperties | undefined
    children: ReactNode 
}

export const ContentField: FC<IContentField> = ({children, title, className, contentStyle}) => {
    return (
        <div className={cn(styles.container, className)}>
            {title ? <h4 className={styles.title}>{title}</h4> : ''}
            <div className={cn(styles.content)} style={contentStyle}>
                {children}
            </div>
        </div>
        )
}