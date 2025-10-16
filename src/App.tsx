
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";
import FavoriteCommnets from "./pages/FavoriteComments";
import EditComments from "./pages/EditComment";
import './App.css'

function App() {


  return (
    <>
       <Router>
        <Routes>
          
          <Route path="/" element={<CommentList />}></Route>
          <Route path="/add" element={<AddComment />}></Route>
          <Route path="/favorites" element={<FavoriteCommnets />}></Route>
          <Route path="/edit/:id" element={<EditComments />}></Route>
          
        </Routes>
      </Router>

    </>
  )
}

export default App
