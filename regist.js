import NextAuth from 'next-auth';
import User from '../../../models/User';

export default NextAuth({
async register(req, res) {
const { name, email, password } = req.body;
const user = new User({ name, email, password });
try {
await user.save();
res.status(201).json({ message: 'User created successfully' });
} catch (error) {
res.status(500).json({ message: 'Error creating user' });
}
}
});
