import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    setValue(value.slice(0, -1));
  };

  return (
    <div className="mainDiv">
      <div className="cal">
        <form ation="">
          <div className="display">
            <input type="text" value={value}/>


          </div>
          <div className='clrdel'>
            <button id="clr" onClick={e => setValue('')}>CLEAR</button>
            <button id="del" onClick={handleDelete}>DELETE</button>
          </div>
          <div>
            <input type="button" value="7" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="8" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="9" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="*" onClick={e=>setValue(value+ e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4"  onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="5"  onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="6"  onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="+"  onClick={e=>setValue(value+ e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="2" onClick={e=>setValue(value+ e.target.value)} />
            <input type="button" value="3" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="-" onClick={e=>setValue(value+ e.target.value)}/>
          </div>
          <div>
            <input type="button" value="0" onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="." onClick={e=>setValue(value+ e.target.value)}/>
            <input type="button" value="=" onClick={e=> setValue(eval(value))}/>   
            <input type="button" value="/" onClick={e=>setValue(value+ e.target.value)}/>
          </div>

        </form>

      </div>
    </div>
  )
}

export default App
