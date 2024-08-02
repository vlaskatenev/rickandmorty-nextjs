import Link from 'next/link'
import { FC } from 'react'
import { ContentField } from '@/shared/ContentField/ContentField'
import styles from './EpisodeList.module.scss'

interface IEpisodeList {
    episodes: string[]
    title?: string
}

export const EpisodeList: FC<IEpisodeList> = ({ episodes, title }) => (
    <ContentField title={title}>
        <ul className={styles.linksContent}>
            {episodes.map((episode: string) => {
                const urlToEpisode = new URL(episode).pathname.replace('/api', '')
                return (
                    <li key={episode}>
                        <Link href={urlToEpisode}>{urlToEpisode}</Link>
                    </li>
                )
            })}
        </ul>
    </ContentField>
)
