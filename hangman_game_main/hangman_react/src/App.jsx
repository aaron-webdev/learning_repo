import 'bootstrap/dist/css/bootstrap.min.css';



import WordPicker from "./components/WordPicker";




export default function App() {



  return (
    <div className='text-center'>
      <h1>Hangman's Game</h1>
      <WordPicker/>
    </div>
  )
}