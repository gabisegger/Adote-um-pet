import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
        <span> 
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      } />

      <Lista 
        pets = {[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'lorem ipsum dolor sit amet,sjkfkjdsvkshgrkn',
            foto: 'https://st2.depositphotos.com/2222024/5609/i/600/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg'
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'lorem ipsum dolor sit amet,sjkfkjdsvkshgrkn',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJD1t5uQ3Hv4DBOlF4zBLfl_6OzPiW4R2vVVK9iBAmCXLoIrhFdSwkoTyihkmhebV9BU&usqp=CAU'
          }
        ]}
      />
    </div>
  )
}

export default Home
