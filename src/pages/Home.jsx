import { useEffect, useState } from 'react';
import React from 'react'
import Search from '../components/search';
import Modal from '../components/modal';

const Home = () => {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    
  useEffect(() => {

    setLoading(true)

    fetch('http://openlibrary.org/search.json?author=tolkien')
    .then((response)=>response.json())
    .then((data)=>setData(data))
    .then(()=>setLoading(false))
    .catch(setError)

}, [])
console.log(data)
if(loading){
  return <h1 style={{textAlign:'center'}}>....loading</h1>
}
if(error){
  return <pre>{JSON.stringify(error, null,2)}</pre>
}

if(!data){
  return null
}

let array = data.docs

const searchHandler = (search) =>{
  setSearch(search)
  if(search !== ''){
    const newBookList = array.filter((book)=> {
      return Object.values(book)
      .join('')
      .toLowerCase()
      .includes(search.toLowerCase())
    })

    setSearchResults(newBookList)
  }else{
    setSearchResults(array)
  }
}

const handleModal = (e) =>{
let newClass = e.target.closest('.list-item')
newClass.classList.add('flex')
}
  return (
    <div className="container">
    <Search term={search} searchKeyword={searchHandler}/>
    {search.length < 1 ?
    <ul className='list'>
       {array.map((item,i)=>{
        const imgUrl = `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
    return <li key={i} className='list-item'>
         <img src={imgUrl} onClick={handleModal}/>
        {item.title}
        <Modal src={imgUrl} title={item.title} />
        </li>
      })}
    </ul>
    
  :    <ul className='list'>
  {searchResults.map((item,i)=>{
     const imgUrl = `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
return <li key={i} className='list-item'>
        <img src={imgUrl} onClick={handleModal}/>
    {item.title}
    <Modal img={imgUrl} title={item.title}/>
    
</li>
 })}
</ul>}
  </div>
  )
}

export default Home