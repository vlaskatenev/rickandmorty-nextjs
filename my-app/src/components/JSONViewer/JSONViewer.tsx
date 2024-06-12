import styles from '@/components/JSONViewer/JSONViewer.module.scss'
import { syntaxHighlightJSON } from '@/helpers/syntaxHighlightJSON'
import { TJSONValue } from '@/interfaces/mostTypes'


interface IJSONViewer { json: TJSONValue }

export function JSONViewer({ json }: IJSONViewer) {
    
    return (
        <div className={styles.jsonContainer}>
            <div className={styles.jsonContent}>
                <pre className={styles.pre} dangerouslySetInnerHTML={{__html: syntaxHighlightJSON(json)}} />
            </div>
        </div>
            )
}