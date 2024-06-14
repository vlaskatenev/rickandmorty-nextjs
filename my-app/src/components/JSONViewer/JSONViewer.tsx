import styles from '@/components/JSONViewer/JSONViewer.module.scss'
import { syntaxHighlightJSON } from '@/helpers/syntaxHighlightJSON'
import { TJSONValue } from '@/interfaces/mostTypes'
import { ContentField } from '@/shared/ContentField/ContentField'


interface IJSONViewer { json: TJSONValue, className?: string | { [key: string]: boolean } }

export function JSONViewer({ json, className }: IJSONViewer) {
    
    return (
        <ContentField title='Response' className={className}>
            <pre className={styles.pre} dangerouslySetInnerHTML={{__html: syntaxHighlightJSON(json)}} />
        </ContentField>
            )
}