import styles from '@/components/JSONViewer/JSONViewer.module.scss'
import { IGetCharacter } from '@/interfaces/interfaces'

interface IJSONViewer { json: IGetCharacter }

export function JSONViewer({ json }: IJSONViewer) {
    
    return (
            <div className={styles.code}>
                {JSON.stringify(json, null, 4)}
            </div>
            )
}