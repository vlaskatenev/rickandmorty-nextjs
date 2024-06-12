import Image from 'next/image'
import styles from "./page.module.scss"
import { CartoonCharacter } from "@/components/CartoonCharacter/CartoonCharacter"
import { getMultipleCharacters } from "@/api/rickAndMorty.service"

async function Home() {
  const characters = await getMultipleCharacters([2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17])  

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          
          {characters.map(character => <div className={styles.tile}>
            <CartoonCharacter 
              key={character.id} 
              character={character} 
              isSmallDescription 
              width={200} 
              height={200} />
          </div>)}
      </div>
    </div>
  );
}

export default Home
