
//9


    let express = require("express");
    const Book = require("../models/bookModel");//4

    const router = express.Router();


//4.Route for save a new Book
router.post('/',async(req, res) => {
    console.log("______save a new Book________")
    console.log("body",req.body)
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear )
        {
            return res.status(400).send({
                message:'send all required fields:title,author,publishYear',
            });
        }
        const newBook ={title:req.body.title,author:req.body.author,publishYear:req.body.publishYear};
        const book = await Book.create(newBook);
        return res.status(200).send(book);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send({ message:error.message});
    }
})

//5 Route for get all books from db
router.get('/',async(req,res)=>{
  try{
     const books  = await Book.find({});
     return res.status(200).send({
        count:books.length,
        data: books
     });
  }
  catch(error){
    console.log(error.message);
    res.status(500).send({message: error.message})
  }
}
)


//6 Route for get all books from db by id
// router.get('/:id',async(req,res)=>{
//     console.log("&&&&&&&&&",req.params)
//     console.log("---------------c")
//     try{
//         const {id} =req.params;
//        const book  = await Book.findById(id);
//        return res.status(200).send({
//           book
//        });
//     }
//     catch(error){
//       console.log(error.message);
//       res.status(500).send({message: error.message})
//     }
//   }
//   )
router.get("/:id", async (req, res) => {
    console.log("call----------------------------------")
    console.log("params",req.params)
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
  
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
  
      return res.status(200).send({ book });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: "Internal server error" });
    }
  });
  


//7 route for update a book
router.put('/:id',async(req,res)=>{
    console.log("________________update_____________")
    console.log("body",req.body);
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear )
        {
            return res.status(400).send({
                message:'send all required fields:title,author,publishYear',
            });
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result)
        {
            return res.status(404).json({message:'book not found'})
        }
        return res.status(200).send({message:"book updated"});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
      }
})


//8 route for delete a book
router.delete('/:id',async(req,res)=>{
    console.log("________delete_________")
    try{
       
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result)
        {
            return res.status(404).json({message:'book not found'})
        }
        return res.status(200).send({message:"book deleted successfully"});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
      }
})
module.exports = router;













// //4.Route for save a new Book
// app.post('/books',async(req, res) => {
//     try{
//         if(!req.body.title || !req.body.author || !req.body.publishYear )
//         {
//             return res.status(400).send({
//                 message:'send all required fields:title,author,publishYear',
//             });
//         }
//         const newBook ={title:req.body.title,author:req.body.author,publishYear:req.body.publishYear};
//         const book = await Book.create(newBook);
//         return res.status(200).send(book);
//     }
//     catch(err) {
//         console.log(err.message);
//         res.status(500).send({ message:error.message});
//     }
// })

// //5 Route for get all books from db
// app.get('/books',async(req,res)=>{
//   try{
//      const books  = await Book.find({});
//      return res.status(200).send({
//         count:books.length,
//         data: books
//      });
//   }
//   catch(error){
//     console.log(error.message);
//     res.status(500).send({message: error.message})
//   }
// }
// )


// //6 Route for get all books from db by id
// app.get('/books/:id',async(req,res)=>{
//     try{
//         const {id} =req.params;
//        const book  = await Book.findById(id);
//        return res.status(200).send({
//           book
//        });
//     }
//     catch(error){
//       console.log(error.message);
//       res.status(500).send({message: error.message})
//     }
//   }
//   )


// //7 route for update a book
// app.put('/books/:id',async(req,res)=>{
//     try{
//         if(!req.body.title || !req.body.author || !req.body.publishYear )
//         {
//             return res.status(400).send({
//                 message:'send all required fields:title,author,publishYear',
//             });
//         }
//         const {id} = req.params;
//         const result = await Book.findByIdAndUpdate(id,req.body);
//         if(!result)
//         {
//             return res.status(404).json({message:'book not found'})
//         }
//         return res.status(200).send({message:"book updated"});
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//       }
// })


// //8 route for delete a book
// app.delete('/books/:id',async(req,res)=>{
//     try{
       
//         const {id} = req.params;
//         const result = await Book.findByIdAndDelete(id);
//         if(!result)
//         {
//             return res.status(404).json({message:'book not found'})
//         }
//         return res.status(200).send({message:"book deleted successfully"});
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//       }
// })
 