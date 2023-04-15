import books from '/books.png'
import book from '/hamid.png'
import './Acceuil.css'

export default function Acceuil() {

    return (
      <div className='acceuil'>
        <div className='acc-left'>
          <h2>Best choice</h2>
          <img src={books} alt="" className='books'/>
          <div className='goto'>
            <div class='enter-container'>
              <input type='text' placeholder='Enter' class='enter-input' />
              <span class='arrow-icon'>&#10132;</span>
            </div>
            <button className='go'>Go to shop</button>       
          </div>
          <div className='parag'>
            <p>Regular reading allows you to better formulate your own thoughts. Our <span className='team'>team of professionals</span> will always help you make up your mind and find a book for fun activities</p>
          </div>
        </div>
        <img src={book} alt="" className='book' />
      </div>
    )
  }