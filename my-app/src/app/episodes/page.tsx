import { getEpisodes } from '@/api/rickAndMorty.service'
import styles from './episodes.module.scss'
import { ContentField } from '@/shared/ContentField/ContentField'
import Link from 'next/link'

async function Episodes() {
    const episodes = await getEpisodes()
    
    // TODO потом добавить в компонент
    // const nextEpisodesPage = episodes.info.next

    return (<div className={styles.root}>
            <div className={styles.episodes}>
                {episodes.results.map((episode) => {
                    return (
                        <ContentField 
                            key={episode.id}
                            title={<Link href={'/episode/' + episode.id}>{episode.episode + ' ' + episode.name}</Link>} 
                            className={styles.episode}
                            >
                                <p>{episode.url}</p>
                                <p>{episode.episode}</p>
                        </ContentField>)})}
            </div>
    </div>)
    }

export default Episodes