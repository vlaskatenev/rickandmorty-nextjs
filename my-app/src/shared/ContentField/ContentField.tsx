import { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './ContentField.module.scss'
import { TcssObject } from '@/interfaces/mostTypes'

interface IContentField {
    title?: string | ReactNode
    className?: TcssObject
    children: ReactNode
}

export const ContentField: FC<IContentField> = ({ children, title, className }) => (
    <div className={cn(styles.container, className)}>
        {title ? <h4 className={styles.title}>{title}</h4> : ''}
        <div className={cn(styles.content)}>
            {children}
        </div>
    </div>
)
