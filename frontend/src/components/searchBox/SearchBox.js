import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"

const SearchBox = ({history}) => {
  const [keyWord, setKeyWord] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyWord.trim()) {
      history.push(`/search/${keyWord}`)
    }else{
      history.push("/")
    }
    setKeyWord("")
  }
  return (
    <Form onSubmit={submitHandler} className="m-auto pb-1 " >
      <Form.Control
        type="text"
        style={{width:"70%" ,display:"inline-block"}}
        placeholder="find products..."
        className="mr-sm-2 ml-sm-5"
        value={keyWord}
        onChange={(e) => {
          setKeyWord(e.target.value)
        }}
      ></Form.Control>
      <Button type="submit" style={{backgroundColor:"#fbb860" , color:"black"}}  className="p-2 px-3 ">
        search
      </Button>
    </Form>
  )
}

export default SearchBox
