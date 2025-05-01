import "/Users/grumpiestcub/Desktop/code/websitev1/src/css/App.css"
import TypeWriter from "typewriter-effect"

function TypeInfo() {
  return (
    <>
      <div className='container'>
        <div className='type-writer-test'>
          <TypeWriter options={{
            strings: ['// a grumpy newsletter // vol.1 coming soon // pictures // music // art // and more //'],
            autoStart: true, loop: true,}} 
          />
        </div>
      </div>
    </>
  )
}


export default TypeInfo
