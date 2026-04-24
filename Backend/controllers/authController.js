import bcrypt from 'bcrypt';
import user from '../model/user.js';

export const signup = async = (req , res , next) =>{
    try{
        const {email , password} = req.body;
        const hasedPass = await bcrypt.hash(password , 10);
        const newUser = new user.create({email , hashedPass});
        res.status(201).json(newUser);
    }
    catch(err){
        next(err);
    }
}

export const login = async (req, res, next) => {
    try{
        const {email , password} = req.body;
        const User = await user.findOne({email});
        if(!User){
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password , User.password);
        if(!isPasswordValid){
            return res.status(401).json({ message: 'Invalid password' });
        } 
        const token = jwt.sign({ userId: User._id }, 'your_secret_key', { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch(err){
        next(err);
    }
};