import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  let [amount, setAmount] = useState('')
  let [from, setFrom] = useState('usd')
  let [to, setTo] = useState('inr')
  let [convertedAmount, setConvertedAmount] = useState()

  let currencyInfo = useCurrencyInfo(from)

  let options = Object.keys(currencyInfo)
  let swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  let convert = () => {
    if(amount){
      setConvertedAmount(amount * currencyInfo[to])
    } else{
      setConvertedAmount(''); 
    }
    
  }
  return (
    <>
      <div className="main w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
        <div className="m-2 box w-ful p-2">
          <div className="child w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 bg-white/30 backdrop-blur-sm">
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
              <div className="input w-full mb-1">
                <InputBox 
                  label="From"
                  onAmountChange={(amount) => setAmount(amount)}
                  amount={amount}
                  currencyOptions={options}
                  selectCurrency={from}
                  onCurrencyChange={(currency)=> setFrom(currency) }
                />
              </div>
              <div className="swap-btn w-full flex justify-center relative ">
                <button id='swapbtn' type='button' className='m-2 border-1 border-white rounded-md bg-blue-500 text-white px-2 py-0.5 w-16 hover:bg-blue-600' onClick={swap}>&uarr;&darr;</button>
              </div>
              <div className="input w-full mb-1">
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectCurrency={to}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  amountDisable      
                />
              </div>
              <button type='submit' className='w-full hover:bg-blue-600 bg-blue-500 text-white px-4 py-1 mt-1 rounded-lg' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
