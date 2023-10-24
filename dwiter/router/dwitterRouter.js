import express from 'express';
import * as dwitterController from '../controller/dwitterController.js';
// import ejs from 'ejs'
// import dbconfig from '../db/database.js';

// const conn = dbconfig.init();
// dbconfig.connect(conn);

const router = express.Router();

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded());


// 1. GET: /dwiter - ALL Dwitter List
router.get('/', dwitterController.getAll)


// 2. POST: /dwiter - tweet create
router.post('/', dwitterController.create)

// 3. GET: /dwiter?id=자신의 아이디
router.get('/:id', dwitterController.getDwitter)

//    GET: /dwiter/:id - My Dwitter List
// 4. put: /dwiter/:id  - My Dwitter Update
router.put('/', dwitterController.update)


// 5. DELETE : /dwiter/:id - My Dwitter delete  
router.delete('/', dwitterController.remove)

export default router;