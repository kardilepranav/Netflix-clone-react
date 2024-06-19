const User = require('../model/userModel');

module.exports.addTolikedMovies = async (req, res) => {
	try {
		const { email, data } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			const { likedMovies } = user;
			const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
			if (!movieAlreadyLiked) {
				await User.findByIdAndUpdate(
					user._id,
					{
						likedMovies: [...user.likedMovies, data],
					},
					{ new: true }
				);
			} else {
				return res.json({ msg: 'Movie already added to the liked list' });
			}
		} else {
			await User.create({ email, likedMovies: [data] });
		}
		return res.json({ msg: 'Movie added successfully' });
	} catch (error) {
		return res.json({ msg: 'Error adding movie' });
	}
};

module.exports.getLikedMovies = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.findOne({ email });
		if (user) {
			res.json({ msg: 'success', movies: user.likedMovies });
		} else {
			return res.json({ msg: 'Error fetching movie' });
		}
	} catch (err) {
		return res.json({ msg: 'Error fetching movies' });
	}
};

module.exports.removeFromLikedMovies = async (req, res) => {
	try {
		const { email, movieId } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			const { likedMovies } = user;
			const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
			if (!movieAlreadyLiked) {
				await User.findByIdAndUpdate(
					user._id,
					{
						likedMovies: [...user.likedMovies, data],
					},
					{ new: true }
				);
			}
		}
	} catch (err) {
		res.json({ msg: 'Error while removing' });
	}
};
