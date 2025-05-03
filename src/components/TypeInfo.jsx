import '../css/App.css';
import TypeWriter from "typewriter-effect"

function TypeInfo() {
  return (
    <>
      <div className='container'>
        <div className='type-writer-test'>
          <TypeWriter options={{
            strings: ['// a grumpy newsletter // vol.1 // pictures // music // art // and more //'],
            autoStart: true, loop: true,}} 
          />
        </div>
      </div>
    </>
  )
}


export default TypeInfo
