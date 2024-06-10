import { CartoonCharacter } from "@/components/CartoonCharacter/CartoonCharacter";
import { getCharacter } from "@/api/rickAndMorty.service";
import { IServerSideComponentProp } from "@/interfaces/interfaces";
import styles from './character.module.scss'
import { JSONViewer } from "@/components/JSONViewer/JSONViewer";
import { EpisodeList } from "@/components/EpisodeList/EpisodeList";

async function Character({params}: IServerSideComponentProp<{id: string}>) {
    const idCharacter: string = typeof params.id === 'string' ? params.id : ''

    const character = await getCharacter(idCharacter)
  
    return (
      <div className={styles.root}>
      
      <CartoonCharacter character={character} />
         
        <br />
        
        Страница с персонажем: {character.name} 

        <EpisodeList episodes={character.episode} />
        
        <JSONViewer json={character} />
        
        <br />
        
      </div>
    )
  }

  export default Character