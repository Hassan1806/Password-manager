import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import cookieOptions from './cookieOptions';

dotenv.config();
const jwt_secret = process.env.JWT_SECRET;


app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 16);
  await user.create({email, password: hashedPassword, username});
  res.status(201).send('user registered');
  const db = client.db(dbname);
  const collection = db.collection('users');
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await user.findOne({email});
    if (!user) return res.status(400).send('User account does not exist');
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(400).send('Invalid password');

    const token = jwt.sign({id: user._id}, jwt_secret, {expiresIn: '1d'});

    res.cookie('token', token, cookieOptions).json( {
        user: {
            id: user._id,
            email: user.email,
            username: user.username
        }

    }).send('Login successful');
    
 });
