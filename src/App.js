import "./App.css"
import { Table, Button } from "reactstrap"
import { useEffect, useState } from "react"
import Axios from "axios"
Axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
function App() {
  const [data, setData] = useState({
    people: [],
    writers: [],
    books: [],
  })
  const [addBooks, setAddBooks] = useState({
    name: "",
    writer_id: 0,
  })
  const [writer, setWriter] = useState("")
  useEffect(() => {
    Axios.get("/writer").then((response) => {
      console.log(response)
      setData((prev) => ({ ...prev, writers: response.data }))
    })
  }, [])
  function addBook(e) {
    console.log(e.target.parentElement.querySelector("#book-name").value)
    setAddBooks
  }
  function writersList() {
    return data.writers.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      )
    })
  }
  return (
    <div className="App">
      <div className="top-section">
        <h3>Kitap Temini</h3>
        <div className="person-select">
          <label htmlFor="person">
            Kişiler
            <select name="person" id="person">
              <option value="volvo">Volvo</option>
            </select>
          </label>
        </div>
        <div className="book">
          <div className="item">
            <div className="books">
              <label htmlFor="books">Kitaplar</label>
              <select name="books" id="books">
                <option value="volvo">Volvo</option>
              </select>
            </div>
            <div className="date">
              <label htmlFor="bookDate">Tarih</label>
              <input id="bookDate" type="date" />
            </div>
          </div>
        </div>
        <div className="add-persons">
          <label htmlFor="person-name">
            Name :
            <input id="person-name" type="text" />
          </label>
          <label htmlFor="person-type">
            Type :
            <select name="person-type" id="person-type">
              <option>Type Seçiniz</option>
            </select>
          </label>
          <Button color="primary">Click Me</Button>
        </div>
        <div className="add-books">
          <label htmlFor="book-name">
            Name :
            <input id="book-name" type="text" />
          </label>
          <label htmlFor="Writer-name">
            Writer Name :
            <select name="person-type" id="person-type">
              <option>Yazar Seçiniz</option>
              {writersList()}
            </select>
          </label>
          <Button
            color="primary"
            onClick={(e) => {
              addBook(e)
            }}
          >
            Click Me
          </Button>
        </div>
        <div className="out-of-books">
          <h3>Temindeki Kitaplar</h3>
          <div className="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
