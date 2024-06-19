const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/user', userRoutes);

mongoose
	.connect(
		'mongodb+srv://pranavkardile777:DSAjava%40c++@cluster0.uvqxurc.mongodb.net/netflix'
	)
	.then(() => {
		console.log('DB connected');
	});

app.listen(3000, console.log('server started'));
